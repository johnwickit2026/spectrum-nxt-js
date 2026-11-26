<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$category = sanitizeInput($_GET['category'] ?? '');
$slug = sanitizeInput($_GET['slug'] ?? '');

$fallbackFacilities = [
    // Lab Facilities
    [
        'id' => 1,
        'category' => 'lab',
        'subcategory' => 'Science Lab',
        'title' => 'Multidisciplinary Science Laboratories',
        'slug' => 'science-lab',
        'description' => 'Specialized, ventilated laboratories for Physics, Chemistry, and Biology equipped with advanced optical microscopes, digital measurement apparatus, fume hoods, reagent stocks, and international safety compliance.',
        'cover_image' => '/assets/IMG_9437.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9437.JPG.jpeg', '/assets/1.1.1.JPG.jpeg', '/assets/IMG_9828.JPG.jpeg'],
        'sort_order' => 1,
        'is_published' => 1
    ],
    [
        'id' => 2,
        'category' => 'lab',
        'subcategory' => 'Computer Lab',
        'title' => 'Modern ICT & Coding Laboratories',
        'slug' => 'computer-lab',
        'description' => 'High-speed networked computer workstations, interactive smart displays, gigabit fiber broadband, educational programming suites (Python, Scratch), and robotics prototyping kits.',
        'cover_image' => '/assets/IMG_2236.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_2236.JPG.jpeg', '/assets/2.JPG.jpeg'],
        'sort_order' => 2,
        'is_published' => 1
    ],
    // Club Facilities
    [
        'id' => 3,
        'category' => 'club',
        'subcategory' => 'Language Club',
        'title' => 'Language Club (English & Arabic)',
        'slug' => 'language-club',
        'description' => 'Fosters eloquence in English and classical Quranic Arabic through weekly debate tournaments, spelling bee preparation, public speaking workshops, recitation, and creative essay writing.',
        'cover_image' => '/assets/IMG_9817.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9817.JPG.jpeg', '/assets/IMG_9861.JPG.jpeg'],
        'sort_order' => 3,
        'is_published' => 1
    ],
    [
        'id' => 4,
        'category' => 'club',
        'subcategory' => 'Sports Club',
        'title' => 'Sports Club & Physical Fitness',
        'slug' => 'sports-club',
        'description' => 'Comprehensive athletic programs including martial arts (Karate), football, badminton, table tennis, gymnastics, and annual sports meets.',
        'cover_image' => '/assets/IMG_0413.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_0413.JPG.jpeg', '/assets/1.JPG.jpeg'],
        'sort_order' => 4,
        'is_published' => 1
    ],
    [
        'id' => 5,
        'category' => 'club',
        'subcategory' => 'Computer Club',
        'title' => 'ICT & Robotics Innovation Club',
        'slug' => 'computer-club',
        'description' => 'Empowers students with coding fundamentals, computational thinking, robotics design, digital media skills, and ethical cyber citizenship.',
        'cover_image' => '/assets/IMG_2236.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_2236.JPG.jpeg'],
        'sort_order' => 5,
        'is_published' => 1
    ],
    [
        'id' => 6,
        'category' => 'club',
        'subcategory' => 'Science Club',
        'title' => 'Science Exploration & STEM Club',
        'slug' => 'science-club',
        'description' => 'Engages students in experimental inquiry, environmental sustainability projects, science fairs, and inter-school science Olympiads.',
        'cover_image' => '/assets/IMG_9437.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9437.JPG.jpeg'],
        'sort_order' => 6,
        'is_published' => 1
    ],
    [
        'id' => 7,
        'category' => 'club',
        'subcategory' => 'Reading Club',
        'title' => 'Literary Reading & Book Circle',
        'slug' => 'reading-club',
        'description' => 'Dedicated to cultivating deep reading habits, book discussions, author study circles, and our annual Book Fair celebrations.',
        'cover_image' => '/assets/IMG_9817.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9817.JPG.jpeg'],
        'sort_order' => 7,
        'is_published' => 1
    ],
    [
        'id' => 8,
        'category' => 'club',
        'subcategory' => 'Cultural Club',
        'title' => 'Cultural & Islamic Heritage Club',
        'slug' => 'cultural-club',
        'description' => 'Inspiring creative expression through Islamic nasheeds, calligraphy art, stage presentation, and community outreach.',
        'cover_image' => '/assets/IMG_9828.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9828.JPG.jpeg'],
        'sort_order' => 8,
        'is_published' => 1
    ],
    // ECA
    [
        'id' => 9,
        'category' => 'eca',
        'subcategory' => 'Study Tour',
        'title' => 'Annual Educational Study Tours',
        'slug' => 'study-tour',
        'description' => 'Immersive experiential learning excursions to historical landmarks, research institutes, nature reserves, and industrial science centers designed to broaden worldview and foster camaraderie.',
        'cover_image' => '/assets/IMG_9912.JPG.jpeg',
        'gallery_images' => ['/assets/IMG_9912.JPG.jpeg', '/assets/2.JPG.jpeg', '/assets/IMG_9861.JPG.jpeg'],
        'sort_order' => 9,
        'is_published' => 1
    ],
    [
        'id' => 10,
        'category' => 'eca',
        'subcategory' => 'Field Trip',
        'title' => 'Hands-On Academic Field Trips',
        'slug' => 'field-trip',
        'description' => 'Targeted grade-level excursions complementing Cambridge classroom theory with practical observation at botanical gardens, museums, and planetariums.',
        'cover_image' => '/assets/1.JPG.jpeg',
        'gallery_images' => ['/assets/1.JPG.jpeg', '/assets/IMG_9912.JPG.jpeg'],
        'sort_order' => 10,
        'is_published' => 1
    ]
];

if (!$pdo) {
    $filtered = $fallbackFacilities;
    if (!empty($category)) {
        $filtered = array_values(array_filter($filtered, fn($item) => $item['category'] === $category));
    }
    if (!empty($slug)) {
        $filtered = array_values(array_filter($filtered, fn($item) => $item['slug'] === $slug));
        sendResponse(['success' => true, 'data' => $filtered[0] ?? null]);
    }
    sendResponse(['success' => true, 'data' => $filtered]);
}

try {
    $query = "SELECT * FROM facilities WHERE is_published = 1";
    $params = [];

    if (!empty($category)) {
        $query .= " AND category = ?";
        $params[] = $category;
    }
    if (!empty($slug)) {
        $query .= " AND slug = ?";
        $params[] = $slug;
    }

    $query .= " ORDER BY sort_order ASC, id ASC";
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $results = $stmt->fetchAll();

    if (empty($results)) {
        $filtered = $fallbackFacilities;
        if (!empty($category)) {
            $filtered = array_values(array_filter($filtered, fn($item) => $item['category'] === $category));
        }
        if (!empty($slug)) {
            $filtered = array_values(array_filter($filtered, fn($item) => $item['slug'] === $slug));
            sendResponse(['success' => true, 'data' => $filtered[0] ?? null]);
        }
        sendResponse(['success' => true, 'data' => $filtered]);
    }

    foreach ($results as &$r) {
        if (!empty($r['gallery_images']) && is_string($r['gallery_images'])) {
            $r['gallery_images'] = json_decode($r['gallery_images'], true);
        }
    }

    if (!empty($slug)) {
        sendResponse(['success' => true, 'data' => $results[0] ?? null]);
    }

    sendResponse(['success' => true, 'data' => $results]);
} catch (Exception $e) {
    sendResponse(['success' => true, 'data' => $fallbackFacilities, 'error' => $e->getMessage()]);
}
