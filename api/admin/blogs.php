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
        $id = isset($_GET['id']) ? intval($_GET['id']) : null;
        if ($id) {
            $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
            $stmt->execute([$id]);
            sendResponse(['success' => true, 'data' => $stmt->fetch()]);
        } else {
            $stmt = $pdo->query("SELECT b.*, c.name as category_name FROM blogs b JOIN blog_categories c ON b.category_id = c.id ORDER BY b.id DESC");
            sendResponse(['success' => true, 'data' => $stmt->fetchAll()]);
        }
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $title = sanitizeInput($data['title'] ?? '');
        $slug = sanitizeInput($data['slug'] ?? strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title))));
        $categoryId = intval($data['category_id'] ?? 1);
        $author = sanitizeInput($data['author'] ?? 'SIS Editorial Team');
        $excerpt = sanitizeInput($data['excerpt'] ?? '');
        $content = $data['content'] ?? '';
        $coverImage = sanitizeInput($data['cover_image'] ?? '/assets/2.JPG.jpeg');
        $publishedAt = $data['published_at'] ?? date('Y-m-d');
        $isPublished = isset($data['is_published']) ? intval($data['is_published']) : 1;

        $stmt = $pdo->prepare("INSERT INTO blogs (slug, title, category_id, author, excerpt, content, cover_image, is_published, published_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$slug, $title, $categoryId, $author, $excerpt, $content, $coverImage, $isPublished, $publishedAt]);
        $newId = $pdo->lastInsertId();

        logActivity('CREATE_BLOG', "Created blog post: $title (ID: $newId)");
        sendResponse(['success' => true, 'message' => 'Blog created successfully', 'id' => $newId]);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        if (!$id) sendError('Blog ID required', 400);

        $stmt = $pdo->prepare("UPDATE blogs SET title = ?, category_id = ?, author = ?, excerpt = ?, content = ?, cover_image = ?, is_published = ? WHERE id = ?");
        $stmt->execute([
            sanitizeInput($data['title']),
            intval($data['category_id']),
            sanitizeInput($data['author']),
            sanitizeInput($data['excerpt']),
            $data['content'],
            sanitizeInput($data['cover_image']),
            intval($data['is_published'] ?? 1),
            $id
        ]);

        logActivity('UPDATE_BLOG', "Updated blog ID: $id");
        sendResponse(['success' => true, 'message' => 'Blog updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if (!$id) sendError('Blog ID required', 400);

        $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('DELETE_BLOG', "Deleted blog ID: $id");
        sendResponse(['success' => true, 'message' => 'Blog deleted successfully']);
    }
} catch (Exception $e) {
    sendError('Blog operation failed: ' . $e->getMessage(), 500);
}
