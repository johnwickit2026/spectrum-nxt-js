<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

// Simple session-based rate limiting (5 attempts in 15 minutes)
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

// Fallback admin check if DB is not connected yet (Default: superadmin / Admin@SIS2026)
if (!$pdo) {
    if ($username === 'superadmin' && $password === 'Admin@SIS2026') {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id'] = 1;
        $_SESSION['admin_name'] = 'SIS Super Administrator';
        $_SESSION['admin_role'] = 'Super Admin';
        $token = bin2hex(random_bytes(32));
        $_SESSION['admin_token'] = $token;

        $_SESSION['login_attempts'] = 0;
        sendResponse([
            'success' => true,
            'message' => 'Logged in successfully (fallback mode).',
            'token' => $token,
            'user' => [
                'id' => 1,
                'name' => 'SIS Super Administrator',
                'username' => 'superadmin',
                'role' => 'Super Admin'
            ]
        ]);
    } else {
        $_SESSION['login_attempts']++;
        sendError('Invalid username or password.', 401);
    }
}

try {
    $stmt = $pdo->prepare("SELECT a.*, r.name as role_name FROM admins a JOIN admin_roles r ON a.role_id = r.id WHERE (a.username = ? OR a.email = ?) AND a.is_active = 1");
    $stmt->execute([$username, $username]);
    $admin = $stmt->fetch();

    // Check fallback password or password_verify
    $authenticated = false;
    if ($admin && password_verify($password, $admin['password_hash'])) {
        $authenticated = true;
    } else if ($username === 'superadmin' && $password === 'Admin@SIS2026') {
        $authenticated = true;
    }

    if ($authenticated) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id'] = $admin ? $admin['id'] : 1;
        $_SESSION['admin_name'] = $admin ? $admin['full_name'] : 'SIS Chief Administrator';
        $_SESSION['admin_role'] = $admin ? $admin['role_name'] : 'Super Admin';
        $token = bin2hex(random_bytes(32));
        $_SESSION['admin_token'] = $token;
        $_SESSION['login_attempts'] = 0;

        // Update last login
        if ($admin) {
            $upd = $pdo->prepare("UPDATE admins SET last_login = NOW() WHERE id = ?");
            $upd->execute([$admin['id']]);
        }

        logActivity('ADMIN_LOGIN', 'Administrator logged in successfully.');

        sendResponse([
            'success' => true,
            'message' => 'Logged in successfully.',
            'token' => $token,
            'user' => [
                'id' => $admin ? $admin['id'] : 1,
                'name' => $admin ? $admin['full_name'] : 'SIS Chief Administrator',
                'username' => $admin ? $admin['username'] : 'superadmin',
                'role' => $admin ? $admin['role_name'] : 'Super Admin'
            ]
        ]);
    } else {
        $_SESSION['login_attempts']++;
        logActivity('LOGIN_FAILED', "Failed login attempt for username: $username");
        sendError('Invalid username or password.', 401);
    }
} catch (Exception $e) {
    sendError('Authentication server error: ' . $e->getMessage(), 500);
}
