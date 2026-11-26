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
        $events = $stmt->fetchAll();
        foreach ($events as &$ev) {
            if (!empty($ev['images']) && is_string($ev['images'])) {
                $ev['images'] = json_decode($ev['images'], true);
            }
        }
        sendResponse(['success' => true, 'data' => $events]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $title = sanitizeInput($data['title'] ?? '');
        $category = sanitizeInput($data['category'] ?? 'General');
        $eventDate = $data['event_date'] ?? date('Y-m-d');
        $eventTime = sanitizeInput($data['event_time'] ?? '09:00 AM - 01:00 PM');
        $location = sanitizeInput($data['location'] ?? 'Campus Auditorium');
        $albumId = !empty($data['gallery_album_id']) ? intval($data['gallery_album_id']) : null;
        $excerpt = sanitizeInput($data['excerpt'] ?? '');
        $content = $data['content'] ?? '';
        $imageUrl = sanitizeInput($data['image_url'] ?? '/assets/1.JPG.jpeg');
        $images = is_array($data['images'] ?? null) ? json_encode($data['images']) : null;
        $isFeatured = intval($data['is_featured'] ?? 0);
        $isPublished = isset($data['is_published']) ? intval($data['is_published']) : 1;

        $stmt = $pdo->prepare("INSERT INTO events (title, category, event_date, event_time, location, gallery_album_id, excerpt, content, image_url, images, is_featured, is_published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$title, $category, $eventDate, $eventTime, $location, $albumId, $excerpt, $content, $imageUrl, $images, $isFeatured, $isPublished]);
        $newId = $pdo->lastInsertId();

        logActivity('CREATE_EVENT', "Created event: $title ($category)");
        sendResponse(['success' => true, 'message' => 'Event created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        if (!$id) sendError('Event ID required', 400);

        $category = sanitizeInput($data['category'] ?? 'General');
        $albumId = !empty($data['gallery_album_id']) ? intval($data['gallery_album_id']) : null;
        $images = is_array($data['images'] ?? null) ? json_encode($data['images']) : (isset($data['images']) && is_string($data['images']) ? $data['images'] : null);
        $isPublished = isset($data['is_published']) ? intval($data['is_published']) : 1;

        $stmt = $pdo->prepare("UPDATE events SET title = ?, category = ?, event_date = ?, event_time = ?, location = ?, gallery_album_id = ?, excerpt = ?, content = ?, image_url = ?, images = ?, is_featured = ?, is_published = ? WHERE id = ?");
        $stmt->execute([
            sanitizeInput($data['title']),
            $category,
            $data['event_date'],
            sanitizeInput($data['event_time']),
            sanitizeInput($data['location']),
            $albumId,
            sanitizeInput($data['excerpt']),
            $data['content'],
            sanitizeInput($data['image_url']),
            $images,
            intval($data['is_featured'] ?? 0),
            $isPublished,
            $id
        ]);

        logActivity('UPDATE_EVENT', "Updated event ID: $id");
        sendResponse(['success' => true, 'message' => 'Event updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $stmt = $pdo->prepare("DELETE FROM events WHERE id = ?");
        $stmt->execute([$id]);
        logActivity('DELETE_EVENT', "Deleted event ID: $id");
        sendResponse(['success' => true, 'message' => 'Event deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Events operation failed: ' . $e->getMessage(), 500);
}
