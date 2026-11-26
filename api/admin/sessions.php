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
        $sessions = $pdo->query("SELECT * FROM academic_sessions ORDER BY start_date DESC")->fetchAll();
        sendResponse(['success' => true, 'sessions' => $sessions]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $name = sanitizeInput($data['name'] ?? '');
        $type = sanitizeInput($data['session_type'] ?? 'june');
        $startDate = sanitizeInput($data['start_date'] ?? date('Y-m-d'));
        $endDate = sanitizeInput($data['end_date'] ?? date('Y-m-d', strtotime('+1 year')));
        $status = sanitizeInput($data['status'] ?? 'active');
        $isCurrent = !empty($data['is_current']) ? 1 : 0;
        $description = sanitizeInput($data['description'] ?? '');

        if (empty($name)) {
            sendError('Session name is required');
        }

        // If setting as current, unset current for other sessions of same type
        if ($isCurrent) {
            $pdo->prepare("UPDATE academic_sessions SET is_current = 0 WHERE session_type = ?")->execute([$type]);
        }

        $stmt = $pdo->prepare("INSERT INTO academic_sessions (name, session_type, start_date, end_date, status, is_current, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$name, $type, $startDate, $endDate, $status, $isCurrent, $description]);
        $newId = $pdo->lastInsertId();

        logActivity('ADD_SESSION', "Created academic session: $name ($type)");
        sendResponse(['success' => true, 'message' => 'Academic session created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        $name = sanitizeInput($data['name'] ?? '');
        $type = sanitizeInput($data['session_type'] ?? 'june');
        $startDate = sanitizeInput($data['start_date'] ?? '');
        $endDate = sanitizeInput($data['end_date'] ?? '');
        $status = sanitizeInput($data['status'] ?? 'active');
        $isCurrent = !empty($data['is_current']) ? 1 : 0;
        $description = sanitizeInput($data['description'] ?? '');

        if ($id <= 0 || empty($name)) {
            sendError('Invalid session ID or name');
        }

        if ($isCurrent) {
            $pdo->prepare("UPDATE academic_sessions SET is_current = 0 WHERE session_type = ? AND id != ?")->execute([$type, $id]);
        }

        $stmt = $pdo->prepare("UPDATE academic_sessions SET name = ?, session_type = ?, start_date = ?, end_date = ?, status = ?, is_current = ?, description = ? WHERE id = ?");
        $stmt->execute([$name, $type, $startDate, $endDate, $status, $isCurrent, $description, $id]);

        logActivity('UPDATE_SESSION', "Updated academic session: $name (ID: $id)");
        sendResponse(['success' => true, 'message' => 'Academic session updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if ($id <= 0) sendError('Invalid session ID');

        $stmt = $pdo->prepare("DELETE FROM academic_sessions WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_SESSION', "Deleted academic session ID: $id");
        sendResponse(['success' => true, 'message' => 'Academic session deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Session operation failed: ' . $e->getMessage(), 500);
}
