<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();
$slug = sanitizeInput($_GET['slug'] ?? 'home');

$fallbackSections = [
    'home' => [
        [
            'section_key' => 'hero_banner',
            'title' => 'Nurturing Intellect, Faith, and Leadership',
            'subtitle' => 'Shaping Bright Minds, Building Better Future',
            'content' => 'A premier English-medium institution combining Pearson Edexcel and Cambridge curriculum rigor with Islamic moral values and Tahfeezul Quran.',
            'image_url' => '/assets/2.JPG.jpeg',
            'extra_json' => ['cta_text' => 'Apply for Admission', 'cta_url' => '/frontend/apply', 'secondary_cta_text' => 'Campus Facilities', 'secondary_cta_url' => '/frontend/campus-facilities'],
            'is_published' => 1
        ],
        [
            'section_key' => 'about_intro',
            'title' => 'Welcome to Spectrum International School',
            'subtitle' => 'Established in 2020 | Pearson & Cambridge Attached Center',
            'content' => 'We provide an inspiring educational environment where modern international academic excellence thrives hand-in-hand with authentic moral character (Tarbiyah).',
            'image_url' => '/assets/IMG_9993.JPG.jpeg',
            'extra_json' => ['badge' => 'Holistic Education'],
            'is_published' => 1
        ],
        [
            'section_key' => 'affiliation_section',
            'title' => 'Internationally Recognized & Certified',
            'subtitle' => 'Our Global Accreditations',
            'content' => 'Spectrum International School is an officially attached centre with British Council, Pearson Edexcel, and Cambridge curriculum benchmarks.',
            'image_url' => '/images/affiliation-logo.png',
            'extra_json' => ['pearson_center' => 'Attached Centre', 'cambridge_curriculum' => 'Certified Standard', 'british_council' => 'Partner School'],
            'is_published' => 1
        ]
    ]
];

if (!$pdo) {
    sendResponse(['success' => true, 'slug' => $slug, 'sections' => $fallbackSections[$slug] ?? []]);
}

try {
    $stmt = $pdo->prepare("
        SELECT ps.*, p.slug as page_slug, p.title as page_title 
        FROM page_sections ps
        JOIN pages p ON ps.page_id = p.id
        WHERE p.slug = ? AND ps.is_published = 1
        ORDER BY ps.sort_order ASC, ps.id ASC
    ");
    $stmt->execute([$slug]);
    $sections = $stmt->fetchAll();

    if (empty($sections) && isset($fallbackSections[$slug])) {
        $sections = $fallbackSections[$slug];
    } else {
        foreach ($sections as &$sec) {
            if (!empty($sec['extra_json']) && is_string($sec['extra_json'])) {
                $sec['extra_json'] = json_decode($sec['extra_json'], true);
            }
        }
    }

    sendResponse(['success' => true, 'slug' => $slug, 'sections' => $sections]);
} catch (Exception $e) {
    sendResponse(['success' => true, 'slug' => $slug, 'sections' => $fallbackSections[$slug] ?? [], 'error' => $e->getMessage()]);
}
