<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

function setCorsHeaders() {
    $allowedOrigins = [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://spectrumintlschool.com',
        'https://www.spectrumintlschool.com',
        'https://parallel-goldenrod-hare-45.hostingersite.com'
    ];

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, $allowedOrigins, true)) {
        header("Access-Control-Allow-Origin: " . $origin);
    } else if (!empty($origin)) {
        // Allow origin matching *.hostingersite.com or localhost
        if (preg_match('/^https?:\/\/(localhost|127\.0\.0\.1|.*\.hostingersite\.com)(:\d+)?$/i', $origin)) {
            header("Access-Control-Allow-Origin: " . $origin);
        } else {
            header("Access-Control-Allow-Origin: https://spectrumintlschool.com");
        }
    } else {
        header("Access-Control-Allow-Origin: *");
    }

    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}

function sendResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit();
}

function sendError($message, $statusCode = 400, $errors = []) {
    http_response_code($statusCode);
    echo json_encode([
        'success' => false,
        'message' => $message,
        'errors'  => $errors
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit();
}

function getJsonInput() {
    $raw = file_get_contents('php://input');
    if (empty($raw)) {
        return $_POST;
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    return htmlspecialchars(trim((string)$data), ENT_QUOTES, 'UTF-8');
}

function requireAdminAuth() {
    // Check Authorization header token for API clients
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    
    if (preg_match('/Bearer\s+(.+)$/i', $authHeader, $matches)) {
        $token = trim($matches[1]);
        if (isset($_SESSION['admin_token']) && hash_equals($_SESSION['admin_token'], $token)) {
            return true;
        }
    }

    // Also check native session state
    if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
        return true;
    }

    sendError('Unauthorized access. Please login.', 401);
}

function logActivity($action, $details = '') {
    $pdo = Database::getConnection();
    if (!$pdo) return;
    try {
        $adminId = $_SESSION['admin_id'] ?? null;
        $adminName = $_SESSION['admin_name'] ?? 'System';
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

        $stmt = $pdo->prepare("INSERT INTO activity_logs (admin_id, admin_name, action, details, ip_address) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$adminId, $adminName, $action, $details, $ip]);
    } catch (Exception $e) {
        error_log("Failed to log activity: " . $e->getMessage());
    }
}
