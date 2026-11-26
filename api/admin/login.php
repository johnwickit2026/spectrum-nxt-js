<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

// Session-based rate limiting (5 attempts in 15 minutes)
$now = time();
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
    $_SESSION['first_failed_time'] = $now;
}

if ($_SESSION['login_attempts'] >= 5 && ($now - $_SESSION['first_failed_time'] < 900)) {
    $remaining = 900 - ($now - $_SESSION['first_failed_time']);
    sendError("Too many failed attempts. Please try again in " . ceil($remaining / 60) . " minutes.", 429);
}

$input = getJsonInput();
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');

if (empty($username) || empty($password)) {
    sendError('Username and password are required.', 400);
}

$pdo = Database::getConnection();

if (!$pdo) {
    sendError('Database connection error. Please contact the administrator.', 503);
}

try {
    $stmt = $pdo->prepare("SELECT a.*, r.name as role_name FROM admins a JOIN admin_roles r ON a.role_id = r.id WHERE (a.username = ? OR a.email = ?) AND a.is_active = 1");
    $stmt->execute([$username, $username]);
    $admin = $stmt->fetch();

    $authenticated = false;
    if ($admin && password_verify($password, $admin['password_hash'])) {
        $authenticated = true;
    }

    if ($authenticated) {
        // Regenerate session id to protect against session fixation
        if (session_status() === PHP_SESSION_ACTIVE) {
            session_regenerate_id(true);
        }

        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_name'] = $admin['full_name'];
        $_SESSION['admin_role'] = $admin['role_name'];
        $token = bin2hex(random_bytes(32));
        $_SESSION['admin_token'] = $token;
        $_SESSION['login_attempts'] = 0;

        // Update last login
        $upd = $pdo->prepare("UPDATE admins SET last_login = NOW() WHERE id = ?");
        $upd->execute([$admin['id']]);

        logActivity('ADMIN_LOGIN', 'Administrator logged in successfully.');

        sendResponse([
            'success' => true,
            'message' => 'Logged in successfully.',
            'token' => $token,
            'user' => [
                'id' => $admin['id'],
                'name' => $admin['full_name'],
                'username' => $admin['username'],
                'role' => $admin['role_name']
            ]
        ]);
    } else {
        $_SESSION['login_attempts']++;
        sendError('Invalid username or password.', 401);
    }
} catch (Exception $e) {
    sendError('Login error: ' . $e->getMessage(), 500);
}
