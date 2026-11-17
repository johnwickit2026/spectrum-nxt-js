<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

if (!$pdo) {
    sendResponse(['success' => true, 'contacts' => [], 'feedback' => [], 'appointments' => []]);
}

try {
    if ($method === 'GET') {
        $contacts = $pdo->query("SELECT * FROM contact_submissions ORDER BY id DESC")->fetchAll();
        $feedback = $pdo->query("SELECT * FROM feedback_submissions ORDER BY id DESC")->fetchAll();
        $appointments = $pdo->query("SELECT * FROM appointment_requests ORDER BY id DESC")->fetchAll();

        sendResponse([
            'success' => true,
            'contacts' => $contacts,
            'feedback' => $feedback,
            'appointments' => $appointments
        ]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $type = $data['type'] ?? '';
        $id = intval($data['id'] ?? 0);

        if ($type === 'appointment') {
            $status = sanitizeInput($data['status'] ?? 'approved');
            $stmt = $pdo->prepare("UPDATE appointment_requests SET status = ? WHERE id = ?");
            $stmt->execute([$status, $id]);
            logActivity('UPDATE_APPOINTMENT_STATUS', "Set appointment #$id status to $status");
        } else if ($type === 'contact') {
            $stmt = $pdo->prepare("UPDATE contact_submissions SET is_read = 1 WHERE id = ?");
            $stmt->execute([$id]);
        } else if ($type === 'feedback') {
            $stmt = $pdo->prepare("UPDATE feedback_submissions SET is_reviewed = 1 WHERE id = ?");
            $stmt->execute([$id]);
        }
        sendResponse(['success' => true, 'message' => 'Status updated']);
    }

    if ($method === 'DELETE') {
        $type = $_GET['type'] ?? '';
        $id = intval($_GET['id'] ?? 0);

        if ($type === 'contact') {
            $stmt = $pdo->prepare("DELETE FROM contact_submissions WHERE id = ?");
            $stmt->execute([$id]);
        } else if ($type === 'feedback') {
            $stmt = $pdo->prepare("DELETE FROM feedback_submissions WHERE id = ?");
            $stmt->execute([$id]);
        } else if ($type === 'appointment') {
            $stmt = $pdo->prepare("DELETE FROM appointment_requests WHERE id = ?");
            $stmt->execute([$id]);
        }
        logActivity('DELETE_SUBMISSION', "Deleted $type submission #$id");
        sendResponse(['success' => true, 'message' => 'Record deleted']);
    }
} catch (Exception $e) {
    sendError('Submission processing error: ' . $e->getMessage(), 500);
}
