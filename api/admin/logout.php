<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();

if (isset($_SESSION['admin_logged_in'])) {
    logActivity('ADMIN_LOGOUT', 'Administrator logged out.');
}

$_SESSION = [];
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}
session_destroy();

sendResponse(['success' => true, 'message' => 'Logged out successfully.']);
