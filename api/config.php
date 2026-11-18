<?php
/**
 * Spectrum International School - Database & Environment Configuration
 * Ready for Hostinger Shared PHP Hosting / hPanel
 */

// Error reporting for production (logs to server error log, does not expose raw errors)
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// Session configuration
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', '1');
    ini_set('session.use_only_cookies', '1');
    ini_set('session.cookie_samesite', 'Lax');
    // If running under HTTPS
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
        ini_set('session.cookie_secure', '1');
    }
    session_start();
}

// Database Credentials - update with Hostinger MySQL database details
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'u153132463_johnwick');
define('DB_USER', getenv('DB_USER') ?: 'u153132463_nxtjs');
define('DB_PASS', getenv('DB_PASS') ?: '!0^09+S;2t2U1ij+');
define('DB_CHARSET', 'utf8mb4');

// Upload directory path
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL', '/api/uploads/');

// Notification Email
define('SCHOOL_EMAIL', 'spectrumintlschool@gmail.com');
define('MAIL_FROM', 'noreply@spectrumintlschool.com');
