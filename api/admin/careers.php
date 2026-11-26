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
        $view = sanitizeInput($_GET['view'] ?? 'all');
        $careers = $pdo->query("SELECT * FROM careers ORDER BY deadline DESC, id DESC")->fetchAll();
        
        $applications = [];
        try {
            $applications = $pdo->query("SELECT * FROM job_applications ORDER BY id DESC")->fetchAll();
        } catch (Exception $e) {
            // Table might not exist yet before migration
        }

        sendResponse([
            'success' => true, 
            'careers' => $careers, 
            'applications' => $applications
        ]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $stmt = $pdo->prepare("INSERT INTO careers (title, department, job_type, deadline, requirements, responsibilities, is_active) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            sanitizeInput($data['title'] ?? ''),
            sanitizeInput($data['department'] ?? 'Academics'),
            sanitizeInput($data['job_type'] ?? 'Full Time'),
            $data['deadline'] ?? date('Y-m-d', strtotime('+30 days')),
            $data['requirements'] ?? '',
            $data['responsibilities'] ?? '',
            intval($data['is_active'] ?? 1)
        ]);
        $newId = $pdo->lastInsertId();
        logActivity('CREATE_CAREER', "Added job opening: " . sanitizeInput($data['title']));
        sendResponse(['success' => true, 'message' => 'Career opening published', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $target = $data['target'] ?? 'career';

        if ($target === 'application') {
            $appId = intval($data['id'] ?? 0);
            $status = sanitizeInput($data['status'] ?? 'reviewed');
            $stmt = $pdo->prepare("UPDATE job_applications SET status = ? WHERE id = ?");
            $stmt->execute([$status, $appId]);
            logActivity('UPDATE_APPLICATION', "Updated job application $appId status to $status");
            sendResponse(['success' => true, 'message' => 'Application status updated']);
        } else {
            $id = intval($data['id'] ?? 0);
            $stmt = $pdo->prepare("UPDATE careers SET title = ?, department = ?, job_type = ?, deadline = ?, requirements = ?, responsibilities = ?, is_active = ? WHERE id = ?");
            $stmt->execute([
                sanitizeInput($data['title'] ?? ''),
                sanitizeInput($data['department'] ?? 'Academics'),
                sanitizeInput($data['job_type'] ?? 'Full Time'),
                $data['deadline'] ?? date('Y-m-d'),
                $data['requirements'] ?? '',
                $data['responsibilities'] ?? '',
                intval($data['is_active'] ?? 1),
                $id
            ]);
            logActivity('UPDATE_CAREER', "Updated job opening: " . sanitizeInput($data['title']) . " (ID: $id)");
            sendResponse(['success' => true, 'message' => 'Job opening updated']);
        }
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $target = $_GET['target'] ?? 'career';

        if ($target === 'application') {
            $stmt = $pdo->prepare("DELETE FROM job_applications WHERE id = ?");
            $stmt->execute([$id]);
            logActivity('DELETE_APPLICATION', "Deleted application ID: $id");
            sendResponse(['success' => true, 'message' => 'Application removed']);
        } else {
            $stmt = $pdo->prepare("DELETE FROM careers WHERE id = ?");
            $stmt->execute([$id]);
            logActivity('DELETE_CAREER', "Removed job ID: $id");
            sendResponse(['success' => true, 'message' => 'Job opening removed']);
        }
    }
} catch (Exception $e) {
    sendError('Careers operation failed: ' . $e->getMessage(), 500);
}
