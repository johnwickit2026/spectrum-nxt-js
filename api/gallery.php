<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$category = sanitizeInput($_GET['category'] ?? '');
$albumId = isset($_GET['album_id']) ? intval($_GET['album_id']) : null;

$fallbackGalleries = [
    ['id' => 1, 'title' => 'Modern Science Laboratory Investigation', 'category' => 'Academics', 'image_url' => '/assets/IMG_9437.JPG.jpeg', 'album_id' => 3],
    ['id' => 2, 'title' => 'Annual Athletics Day & March Past', 'category' => 'Sports', 'image_url' => '/assets/IMG_0413.JPG.jpeg', 'album_id' => 2],
    ['id' => 3, 'title' => 'Interactive Primary Classroom Engagement', 'category' => 'Academics', 'image_url' => '/assets/1.1.1.JPG.jpeg', 'album_id' => 1],
    ['id' => 4, 'title' => 'School Morning Assembly & Flag Ceremony', 'category' => 'Campus', 'image_url' => '/assets/2.JPG.jpeg', 'album_id' => 1],
    ['id' => 5, 'title' => 'Play & Learn Early Years Discovery Zone', 'category' => 'Activities', 'image_url' => '/assets/2.2.JPG.jpeg', 'album_id' => 1],
    ['id' => 6, 'title' => 'Book Festival Literary Exhibition', 'category' => 'Events', 'image_url' => '/assets/IMG_9817.JPG.jpeg', 'album_id' => 1],
    ['id' => 7, 'title' => 'Hifzul Quran Department Recitation', 'category' => 'Islamic Studies', 'image_url' => '/assets/IMG_9469.JPG.jpeg', 'album_id' => 1],
    ['id' => 8, 'title' => 'New Academic Year Parent Orientation', 'category' => 'Events', 'image_url' => '/assets/IMG_9861.JPG.jpeg', 'album_id' => 1],
    ['id' => 9, 'title' => 'Merit Recognition & Graduation Ceremony', 'category' => 'Recognition', 'image_url' => '/assets/IMG_9965.JPG.jpeg', 'album_id' => 1],
    ['id' => 10, 'title' => 'Creative Fine Arts Workshop', 'category' => 'Activities', 'image_url' => '/assets/IMG_9828.JPG.jpeg', 'album_id' => 1],
    ['id' => 11, 'title' => 'Heritage & Nature Study Tour', 'category' => 'Field Trips', 'image_url' => '/assets/IMG_9912.JPG.jpeg', 'album_id' => 1],
    ['id' => 12, 'title' => 'Computer Technology & Coding Laboratory', 'category' => 'Facilities', 'image_url' => '/assets/IMG_2236.JPG.jpeg', 'album_id' => 3],
];

$fallbackAlbums = [
    ['id' => 1, 'title' => 'Life at Spectrum Campus', 'slug' => 'life-at-spectrum', 'cover_image' => '/assets/2.JPG.jpeg', 'count' => 8],
    ['id' => 2, 'title' => 'Sports & Athletics Meet', 'slug' => 'sports-athletics', 'cover_image' => '/assets/IMG_0413.JPG.jpeg', 'count' => 1],
    ['id' => 3, 'title' => 'Academic & Science Explorations', 'slug' => 'academic-science', 'cover_image' => '/assets/IMG_9437.JPG.jpeg', 'count' => 2],
];

if (!$pdo) {
    sendResponse([
        'success' => true,
        'albums' => $fallbackAlbums,
        'galleries' => $fallbackGalleries,
        'source' => 'fallback'
    ]);
}

try {
    $albumStmt = $pdo->query("SELECT a.*, COUNT(g.id) as image_count FROM gallery_albums a LEFT JOIN galleries g ON a.id = g.album_id GROUP BY a.id");
    $albums = $albumStmt->fetchAll();

    $sql = "SELECT * FROM galleries WHERE 1=1";
    $params = [];
    if (!empty($category)) {
        $sql .= " AND category = ?";
        $params[] = $category;
    }
    if ($albumId) {
        $sql .= " AND album_id = ?";
        $params[] = $albumId;
    }
    $sql .= " ORDER BY id DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $galleries = $stmt->fetchAll();

    sendResponse([
        'success' => true,
        'albums' => $albums,
        'galleries' => $galleries
    ]);
} catch (Exception $e) {
    sendError('Failed to fetch galleries: ' . $e->getMessage(), 500);
}
