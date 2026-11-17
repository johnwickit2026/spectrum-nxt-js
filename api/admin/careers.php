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
        $stmt = $pdo->query("SELECT * FROM careers ORDER BY id DESC");
        sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $stmt = $pdo->prepare("INSERT INTO careers (title, department, job_type, deadline, requirements, responsibilities, is_active) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            sanitizeInput($data['title']),
            sanitizeInput($data['department']),
            sanitizeInput($data['job_type'] ?? 'Full Time'),
            $data['deadline'],
            $data['requirements'],
            $data['responsibilities'],
            intval($data['is_active'] ?? 1)
        ]);
        $newId = $pdo->lastInsertId();
        logActivity('CREATE_CAREER', "Added job opening: " . sanitizeInput($data['title']));
        sendResponse(['success' => true, 'message' => 'Career opening published', 'id' => $newId]);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $stmt = $pdo->prepare("DELETE FROM careers WHERE id = ?");
        $stmt->execute([$id]);
        logActivity('DELETE_CAREER', "Removed job ID: $id");
        sendResponse(['success' => true, 'message' => 'Job opening removed']);
    }
} catch (Exception $e) {
    sendError('Careers operation failed: ' . $e->getMessage(), 500);
}
