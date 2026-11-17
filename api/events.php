<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if (!$pdo) {
    $mockEvents = [
        [
            'id' => 1,
            'title' => 'Annual Book Festival & Reading Culture Week',
            'event_date' => '2026-12-05',
            'event_time' => '09:00 AM - 03:00 PM',
            'location' => 'SIS Main Auditorium, Khadem Tower',
            'excerpt' => 'A vibrant week dedicated to cultivating literary curiosity, author sessions, and book exhibitions.',
            'content' => 'Students from all grades showcase their favorite literary works, participate in storytelling competitions, and engage with renowned educational authors. Parents are warmly invited to visit our book stalls and student book reviews.',
            'image_url' => '/assets/IMG_9817.JPG.jpeg',
            'is_featured' => 1
        ],
        [
            'id' => 2,
            'title' => 'Parent-Teacher Orientation Program 2026',
            'event_date' => '2026-11-28',
            'event_time' => '10:00 AM - 01:00 PM',
            'location' => 'Auditorium & Conference Hall',
            'excerpt' => 'Interactive dialogue between faculty and parents to align on student growth and pastoral care.',
            'content' => 'Our leadership team, along with class teachers and counselors, will present the curriculum milestones, grading policies, and co-curricular opportunities for the academic year.',
            'image_url' => '/assets/IMG_9861.JPG.jpeg',
            'is_featured' => 1
        ],
        [
            'id' => 3,
            'title' => 'Girls Hifz Department Quran Recitation Celebration',
            'event_date' => '2026-12-15',
            'event_time' => '09:30 AM - 12:30 PM',
            'location' => 'SIS Campus Hall',
            'excerpt' => 'Honoring our young Huffaz for exemplary dedication to the preservation and melodious recitation of the Holy Quran.',
            'content' => 'A solemn and inspirational morning where students celebrate milestone achievements in Quran memorization under the guidance of certified Qaris and Islamic scholars.',
            'image_url' => '/assets/IMG_9469.JPG.jpeg',
            'is_featured' => 1
        ]
    ];
    if ($id) {
        foreach ($mockEvents as $ev) {
            if ($ev['id'] === $id) sendResponse(['success' => true, 'data' => $ev]);
        }
        sendError('Event not found', 404);
    }
    sendResponse(['success' => true, 'data' => $mockEvents]);
}

try {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM events WHERE id = ?");
        $stmt->execute([$id]);
        $event = $stmt->fetch();
        if (!$event) sendError('Event not found', 404);
        sendResponse(['success' => true, 'data' => $event]);
    } else {
        $stmt = $pdo->query("SELECT * FROM events ORDER BY event_date ASC");
        $events = $stmt->fetchAll();
        sendResponse(['success' => true, 'data' => $events]);
    }
} catch (Exception $e) {
    sendError('Failed to fetch events: ' . $e->getMessage(), 500);
}
