<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    sendError('No valid file uploaded or upload error occurred.', 400);
}

$file = $_FILES['file'];
$fileName = basename($file['name']);
$fileSize = $file['size'];
$tmpPath = $file['tmp_name'];

// Allowed extensions
$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'mp4'];
$ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

if (!in_array($ext, $allowedExtensions)) {
    sendError('File type not allowed. Supported formats: JPG, PNG, WEBP, PDF, MP4.', 415);
}

// 20MB limit
if ($fileSize > 20 * 1024 * 1024) {
    sendError('File exceeds maximum allowed size of 20MB.', 413);
}

if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

$newFileName = 'sis_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
$targetPath = UPLOAD_DIR . $newFileName;
$publicUrl = UPLOAD_URL . $newFileName;

if (!move_uploaded_file($tmpPath, $targetPath)) {
    sendError('Failed to save uploaded file.', 500);
}

// Save to media_assets in database if available
$pdo = Database::getConnection();
if ($pdo) {
    try {
        $tag = sanitizeInput($_POST['tag'] ?? 'general');
        $adminId = $_SESSION['admin_id'] ?? null;
        $stmt = $pdo->prepare("INSERT INTO media_assets (file_name, file_path, file_type, file_size, tag, uploaded_by) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$fileName, $publicUrl, $ext, $fileSize, $tag, $adminId]);
    } catch (Exception $e) {
        error_log("Failed to log media asset: " . $e->getMessage());
    }
}

logActivity('MEDIA_UPLOAD', "Uploaded file: $newFileName ($ext, " . round($fileSize / 1024) . " KB)");

sendResponse([
    'success' => true,
    'message' => 'File uploaded successfully.',
    'url' => $publicUrl,
    'fileName' => $newFileName,
    'originalName' => $fileName,
    'size' => $fileSize
]);
