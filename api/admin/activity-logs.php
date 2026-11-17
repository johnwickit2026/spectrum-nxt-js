<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();

if (!$pdo) {
    sendResponse(['success' => true, 'data' => []]);
}

try {
    $stmt = $pdo->query("SELECT * FROM activity_logs ORDER BY id DESC LIMIT 100");
    sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
} catch (Exception $e) {
    sendError('Activity logs error: ' . $e->getMessage(), 500);
}
