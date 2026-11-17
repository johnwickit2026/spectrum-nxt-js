<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

$input = getJsonInput();

// Anti-spam honeypot
if (!empty($input['website_hp'])) {
    sendResponse(['success' => true, 'message' => 'Feedback submitted successfully.']);
}

$name = sanitizeInput($input['name'] ?? '');
$email = sanitizeInput($input['email'] ?? '');
$phone = sanitizeInput($input['phone'] ?? '');
$category = sanitizeInput($input['category'] ?? 'General Suggestion');
$message = sanitizeInput($input['message'] ?? '');

$errors = [];
if (empty($name)) $errors['name'] = 'Name is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Valid email is required.';
if (empty($message)) $errors['message'] = 'Feedback message is required.';

if (!empty($errors)) {
    sendError('Please provide complete information.', 422, $errors);
}

$pdo = Database::getConnection();

if ($pdo) {
    try {
        $stmt = $pdo->prepare("INSERT INTO feedback_submissions (name, email, phone, category, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$name, $email, $phone, $category, $message]);
    } catch (Exception $e) {
        error_log("Failed to insert feedback submission: " . $e->getMessage());
    }
}

$to = SCHOOL_EMAIL;
$mailSubject = "[SIS Feedback] $category - from $name";
$mailBody = "New Feedback received:\n\n"
          . "Name: $name\n"
          . "Email: $email\n"
          . "Phone: $phone\n"
          . "Category: $category\n"
          . "Message:\n$message\n\n"
          . "Timestamp: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: " . MAIL_FROM . "\r\n" . "Reply-To: $email\r\n";
@mail($to, $mailSubject, $mailBody, $headers);

sendResponse([
    'success' => true,
    'message' => 'Thank you for your valuable feedback. We continuously strive to elevate our educational standards.'
]);
