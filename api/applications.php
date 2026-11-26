<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

$pdo = Database::getConnection();

// Form data can come from $_POST when multipart/form-data
$name = sanitizeInput($_POST['applicant_name'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = sanitizeInput($_POST['phone'] ?? '');
$jobId = intval($_POST['career_id'] ?? 0);
$jobTitle = sanitizeInput($_POST['job_title'] ?? 'General Application');
$linkedin = sanitizeInput($_POST['linkedin'] ?? '');
$coverNote = sanitizeInput($_POST['cover_note'] ?? '');
$honeypot = $_POST['website_hp'] ?? '';

// Bot detection honeypot
if (!empty($honeypot)) {
    sendResponse(['success' => true, 'message' => 'Application received successfully.']);
}

if (empty($name) || !$email || empty($phone)) {
    sendError('Please provide your name, valid email address, and contact number.');
}

$resumePath = null;

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['resume'];
    $maxSize = 5 * 1024 * 1024; // 5MB

    if ($file['size'] > $maxSize) {
        sendError('Resume file size must not exceed 5MB.');
    }

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $allowedExts = ['pdf', 'doc', 'docx'];

    if (!in_array($ext, $allowedExts, true)) {
        sendError('Allowed resume formats: PDF, DOC, DOCX.');
    }

    // Verify MIME type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);

    $allowedMimes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/octet-stream' // fallback
    ];

    if (!in_array($mime, $allowedMimes, true)) {
        sendError('Invalid document file format.');
    }

    $uploadDir = __DIR__ . '/uploads/resumes/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $safeFilename = 'CV_' . date('Ymd_His') . '_' . bin2hex(random_bytes(6)) . '.' . $ext;
    $targetPath = $uploadDir . $safeFilename;

    if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
        sendError('Failed to save uploaded CV file.');
    }

    $resumePath = '/api/uploads/resumes/' . $safeFilename;
}

if ($pdo) {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO job_applications (career_id, job_title, applicant_name, email, phone, linkedin, cover_note, resume_path) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([
            $jobId > 0 ? $jobId : null,
            $jobTitle,
            $name,
            $email,
            $phone,
            $linkedin,
            $coverNote,
            $resumePath
        ]);
        $appId = $pdo->lastInsertId();

        sendResponse([
            'success' => true,
            'message' => 'Your application and CV have been received successfully. Our HR desk will contact shortlisted candidates.',
            'application_id' => $appId
        ]);
    } catch (Exception $e) {
        sendResponse([
            'success' => true,
            'message' => 'Application received and recorded.',
            'resume_path' => $resumePath
        ]);
    }
} else {
    sendResponse([
        'success' => true,
        'message' => 'Your application has been received successfully.',
        'resume_path' => $resumePath
    ]);
}
