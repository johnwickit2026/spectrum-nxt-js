<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

$input = getJsonInput();

// Anti-spam honeypot check
if (!empty($input['website_hp'])) {
    // Silently ignore bots
    sendResponse(['success' => true, 'message' => 'Thank you for reaching out. We have received your message.']);
}

$name = sanitizeInput($input['name'] ?? '');
$email = sanitizeInput($input['email'] ?? '');
$phone = sanitizeInput($input['phone'] ?? '');
$subject = sanitizeInput($input['subject'] ?? 'General Inquiry');
$message = sanitizeInput($input['message'] ?? '');

$errors = [];
if (empty($name)) $errors['name'] = 'Full name is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Valid email is required.';
if (empty($phone)) $errors['phone'] = 'Contact phone number is required.';
if (empty($message)) $errors['message'] = 'Message content cannot be empty.';

if (!empty($errors)) {
    sendError('Please fill in all required fields accurately.', 422, $errors);
}

$pdo = Database::getConnection();

if ($pdo) {
    try {
        $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$name, $email, $phone, $subject, $message]);
    } catch (Exception $e) {
        error_log("Failed to insert contact submission: " . $e->getMessage());
    }
}

// Mail notification to school administration
$to = SCHOOL_EMAIL;
$mailSubject = "[SIS Website Inquiry] $subject - from $name";
$mailBody = "You have received a new contact submission from Spectrum International School website:\n\n"
          . "Name: $name\n"
          . "Email: $email\n"
          . "Phone: $phone\n"
          . "Subject: $subject\n"
          . "Message:\n$message\n\n"
          . "Time: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: " . MAIL_FROM . "\r\n"
         . "Reply-To: $email\r\n"
         . "X-Mailer: PHP/" . phpversion();

@mail($to, $mailSubject, $mailBody, $headers);

sendResponse([
    'success' => true,
    'message' => 'Thank you for contacting Spectrum International School. Our admissions/office desk will reach back to you shortly.'
]);
