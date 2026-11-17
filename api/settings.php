<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();

// Fallback defaults if DB is not yet connected
$defaultSettings = [
    'admissions_enabled' => '1',
    'admission_popup_title' => 'Admissions Open for 2026-2027',
    'admission_popup_content' => 'Apply now for Play Group through A-Levels and Hifzul Quran program at Spectrum International School.',
    'admission_popup_image' => '/assets/IMG_9861.JPG.jpeg',
    'admission_popup_button_text' => 'Apply Online',
    'admission_popup_button_url' => '/frontend/apply',
    'hero_video_url' => '',
    'hero_poster_url' => '/assets/2.JPG.jpeg',
    'school_address' => 'Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh',
    'school_phone_1' => '+880 1799-369685',
    'school_phone_2' => '+880 1730-369686',
    'school_tel' => '0248318285',
    'school_email' => 'spectrumintlschool@gmail.com',
    'payment_hours' => '7:00 AM - 5:00 PM',
    'student_count' => '800+',
    'teacher_count' => '110+',
    'campus_count' => '2',
    'established_year' => '2013'
];

if (!$pdo) {
    sendResponse(['success' => true, 'data' => $defaultSettings, 'source' => 'fallback']);
}

try {
    $stmt = $pdo->query("SELECT setting_key, setting_value FROM site_settings");
    $settings = $defaultSettings;
    while ($row = $stmt->fetch()) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    sendResponse(['success' => true, 'data' => $settings, 'source' => 'database']);
} catch (Exception $e) {
    sendResponse(['success' => true, 'data' => $defaultSettings, 'source' => 'fallback']);
}
