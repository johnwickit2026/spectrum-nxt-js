<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

if (!$pdo) {
    sendResponse(['success' => true, 'message' => 'DB offline - operation simulated']);
}

try {
    if ($method === 'GET') {
        $category = sanitizeInput($_GET['category'] ?? '');
        $query = "SELECT * FROM facilities";
        $params = [];
        if (!empty($category)) {
            $query .= " WHERE category = ?";
            $params[] = $category;
        }
        $query .= " ORDER BY category ASC, sort_order ASC, id ASC";
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $facilities = $stmt->fetchAll();

        foreach ($facilities as &$f) {
            if (!empty($f['gallery_images']) && is_string($f['gallery_images'])) {
                $f['gallery_images'] = json_decode($f['gallery_images'], true);
            }
        }
        sendResponse(['success' => true, 'facilities' => $facilities]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $category = sanitizeInput($data['category'] ?? 'lab');
        $subcategory = sanitizeInput($data['subcategory'] ?? '');
        $title = sanitizeInput($data['title'] ?? '');
        $slug = sanitizeInput($data['slug'] ?? strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title))));
        $description = $data['description'] ?? '';
        $coverImage = sanitizeInput($data['cover_image'] ?? '/assets/IMG_9437.JPG.jpeg');
        $galleryImages = is_array($data['gallery_images'] ?? null) ? json_encode($data['gallery_images']) : null;
        $sortOrder = intval($data['sort_order'] ?? 0);
        $isPublished = isset($data['is_published']) ? (int)$data['is_published'] : 1;

        if (empty($title)) {
            sendError('Title is required');
        }

        $stmt = $pdo->prepare("INSERT INTO facilities (category, subcategory, title, slug, description, cover_image, gallery_images, sort_order, is_published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$category, $subcategory, $title, $slug, $description, $coverImage, $galleryImages, $sortOrder, $isPublished]);
        $newId = $pdo->lastInsertId();

        logActivity('ADD_FACILITY', "Added $category facility: $title");
        sendResponse(['success' => true, 'message' => 'Facility created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        $category = sanitizeInput($data['category'] ?? 'lab');
        $subcategory = sanitizeInput($data['subcategory'] ?? '');
        $title = sanitizeInput($data['title'] ?? '');
        $slug = sanitizeInput($data['slug'] ?? '');
        $description = $data['description'] ?? '';
        $coverImage = sanitizeInput($data['cover_image'] ?? '');
        $galleryImages = is_array($data['gallery_images'] ?? null) ? json_encode($data['gallery_images']) : null;
        $sortOrder = intval($data['sort_order'] ?? 0);
        $isPublished = isset($data['is_published']) ? (int)$data['is_published'] : 1;

        if ($id <= 0 || empty($title)) {
            sendError('Invalid facility ID or title');
        }

        $stmt = $pdo->prepare("UPDATE facilities SET category = ?, subcategory = ?, title = ?, slug = ?, description = ?, cover_image = ?, gallery_images = ?, sort_order = ?, is_published = ? WHERE id = ?");
        $stmt->execute([$category, $subcategory, $title, $slug, $description, $coverImage, $galleryImages, $sortOrder, $isPublished, $id]);

        logActivity('UPDATE_FACILITY', "Updated facility: $title (ID: $id)");
        sendResponse(['success' => true, 'message' => 'Facility updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if ($id <= 0) sendError('Invalid facility ID');

        $stmt = $pdo->prepare("DELETE FROM facilities WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_FACILITY', "Deleted facility ID: $id");
        sendResponse(['success' => true, 'message' => 'Facility deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Facility operation failed: ' . $e->getMessage(), 500);
}
