<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$id = isset($_GET['id']) ? intval($_GET['id']) : null;
$category = sanitizeInput($_GET['category'] ?? '');

$mockEvents = [
    [
        'id' => 1,
        'title' => 'Annual Spelling Bee Championship 2026',
        'category' => 'Spelling Bee',
        'event_date' => '2026-11-20',
        'event_time' => '09:30 AM - 01:30 PM',
        'location' => 'SIS Main Auditorium, Khadem Tower, Shantinagar',
        'gallery_album_id' => 1,
        'excerpt' => 'Annual English spelling bee test of vocabulary, linguistic precision, and phonics mastery across Junior and Senior divisions.',
        'content' => 'Students compete across multiple rigorous rounds demonstrating vocabulary retention, phonetic root understanding, and rapid spelling skills before our panel of British Council certified judges.',
        'image_url' => '/assets/IMG_9817.JPG.jpeg',
        'images' => ['/assets/IMG_9817.JPG.jpeg', '/assets/IMG_9861.JPG.jpeg'],
        'is_featured' => 1
    ],
    [
        'id' => 2,
        'title' => 'Inter-Campus Arabic Spelling Bee & Tajweed',
        'category' => 'Arabic Spelling Bee',
        'event_date' => '2026-12-08',
        'event_time' => '10:00 AM - 01:00 PM',
        'location' => 'SIS Campus Hall, Shantinagar',
        'gallery_album_id' => 1,
        'excerpt' => 'Prestige linguistic competition celebrating classical Arabic orthography, phonetics, and melodious Quranic pronunciation.',
        'content' => 'Under the patronage of the Islamic Studies faculty, students demonstrate classical Arabic morphology, correct letter-articulation (Makharij), and vocabulary synthesis.',
        'image_url' => '/assets/IMG_9469.JPG.jpeg',
        'images' => ['/assets/IMG_9469.JPG.jpeg'],
        'is_featured' => 1
    ],
    [
        'id' => 3,
        'title' => 'SIS Annual Science Fair & Robotics Expo',
        'category' => 'Science Fair',
        'event_date' => '2026-12-18',
        'event_time' => '09:00 AM - 04:00 PM',
        'location' => 'SIS STEM Courtyard & Laboratories',
        'gallery_album_id' => 3,
        'excerpt' => 'Showcase of ingenious science experiments, environmental conservation models, and automated robotics prototypes built by students.',
        'content' => 'Over 60 original student projects demonstrated scientific inquiry across Renewable Energy, Biomedical innovations, AI and smart robotics. Parents and guests interact directly with student innovators.',
        'image_url' => '/assets/IMG_9437.JPG.jpeg',
        'images' => ['/assets/IMG_9437.JPG.jpeg', '/assets/IMG_2236.JPG.jpeg'],
        'is_featured' => 1
    ],
    [
        'id' => 4,
        'title' => 'Traditional Pitha Utshob & Heritage Celebration',
        'category' => 'Pitha Utshob',
        'event_date' => '2027-01-14',
        'event_time' => '10:00 AM - 03:30 PM',
        'location' => 'Shantinagar Campus Grounds',
        'gallery_album_id' => 1,
        'excerpt' => 'Festive celebration of Bengali winter culinary traditions, artisanal pitha making, and vibrant community bonding.',
        'content' => 'Bringing families, educators, and children together in colorful festive stalls featuring over 30 authentic pitha varieties, cultural presentations, and appreciation of national heritage.',
        'image_url' => '/assets/IMG_9828.JPG.jpeg',
        'images' => ['/assets/IMG_9828.JPG.jpeg', '/assets/2.JPG.jpeg'],
        'is_featured' => 1
    ],
    [
        'id' => 5,
        'title' => 'Annual Track & Field Sports Championship',
        'category' => 'Sports',
        'event_date' => '2027-01-25',
        'event_time' => '08:30 AM - 04:30 PM',
        'location' => 'National Stadium Grounds, Dhaka',
        'gallery_album_id' => 2,
        'excerpt' => 'The premier athletic celebration featuring inter-house sprint relays, high jump, karate exhibitions, and drill formations.',
        'content' => 'Celebrating stamina, sportsmanship, and teamwork. Students from all grades participated in track and field contests, culminating in the trophy presentation by the Chairman.',
        'image_url' => '/assets/IMG_0413.JPG.jpeg',
        'images' => ['/assets/IMG_0413.JPG.jpeg', '/assets/1.JPG.jpeg'],
        'is_featured' => 1
    ],
    [
        'id' => 6,
        'title' => 'Annual Book Festival & Reading Culture Week',
        'category' => 'General',
        'event_date' => '2026-12-05',
        'event_time' => '09:00 AM - 03:00 PM',
        'location' => 'SIS Main Auditorium, Khadem Tower, Shantinagar',
        'gallery_album_id' => 1,
        'excerpt' => 'A vibrant week dedicated to cultivating literary curiosity, author sessions, and book exhibitions.',
        'content' => 'Students from all grades showcase their favorite literary works, participate in storytelling competitions, and engage with renowned educational authors.',
        'image_url' => '/assets/IMG_9817.JPG.jpeg',
        'images' => ['/assets/IMG_9817.JPG.jpeg'],
        'is_featured' => 0
    ],
    [
        'id' => 7,
        'title' => 'Parent-Teacher Orientation Program 2026',
        'category' => 'General',
        'event_date' => '2026-11-28',
        'event_time' => '10:00 AM - 01:00 PM',
        'location' => 'Auditorium & Conference Hall',
        'gallery_album_id' => 1,
        'excerpt' => 'Interactive dialogue between faculty and parents to align on student growth and pastoral care.',
        'content' => 'Our leadership team, along with class teachers and counselors, will present the curriculum milestones, grading policies, and co-curricular opportunities for the academic year.',
        'image_url' => '/assets/IMG_9861.JPG.jpeg',
        'images' => ['/assets/IMG_9861.JPG.jpeg'],
        'is_featured' => 0
    ],
    [
        'id' => 8,
        'title' => 'Girls Hifz Department Quran Recitation Celebration',
        'category' => 'Hifz',
        'event_date' => '2026-12-15',
        'event_time' => '09:30 AM - 12:30 PM',
        'location' => 'SIS Campus Hall',
        'gallery_album_id' => 1,
        'excerpt' => 'Honoring our young Hifz students for exemplary dedication to the preservation and melodious recitation of the Holy Quran.',
        'content' => 'A solemn and inspirational morning where students celebrate milestone achievements in Quran memorization under the guidance of certified Qaris and Islamic scholars.',
        'image_url' => '/assets/IMG_9469.JPG.jpeg',
        'images' => ['/assets/IMG_9469.JPG.jpeg'],
        'is_featured' => 0
    ]
];

if (!$pdo) {
    if ($id) {
        foreach ($mockEvents as $ev) {
            if ($ev['id'] === $id) sendResponse(['success' => true, 'data' => $ev]);
        }
        sendError('Event not found', 404);
    }
    $filtered = $mockEvents;
    if (!empty($category)) {
        $filtered = array_values(array_filter($filtered, fn($e) => strcasecmp($e['category'], $category) === 0));
    }
    sendResponse(['success' => true, 'data' => $filtered]);
}

try {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM events WHERE id = ?");
        $stmt->execute([$id]);
        $event = $stmt->fetch();
        if (!$event) sendError('Event not found', 404);
        if (!empty($event['images']) && is_string($event['images'])) {
            $event['images'] = json_decode($event['images'], true);
        }
        sendResponse(['success' => true, 'data' => $event]);
    } else {
        $query = "SELECT * FROM events WHERE is_published = 1";
        $params = [];
        if (!empty($category)) {
            $query .= " AND category = ?";
            $params[] = $category;
        }
        $query .= " ORDER BY event_date ASC";
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $events = $stmt->fetchAll();

        if (empty($events)) {
            $events = $mockEvents;
        } else {
            foreach ($events as &$ev) {
                if (!empty($ev['images']) && is_string($ev['images'])) {
                    $ev['images'] = json_decode($ev['images'], true);
                }
            }
        }
        sendResponse(['success' => true, 'data' => $events]);
    }
} catch (Exception $e) {
    sendResponse(['success' => true, 'data' => $mockEvents, 'error' => $e->getMessage()]);
}
