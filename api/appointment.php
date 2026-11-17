<?php
require_once __DIR__ . '/helper.php';
setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

$input = getJsonInput();

// Anti-spam honeypot
if (!empty($input['website_hp'])) {
    sendResponse(['success' => true, 'message' => 'Appointment request submitted.']);
}

$parentName = sanitizeInput($input['parent_name'] ?? '');
$studentName = sanitizeInput($input['student_name'] ?? '');
$studentClass = sanitizeInput($input['student_class'] ?? '');
$email = sanitizeInput($input['email'] ?? '');
$phone = sanitizeInput($input['phone'] ?? '');
$preferredDate = sanitizeInput($input['preferred_date'] ?? '');
$reason = sanitizeInput($input['reason'] ?? '');

$errors = [];
if (empty($parentName)) $errors['parent_name'] = 'Parent or Guardian name is required.';
if (empty($studentName)) $errors['student_name'] = 'Student name is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Valid email is required.';
if (empty($phone)) $errors['phone'] = 'Phone number is required.';
if (empty($preferredDate)) $errors['preferred_date'] = 'Preferred date is required.';
if (empty($reason)) $errors['reason'] = 'Purpose or agenda of appointment is required.';

if (!empty($errors)) {
    sendError('Please fill out all required appointment fields.', 422, $errors);
}

$pdo = Database::getConnection();

if ($pdo) {
    try {
        $stmt = $pdo->prepare("INSERT INTO appointment_requests (parent_name, student_name, student_class, email, phone, preferred_date, reason) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$parentName, $studentName, $studentClass, $email, $phone, $preferredDate, $reason]);
    } catch (Exception $e) {
        error_log("Failed to insert appointment: " . $e->getMessage());
    }
}

$to = SCHOOL_EMAIL;
$mailSubject = "[SIS CEO Appointment Request] $parentName for $studentName ($studentClass)";
$mailBody = "Appointment Request Details:\n\n"
          . "Parent/Guardian: $parentName\n"
          . "Student Name: $studentName\n"
          . "Class/Grade: $studentClass\n"
          . "Email: $email\n"
          . "Phone: $phone\n"
          . "Preferred Date: $preferredDate\n"
          . "Discussion Agenda:\n$reason\n\n"
          . "Submitted on: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: " . MAIL_FROM . "\r\n" . "Reply-To: $email\r\n";
@mail($to, $mailSubject, $mailBody, $headers);

sendResponse([
    'success' => true,
    'message' => 'Your appointment request with the Founder & CEO has been submitted. The executive secretariat will confirm your time slot shortly.'
]);
