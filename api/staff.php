<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$teamType = sanitizeInput($_GET['type'] ?? '');
$committee = sanitizeInput($_GET['committee'] ?? '');

$fallbackStaff = [
    [
        'id' => 1,
        'name' => 'Dr. M. A. Rahman',
        'designation' => 'Principal & Academic Director',
        'department' => 'Academic Leadership',
        'team_type' => 'academic',
        'bio' => 'Eminent academician with over 25 years of leadership in international British curriculum and holistic education.',
        'photo_url' => '/assets/IMG_9993.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'principal@spectrumintlschool.com'
    ],
    [
        'id' => 2,
        'name' => 'Syeda Fatima Zahra',
        'designation' => 'Vice Principal & Head of Senior Section',
        'department' => 'Senior School',
        'team_type' => 'academic',
        'bio' => 'Passionate educator committed to Pearson Edexcel & Cambridge O/A Level academic excellence and student mentoring.',
        'photo_url' => '/assets/IMG_2461.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'vp@spectrumintlschool.com'
    ],
    [
        'id' => 3,
        'name' => 'Sheikh Muhammad Abdullah',
        'designation' => 'Director of Islamic Studies & Tahfeez',
        'department' => 'Islamic Studies',
        'team_type' => 'academic',
        'bio' => 'Certified Qari and scholar overseeing Quranic memorization, Tajweed, and Tarbiyah programs.',
        'photo_url' => '/assets/IMG_9469.JPG.jpeg',
        'phone' => '+880 1799-369685',
        'email' => 'islamicstudies@spectrumintlschool.com'
    ],
    [
        'id' => 4,
        'name' => 'Tariq Hasan',
        'designation' => 'Chief Finance & Accounts Officer',
        'department' => 'Administration & Finance',
        'team_type' => 'non-academic',
        'bio' => 'Oversees fiscal operations, parent accounts, fee management, and institutional resource planning.',
        'photo_url' => '/assets/IMG_9917.JPG.jpeg',
        'phone' => '+880 1730-369686',
        'email' => 'accounts@spectrumintlschool.com'
    ],
    [
        'id' => 5,
        'name' => 'Kamal Hossain',
        'designation' => 'Campus Facilities & Logistics Manager',
        'department' => 'Operations',
        'team_type' => 'support',
        'bio' => 'Dedicated supervisor maintaining campus hygiene, 24/7 security, lab safety, and transport logistics.',
        'photo_url' => '/assets/IMG_9917.JPG.jpeg',
        'phone' => '+880 1730-369686',
        'email' => 'operations@spectrumintlschool.com'
    ]
];

$fallbackCommittees = [
    [
        'id' => 1,
        'name' => 'Engr. A. K. M. Shamsuddin',
        'designation' => 'Chairman, Governing Board',
        'committee_type' => 'management',
        'photo_url' => '/assets/IMG_9993.JPG.jpeg',
        'bio' => 'Distinguished industry leader providing strategic governance, ethical oversight, and infrastructural guidance for SIS.'
    ],
    [
        'id' => 2,
        'name' => 'Dr. Tahmina Begum',
        'designation' => 'Senior Education Advisor',
        'committee_type' => 'advisor',
        'photo_url' => '/assets/IMG_2461.JPG.jpeg',
        'bio' => 'Former professor and curriculum consultant advising on international pedagogical benchmarks and teacher training.'
    ],
    [
        'id' => 3,
        'name' => 'Mufti Dr. Abu Bakar Siddique',
        'designation' => 'Head of Sharia Advisory Board',
        'committee_type' => 'sharia',
        'photo_url' => '/assets/IMG_9469.JPG.jpeg',
        'bio' => 'Prominent Islamic jurist ensuring that all moral curricula, financial practices, and campus conduct uphold Islamic values.'
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
