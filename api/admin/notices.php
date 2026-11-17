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
        $stmt = $pdo->query("SELECT n.*, c.name as category_name FROM notices n JOIN notice_categories c ON n.category_id = c.id ORDER BY n.id DESC");
        sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $title = sanitizeInput($data['title'] ?? '');
        $categoryId = intval($data['category_id'] ?? 1);
        $fileUrl = !empty($data['file_url']) ? sanitizeInput($data['file_url']) : null;
        $content = $data['content'] ?? '';
        $publishDate = $data['publish_date'] ?? date('Y-m-d');
        $isActive = isset($data['is_active']) ? intval($data['is_active']) : 1;

        $stmt = $pdo->prepare("INSERT INTO notices (title, category_id, file_url, content, publish_date, is_active) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$title, $categoryId, $fileUrl, $content, $publishDate, $isActive]);
        $newId = $pdo->lastInsertId();

        logActivity('CREATE_NOTICE', "Published notice: $title (ID: $newId)");
        sendResponse(['success' => true, 'message' => 'Notice created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        if (!$id) sendError('Notice ID required', 400);

        $stmt = $pdo->prepare("UPDATE notices SET title = ?, category_id = ?, file_url = ?, content = ?, publish_date = ?, is_active = ? WHERE id = ?");
        $stmt->execute([
            sanitizeInput($data['title']),
            intval($data['category_id']),
            !empty($data['file_url']) ? sanitizeInput($data['file_url']) : null,
            $data['content'],
            $data['publish_date'],
            intval($data['is_active'] ?? 1),
            $id
        ]);

        logActivity('UPDATE_NOTICE', "Updated notice ID: $id");
        sendResponse(['success' => true, 'message' => 'Notice updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if (!$id) sendError('Notice ID required', 400);

        $stmt = $pdo->prepare("DELETE FROM notices WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_NOTICE', "Deleted notice ID: $id");
        sendResponse(['success' => true, 'message' => 'Notice deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Notice operation failed: ' . $e->getMessage(), 500);
}
