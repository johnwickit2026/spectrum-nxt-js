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
        $stmt = $pdo->query("SELECT g.*, a.title as album_title FROM galleries g LEFT JOIN gallery_albums a ON g.album_id = a.id ORDER BY g.id DESC");
        $galleries = $stmt->fetchAll();
        $albums = $pdo->query("SELECT * FROM gallery_albums ORDER BY id ASC")->fetchAll();
        sendResponse(['success' => true, 'data' => $galleries, 'albums' => $albums]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $title = sanitizeInput($data['title'] ?? '');
        $category = sanitizeInput($data['category'] ?? 'Campus');
        $imageUrl = sanitizeInput($data['image_url'] ?? '/assets/2.JPG.jpeg');
        $albumId = !empty($data['album_id']) ? intval($data['album_id']) : null;

        $stmt = $pdo->prepare("INSERT INTO galleries (title, category, image_url, album_id) VALUES (?, ?, ?, ?)");
        $stmt->execute([$title, $category, $imageUrl, $albumId]);
        $newId = $pdo->lastInsertId();

        logActivity('ADD_GALLERY_PHOTO', "Added photo: $title (ID: $newId)");
        sendResponse(['success' => true, 'message' => 'Photo added successfully', 'id' => $newId]);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if (!$id) sendError('Photo ID required', 400);

        $stmt = $pdo->prepare("DELETE FROM galleries WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_GALLERY_PHOTO', "Deleted photo ID: $id");
        sendResponse(['success' => true, 'message' => 'Photo removed successfully']);
    }
} catch (Exception $e) {
    sendError('Gallery operation failed: ' . $e->getMessage(), 500);
}
