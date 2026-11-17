<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';

$isLoggedIn = false;
$userData = null;

if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    $isLoggedIn = true;
    $userData = [
        'id' => $_SESSION['admin_id'] ?? 1,
        'name' => $_SESSION['admin_name'] ?? 'SIS Administrator',
        'role' => $_SESSION['admin_role'] ?? 'Super Admin'
    ];
} else if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
    $token = $matches[1];
    if (isset($_SESSION['admin_token']) && hash_equals($_SESSION['admin_token'], $token)) {
        $isLoggedIn = true;
        $userData = [
            'id' => $_SESSION['admin_id'] ?? 1,
            'name' => $_SESSION['admin_name'] ?? 'SIS Administrator',
            'role' => $_SESSION['admin_role'] ?? 'Super Admin'
        ];
    }
}

if ($isLoggedIn) {
    sendResponse(['success' => true, 'authenticated' => true, 'user' => $userData]);
} else {
    sendResponse(['success' => false, 'authenticated' => false], 401);
}
