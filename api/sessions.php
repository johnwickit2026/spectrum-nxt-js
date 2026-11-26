<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

date_default_timezone_set('Asia/Dhaka');
$currentDate = date('Y-m-d');
$currentYear = (int)date('Y');
$currentMonth = (int)date('n');

$pdo = Database::getConnection();

// Default fallback sessions
$fallbackSessions = [
    [
        'id' => 1,
        'name' => 'Academic Session ' . ($currentMonth >= 6 ? $currentYear . '-' . ($currentYear + 1) : ($currentYear - 1) . '-' . $currentYear) . ' (June Cycle)',
        'session_type' => 'june',
        'start_date' => ($currentMonth >= 6 ? $currentYear : $currentYear - 1) . '-06-01',
        'end_date' => ($currentMonth >= 6 ? $currentYear + 1 : $currentYear) . '-06-30',
        'status' => 'active',
        'is_current' => 1,
        'description' => 'Regular school academic cycle spanning Play Group to Class XII & Cambridge O/A Levels.'
    ],
    [
        'id' => 2,
        'name' => 'Academic Session ' . $currentYear . ' (January Cycle)',
        'session_type' => 'january',
        'start_date' => $currentYear . '-01-01',
        'end_date' => $currentYear . '-12-31',
        'status' => 'active',
        'is_current' => 1,
        'description' => 'Accelerated January academic session and specialized Cambridge winter intake.'
    ],
    [
        'id' => 3,
        'name' => 'Academic Session ' . ($currentYear + 1) . ' (January Cycle)',
        'session_type' => 'january',
        'start_date' => ($currentYear + 1) . '-01-01',
        'end_date' => ($currentYear + 1) . '-12-31',
        'status' => 'upcoming',
        'is_current' => 0,
        'description' => 'Upcoming winter session intake for A-Levels and Hifzul Quran students.'
    ]
];

if (!$pdo) {
    sendResponse([
        'success' => true,
        'data' => $fallbackSessions,
        'current_date' => $currentDate,
        'timezone' => 'Asia/Dhaka'
    ]);
}

try {
    $type = sanitizeInput($_GET['type'] ?? '');
    $query = "SELECT * FROM academic_sessions";
    $params = [];

    if (!empty($type)) {
        $query .= " WHERE session_type = ?";
        $params[] = $type;
    }

    $query .= " ORDER BY start_date DESC";
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $sessions = $stmt->fetchAll();

    if (empty($sessions)) {
        $sessions = $fallbackSessions;
    } else {
        // Automatically check active status based on current date
        foreach ($sessions as &$sess) {
            $start = $sess['start_date'];
            $end = $sess['end_date'];
            if ($currentDate >= $start && $currentDate <= $end && $sess['status'] !== 'archived') {
                $sess['is_current'] = 1;
                $sess['status'] = 'active';
            }
        }
    }

    sendResponse([
        'success' => true,
        'data' => $sessions,
        'current_date' => $currentDate,
        'timezone' => 'Asia/Dhaka'
    ]);
} catch (Exception $e) {
    sendResponse([
        'success' => true,
        'data' => $fallbackSessions,
        'current_date' => $currentDate,
        'error' => $e->getMessage()
    ]);
}
