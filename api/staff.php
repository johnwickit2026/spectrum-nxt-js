<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$teamType = sanitizeInput($_GET['type'] ?? '');
$committee = sanitizeInput($_GET['committee'] ?? '');

$fallbackStaff = [
    [
        'id' => 1,
        'name' => 'Nur Ahammed Khokan',
        'designation' => 'Founder & CEO',
        'department' => 'Executive Leadership',
        'team_type' => 'academic',
        'bio' => 'Founder & CEO driving academic vision, institutional excellence, and holistic Cambridge-Islamic education at Spectrum International School.',
        'photo_url' => '/assets/IMG_9993.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'spectrumintlschool@gmail.com'
    ],
    [
        'id' => 2,
        'name' => 'Sharmin Akter Eva',
        'designation' => 'Vice Principal & Academic Head',
        'department' => 'Academic Leadership',
        'team_type' => 'academic',
        'bio' => 'Vice Principal & Academic Head overseeing curriculum implementation, pedagogical standards, and student mentoring.',
        'photo_url' => '/assets/IMG_2461.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'academics@spectrumintlschool.com'
    ],
    [
        'id' => 3,
        'name' => 'Shaykh Mahmudul Hasan',
        'designation' => 'Scholar & Head of Arabic',
        'department' => 'Islamic Studies & Arabic',
        'team_type' => 'academic',
        'bio' => 'Scholar directing Arabic language studies, Quranic understanding, and moral character education.',
        'photo_url' => '/assets/IMG_9469.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'islamicstudies@spectrumintlschool.com'
    ],
    [
        'id' => 4,
        'name' => 'Shah Alamgir',
        'designation' => 'Director of Finance',
        'department' => 'Finance & Accounts',
        'team_type' => 'non-academic',
        'bio' => 'Directing institutional financial planning, fiscal management, and resource allocation.',
        'photo_url' => '/assets/IMG_9917.JPG.jpeg',
        'phone' => '+880 1730-369686',
        'email' => 'accounts@spectrumintlschool.com'
    ],
    [
        'id' => 5,
        'name' => 'Tanbir Md. Ali Foysal',
        'designation' => 'Head of Admin',
        'department' => 'Administration',
        'team_type' => 'non-academic',
        'bio' => 'Leading campus administration, operations, facilities, and student services.',
        'photo_url' => '/assets/IMG_9917.JPG.jpeg',
        'phone' => '+880 1730-369686',
        'email' => 'admin@spectrumintlschool.com'
    ],
    [
        'id' => 6,
        'name' => 'Mohammed Kaizer Siddiquee',
        'designation' => 'Security In charge',
        'department' => 'Campus Safety & Logistics',
        'team_type' => 'support',
        'bio' => 'In charge of campus safety, security checkpoints, and student transportation protocols.',
        'photo_url' => '/assets/IMG_9917.JPG.jpeg',
        'phone' => '+880 1730-369686',
        'email' => 'security@spectrumintlschool.com'
    ]
];

$fallbackCommittees = [
    [
        'id' => 1,
        'name' => 'Nur Ahammed Khokan',
        'designation' => 'Founder & CEO',
        'committee_type' => 'management',
        'photo_url' => '/assets/IMG_9993.JPG.jpeg',
        'bio' => 'Founder & CEO driving strategic institutional direction, capital infrastructure planning, and board governance.'
    ],
    [
        'id' => 2,
        'name' => 'Sharmin Akter Eva',
        'designation' => 'Vice Principal & Academic Head',
        'committee_type' => 'advisor',
        'photo_url' => '/assets/IMG_2461.JPG.jpeg',
        'bio' => 'Academic head leading curriculum governance, teacher training, and cognitive development benchmarks.'
    ],
    [
        'id' => 3,
        'name' => 'Mufti Shamsuddin Zia',
        'designation' => 'Chairman, Shariah Supervisory Committee',
        'committee_type' => 'sharia',
        'photo_url' => '/assets/IMG_9469.JPG.jpeg',
        'bio' => 'Chairman ensuring that all moral curricula, financial practices, and campus conduct uphold authentic Shariah values.'
    ]
];

if (!$pdo) {
    if (!empty($committee)) {
        $filtered = array_filter($fallbackCommittees, fn($c) => $c['committee_type'] === $committee);
        sendResponse(['success' => true, 'data' => array_values($filtered), 'source' => 'fallback']);
    }
    if (!empty($teamType)) {
        $filtered = array_filter($fallbackStaff, fn($s) => $s['team_type'] === $teamType);
        sendResponse(['success' => true, 'data' => array_values($filtered), 'source' => 'fallback']);
    }
    sendResponse(['success' => true, 'staff' => $fallbackStaff, 'committees' => $fallbackCommittees, 'source' => 'fallback']);
}

try {
    if (!empty($committee)) {
        $stmt = $pdo->prepare("SELECT * FROM committees WHERE committee_type = ? ORDER BY sort_order ASC");
        $stmt->execute([$committee]);
        sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
    }

    $sql = "SELECT * FROM staff WHERE 1=1";
    $params = [];
    if (!empty($teamType)) {
        $sql .= " AND team_type = ?";
        $params[] = $teamType;
    }
    $sql .= " ORDER BY sort_order ASC, id ASC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
} catch (Exception $e) {
    sendError('Failed to fetch staff: ' . $e->getMessage(), 500);
}
