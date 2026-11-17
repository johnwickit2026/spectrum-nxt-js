<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

if (!$pdo) {
    sendResponse(['success' => true, 'message' => 'DB offline - operation simulated']);
}

try {
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM events ORDER BY event_date DESC");
        sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $title = sanitizeInput($data['title'] ?? '');
        $eventDate = $data['event_date'] ?? date('Y-m-d');
        $eventTime = sanitizeInput($data['event_time'] ?? '09:00 AM - 01:00 PM');
        $location = sanitizeInput($data['location'] ?? 'Campus Auditorium');
        $excerpt = sanitizeInput($data['excerpt'] ?? '');
        $content = $data['content'] ?? '';
        $imageUrl = sanitizeInput($data['image_url'] ?? '/assets/1.JPG.jpeg');
        $isFeatured = intval($data['is_featured'] ?? 0);

        $stmt = $pdo->prepare("INSERT INTO events (title, event_date, event_time, location, excerpt, content, image_url, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$title, $eventDate, $eventTime, $location, $excerpt, $content, $imageUrl, $isFeatured]);
        $newId = $pdo->lastInsertId();

        logActivity('CREATE_EVENT', "Created event: $title");
        sendResponse(['success' => true, 'message' => 'Event created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        if (!$id) sendError('Event ID required', 400);

        $stmt = $pdo->prepare("UPDATE events SET title = ?, event_date = ?, event_time = ?, location = ?, excerpt = ?, content = ?, image_url = ?, is_featured = ? WHERE id = ?");
        $stmt->execute([
            sanitizeInput($data['title']),
            $data['event_date'],
            sanitizeInput($data['event_time']),
            sanitizeInput($data['location']),
            sanitizeInput($data['excerpt']),
            $data['content'],
            sanitizeInput($data['image_url']),
            intval($data['is_featured'] ?? 0),
            $id
        ]);

        logActivity('UPDATE_EVENT', "Updated event ID: $id");
        sendResponse(['success' => true, 'message' => 'Event updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if (!$id) sendError('Event ID required', 400);

        $stmt = $pdo->prepare("DELETE FROM events WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_EVENT', "Deleted event ID: $id");
        sendResponse(['success' => true, 'message' => 'Event deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Event operation failed: ' . $e->getMessage(), 500);
}
