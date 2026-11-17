<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$category = sanitizeInput($_GET['category'] ?? '');
$search = sanitizeInput($_GET['q'] ?? '');
$limit = intval($_GET['limit'] ?? 50);

if (!$pdo) {
    // Return sample seeded notices
    $mockNotices = [
        [
            'id' => 1,
            'title' => 'Admissions Open for Academic Session 2026-2027 (Play Group to Class VIII & A Levels)',
            'category_name' => 'Admissions',
            'category_slug' => 'admissions',
            'file_url' => '/assets/prospectus.pdf',
            'content' => 'Applications are officially open for Play Group, Nursery, KG, Classes I-VIII, and Cambridge A-Levels for the upcoming academic session. Parents may apply online or collect admission forms from the school admission office at Khadem Tower, Shantinagar.',
            'publish_date' => '2026-11-01',
            'is_active' => 1
        ],
        [
            'id' => 2,
            'title' => 'Term Examination Schedule & Syllabus Guidelines',
            'category_name' => 'Examinations',
            'category_slug' => 'examinations',
            'file_url' => null,
            'content' => 'The upcoming Mid-Term Examination schedule has been published for all grades. Students are advised to collect their exam admit cards and review the subject-wise syllabus guidelines posted on the student noticeboard.',
            'publish_date' => '2026-11-05',
            'is_active' => 1
        ],
        [
            'id' => 3,
            'title' => 'Special Tahfeezul Quran (Hifz) Department Admissions',
            'category_name' => 'Admissions',
            'category_slug' => 'admissions',
            'file_url' => null,
            'content' => 'Spectrum International School announces new enrollment slots for our dedicated Girls and Boys Hifzul Quran Departments, integrated smoothly with regular English-medium classes.',
            'publish_date' => '2026-11-08',
            'is_active' => 1
        ],
        [
            'id' => 4,
            'title' => 'Important Advisory: Online Fee Payment Hours & Helplines',
            'category_name' => 'Academic Routine',
            'category_slug' => 'academic-routine',
            'file_url' => null,
            'content' => 'Parents paying tuition and admission fees online are reminded that the secure payment window operates between 7:00 AM and 5:00 PM daily. For any assistance, please dial +880 1799-369685 or +880 1730-369686.',
            'publish_date' => '2026-11-12',
            'is_active' => 1
        ]
    ];
    sendResponse(['success' => true, 'data' => $mockNotices, 'source' => 'fallback']);
}

try {
    $sql = "SELECT n.*, c.name as category_name, c.slug as category_slug 
            FROM notices n 
            JOIN notice_categories c ON n.category_id = c.id 
            WHERE n.is_active = 1";
    $params = [];

    if (!empty($category)) {
        $sql .= " AND c.slug = ?";
        $params[] = $category;
    }
    if (!empty($search)) {
        $sql .= " AND (n.title LIKE ? OR n.content LIKE ?)";
        $params[] = "%$search%";
        $params[] = "%$search%";
    }
    $sql .= " ORDER BY n.publish_date DESC LIMIT " . $limit;

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $notices = $stmt->fetchAll();

    sendResponse(['success' => true, 'data' => $notices]);
} catch (Exception $e) {
    sendError('Failed to fetch notices: ' . $e->getMessage(), 500);
}
