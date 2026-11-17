<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$slug = sanitizeInput($_GET['slug'] ?? '');
$category = sanitizeInput($_GET['category'] ?? '');
$page = max(1, intval($_GET['page'] ?? 1));
$limit = max(1, intval($_GET['limit'] ?? 6));
$offset = ($page - 1) * $limit;

$mockBlogs = [
    [
        'id' => 1,
        'slug' => 'nurturing-faith-and-reason-at-spectrum',
        'title' => 'Nurturing Faith & Reason: The Integrated Curriculum at SIS',
        'category_name' => 'Islamic & Moral Values',
        'category_slug' => 'islamic-values',
        'author' => 'Academic Council',
        'excerpt' => 'How Spectrum International School harmonizes Cambridge academic rigor with comprehensive Islamic studies and Tahfeezul Quran.',
        'content' => 'At Spectrum International School, we believe true education enriches both the intellect and the soul. Our dual-curriculum framework combines Pearson Edexcel and Cambridge standards with rigorous Islamic values, Quranic recitation, and character-building (Tarbiyah). Students do not have to choose between worldly academic excellence and their spiritual heritage.',
        'cover_image' => '/assets/IMG_9469.JPG.jpeg',
        'is_published' => 1,
        'published_at' => '2026-10-15'
    ],
    [
        'id' => 2,
        'slug' => 'why-early-stem-in-primary-years',
        'title' => 'Why Experiential STEM in Primary Years Sets Lifelong Thinkers',
        'category_name' => 'Academic Excellence',
        'category_slug' => 'academic-excellence',
        'author' => 'Head of Science Dept',
        'excerpt' => 'Engaging young minds in hands-on laboratories and inquiry-driven science sets the foundation for analytical leadership.',
        'content' => 'In our state-of-the-art science laboratories and ICT suites, young learners explore hypotheses, conduct safe chemistry and physics demonstrations, and build robotics models. Research proves that tactile inquiry during formative school years cements neural pathways for lifelong problem-solving.',
        'cover_image' => '/assets/IMG_9437.JPG.jpeg',
        'is_published' => 1,
        'published_at' => '2026-11-01'
    ],
    [
        'id' => 3,
        'slug' => 'building-champions-through-athletics',
        'title' => 'Building Resilience and Sportsmanship on the Field',
        'category_name' => 'Campus Life & Activities',
        'category_slug' => 'campus-life',
        'author' => 'Physical Education Lead',
        'excerpt' => 'Physical education at SIS is more than fitness—it teaches strategic thinking, teamwork, perseverance, and ethical leadership.',
        'content' => 'Through organized sports leagues, athletics meets, martial arts, and badminton tournaments, our students cultivate stamina and a deep sense of fair play. Our students understand that falling and rising again on the sports field mirrors the perseverance required in adult life.',
        'cover_image' => '/assets/IMG_0413.JPG.jpeg',
        'is_published' => 1,
        'published_at' => '2026-11-10'
    ]
];

if (!$pdo) {
    if (!empty($slug)) {
        foreach ($mockBlogs as $b) {
            if ($b['slug'] === $slug) sendResponse(['success' => true, 'data' => $b]);
        }
        sendError('Blog post not found', 404);
    }
    sendResponse([
        'success' => true,
        'data' => $mockBlogs,
        'pagination' => [
            'page' => 1,
            'limit' => $limit,
            'total' => count($mockBlogs),
            'totalPages' => 1
        ]
    ]);
}

try {
    if (!empty($slug)) {
        $stmt = $pdo->prepare("SELECT b.*, c.name as category_name, c.slug as category_slug 
                               FROM blogs b 
                               JOIN blog_categories c ON b.category_id = c.id 
                               WHERE b.slug = ? AND b.is_published = 1");
        $stmt->execute([$slug]);
        $blog = $stmt->fetch();
        if (!$blog) sendError('Blog not found', 404);
        sendResponse(['success' => true, 'data' => $blog]);
    } else {
        $countSql = "SELECT COUNT(*) FROM blogs b JOIN blog_categories c ON b.category_id = c.id WHERE b.is_published = 1";
        $params = [];
        if (!empty($category)) {
            $countSql .= " AND c.slug = ?";
            $params[] = $category;
        }
        $countStmt = $pdo->prepare($countSql);
        $countStmt->execute($params);
        $total = $countStmt->fetchColumn();

        $sql = "SELECT b.*, c.name as category_name, c.slug as category_slug 
                FROM blogs b 
                JOIN blog_categories c ON b.category_id = c.id 
                WHERE b.is_published = 1";
        if (!empty($category)) {
            $sql .= " AND c.slug = ?";
        }
        $sql .= " ORDER BY b.published_at DESC LIMIT ? OFFSET ?";
        $params[] = $limit;
        $params[] = $offset;

        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $blogs = $stmt->fetchAll();

        sendResponse([
            'success' => true,
            'data' => $blogs,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => (int)$total,
                'totalPages' => ceil($total / $limit)
            ]
        ]);
    }
} catch (Exception $e) {
    sendError('Failed to fetch blogs: ' . $e->getMessage(), 500);
}
