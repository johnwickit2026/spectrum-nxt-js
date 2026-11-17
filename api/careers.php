<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

$pdo = Database::getConnection();

$fallbackCareers = [
    [
        'id' => 1,
        'title' => 'Cambridge O & A Level Physics Teacher',
        'department' => 'Science Department',
        'job_type' => 'Full Time',
        'deadline' => '2026-12-30',
        'requirements' => "Master's or Bachelor's in Physics from a reputable university. Minimum 3 years teaching Cambridge IGCSE/A-Level syllabus. Excellent English communication skills.",
        'responsibilities' => 'Conduct engaging classroom theory and hands-on laboratory sessions. Prepare students thoroughly for British Council examinations. Provide personalized academic mentorship.',
        'is_active' => 1
    ],
    [
        'id' => 2,
        'title' => 'Primary English & Literature Teacher',
        'department' => 'Primary Section',
        'job_type' => 'Full Time',
        'deadline' => '2026-12-25',
        'requirements' => 'BA/MA in English Literature or Linguistics. Prior experience with early childhood phonics, interactive storytelling, and language immersion.',
        'responsibilities' => 'Deliver creative phonics and reading programs. Encourage expressive writing, public speaking, and confidence in young learners.',
        'is_active' => 1
    ],
    [
        'id' => 3,
        'title' => 'ICT & Robotics Coordinator',
        'department' => 'Technology Department',
        'job_type' => 'Full Time',
        'deadline' => '2026-12-31',
        'requirements' => 'B.Sc in Computer Science or Software Engineering. Proficiency in Python, Scratch, web development basics, and lab maintenance.',
        'responsibilities' => 'Guide students through digital literacy, coding, and STEM robotics clubs. Maintain computer lab hardware and network readiness.',
        'is_active' => 1
    ]
];

if (!$pdo) {
    sendResponse(['success' => true, 'data' => $fallbackCareers, 'source' => 'fallback']);
}

try {
    $stmt = $pdo->query("SELECT * FROM careers WHERE is_active = 1 ORDER BY deadline ASC");
    $careers = $stmt->fetchAll();
    sendResponse(['success' => true, 'data' => $careers]);
} catch (Exception $e) {
    sendError('Failed to fetch careers: ' . $e->getMessage(), 500);
}
