<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();

if (!$pdo) {
    sendResponse([
        'success' => true,
        'stats' => [
            'total_blogs' => 3,
            'total_notices' => 4,
            'total_events' => 3,
            'contact_submissions' => 0,
            'feedback_submissions' => 0,
            'appointment_requests' => 0,
            'admissions_status' => 'Open',
        ],
        'recent_submissions' => [],
        'recent_activity' => [
            ['action' => 'SYSTEM_INIT', 'details' => 'Dashboard initialized', 'created_at' => date('Y-m-d H:i:s')]
        ]
    ]);
}

try {
    $stats = [
        'total_blogs' => (int)$pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn(),
        'total_notices' => (int)$pdo->query("SELECT COUNT(*) FROM notices")->fetchColumn(),
        'total_events' => (int)$pdo->query("SELECT COUNT(*) FROM events")->fetchColumn(),
        'contact_submissions' => (int)$pdo->query("SELECT COUNT(*) FROM contact_submissions WHERE is_read = 0")->fetchColumn(),
        'feedback_submissions' => (int)$pdo->query("SELECT COUNT(*) FROM feedback_submissions WHERE is_reviewed = 0")->fetchColumn(),
        'appointment_requests' => (int)$pdo->query("SELECT COUNT(*) FROM appointment_requests WHERE status = 'pending'")->fetchColumn(),
    ];

    $admissionSetting = $pdo->query("SELECT setting_value FROM site_settings WHERE setting_key = 'admissions_enabled'")->fetchColumn();
    $stats['admissions_status'] = ($admissionSetting === '1' || $admissionSetting === null) ? 'Open' : 'Closed';

    $recentContacts = $pdo->query("SELECT id, name, email, subject, created_at, 'contact' as type FROM contact_submissions ORDER BY id DESC LIMIT 5")->fetchAll();
    $recentAppointments = $pdo->query("SELECT id, parent_name as name, email, preferred_date, status, created_at, 'appointment' as type FROM appointment_requests ORDER BY id DESC LIMIT 5")->fetchAll();

    $recentActivity = $pdo->query("SELECT action, details, admin_name, created_at FROM activity_logs ORDER BY id DESC LIMIT 8")->fetchAll();

    sendResponse([
        'success' => true,
        'stats' => $stats,
        'recent_contacts' => $recentContacts,
        'recent_appointments' => $recentAppointments,
        'recent_activity' => $recentActivity
    ]);
} catch (Exception $e) {
    sendError('Dashboard retrieval error: ' . $e->getMessage(), 500);
}
