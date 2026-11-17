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
        $staff = $pdo->query("SELECT * FROM staff ORDER BY sort_order ASC, id ASC")->fetchAll();
        $committees = $pdo->query("SELECT * FROM committees ORDER BY sort_order ASC, id ASC")->fetchAll();
        sendResponse(['success' => true, 'staff' => $staff, 'committees' => $committees]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $isCommittee = !empty($data['committee_type']);

        if ($isCommittee) {
            $name = sanitizeInput($data['name'] ?? '');
            $designation = sanitizeInput($data['designation'] ?? '');
            $type = sanitizeInput($data['committee_type'] ?? 'management');
            $photo = sanitizeInput($data['photo_url'] ?? '/assets/IMG_9993.JPG.jpeg');
            $bio = sanitizeInput($data['bio'] ?? '');

            $stmt = $pdo->prepare("INSERT INTO committees (name, designation, committee_type, photo_url, bio) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$name, $designation, $type, $photo, $bio]);
            $newId = $pdo->lastInsertId();

            logActivity('ADD_COMMITTEE_MEMBER', "Added committee member: $name");
            sendResponse(['success' => true, 'message' => 'Committee member added', 'id' => $newId]);
        } else {
            $name = sanitizeInput($data['name'] ?? '');
            $designation = sanitizeInput($data['designation'] ?? '');
            $department = sanitizeInput($data['department'] ?? 'General');
            $teamType = sanitizeInput($data['team_type'] ?? 'academic');
            $bio = sanitizeInput($data['bio'] ?? '');
            $photo = sanitizeInput($data['photo_url'] ?? '/assets/IMG_2461.JPG.jpeg');
            $phone = sanitizeInput($data['phone'] ?? '');
            $email = sanitizeInput($data['email'] ?? '');

            $stmt = $pdo->prepare("INSERT INTO staff (name, designation, department, team_type, bio, photo_url, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$name, $designation, $department, $teamType, $bio, $photo, $phone, $email]);
            $newId = $pdo->lastInsertId();

            logActivity('ADD_STAFF', "Added staff member: $name");
            sendResponse(['success' => true, 'message' => 'Staff member added', 'id' => $newId]);
        }
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $type = $_GET['target'] ?? 'staff';

        if ($type === 'committee') {
            $stmt = $pdo->prepare("DELETE FROM committees WHERE id = ?");
            $stmt->execute([$id]);
            logActivity('DELETE_COMMITTEE_MEMBER', "Deleted committee member ID: $id");
        } else {
            $stmt = $pdo->prepare("DELETE FROM staff WHERE id = ?");
            $stmt->execute([$id]);
            logActivity('DELETE_STAFF', "Deleted staff member ID: $id");
        }
        sendResponse(['success' => true, 'message' => 'Member deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Staff operation failed: ' . $e->getMessage(), 500);
}
