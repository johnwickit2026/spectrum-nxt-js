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
        $slug = sanitizeInput($_GET['slug'] ?? '');
        $pages = $pdo->query("SELECT * FROM pages ORDER BY id ASC")->fetchAll();

        $query = "
            SELECT ps.*, p.slug as page_slug, p.title as page_title 
            FROM page_sections ps
            JOIN pages p ON ps.page_id = p.id
        ";
        $params = [];
        if (!empty($slug)) {
            $query .= " WHERE p.slug = ?";
            $params[] = $slug;
        }
        $query .= " ORDER BY ps.page_id ASC, ps.sort_order ASC, ps.id ASC";

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $sections = $stmt->fetchAll();

        foreach ($sections as &$s) {
            if (!empty($s['extra_json']) && is_string($s['extra_json'])) {
                $s['extra_json'] = json_decode($s['extra_json'], true);
            }
        }

        sendResponse(['success' => true, 'pages' => $pages, 'sections' => $sections]);
    }

    if ($method === 'POST') {
        $data = getJsonInput();
        $pageId = intval($data['page_id'] ?? 0);
        $sectionKey = sanitizeInput($data['section_key'] ?? '');
        $title = $data['title'] ?? '';
        $subtitle = $data['subtitle'] ?? '';
        $content = $data['content'] ?? '';
        $imageUrl = sanitizeInput($data['image_url'] ?? '');
        $extraJson = is_array($data['extra_json'] ?? null) ? json_encode($data['extra_json']) : null;
        $sortOrder = intval($data['sort_order'] ?? 0);
        $isPublished = isset($data['is_published']) ? (int)$data['is_published'] : 1;

        if ($pageId <= 0 || empty($sectionKey)) {
            sendError('Page ID and Section Key are required');
        }

        $stmt = $pdo->prepare("
            INSERT INTO page_sections (page_id, section_key, title, subtitle, content, image_url, extra_json, sort_order, is_published)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE 
                title = VALUES(title), 
                subtitle = VALUES(subtitle), 
                content = VALUES(content), 
                image_url = VALUES(image_url), 
                extra_json = VALUES(extra_json),
                sort_order = VALUES(sort_order),
                is_published = VALUES(is_published)
        ");
        $stmt->execute([$pageId, $sectionKey, $title, $subtitle, $content, $imageUrl, $extraJson, $sortOrder, $isPublished]);

        logActivity('CMS_UPDATE_SECTION', "Updated page section $sectionKey for page ID $pageId");
        sendResponse(['success' => true, 'message' => 'Page section saved successfully']);
    }

    if ($method === 'PUT') {
        $data = getJsonInput();
        $id = intval($data['id'] ?? 0);
        $title = $data['title'] ?? '';
        $subtitle = $data['subtitle'] ?? '';
        $content = $data['content'] ?? '';
        $imageUrl = sanitizeInput($data['image_url'] ?? '');
        $extraJson = is_array($data['extra_json'] ?? null) ? json_encode($data['extra_json']) : null;
        $sortOrder = intval($data['sort_order'] ?? 0);
        $isPublished = isset($data['is_published']) ? (int)$data['is_published'] : 1;

        if ($id <= 0) {
            sendError('Invalid section ID');
        }

        $stmt = $pdo->prepare("
            UPDATE page_sections 
            SET title = ?, subtitle = ?, content = ?, image_url = ?, extra_json = ?, sort_order = ?, is_published = ?
            WHERE id = ?
        ");
        $stmt->execute([$title, $subtitle, $content, $imageUrl, $extraJson, $sortOrder, $isPublished, $id]);

        logActivity('CMS_UPDATE_SECTION', "Updated section ID: $id");
        sendResponse(['success' => true, 'message' => 'Section updated successfully']);
    }

    if ($method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if ($id <= 0) sendError('Invalid section ID');

        $stmt = $pdo->prepare("DELETE FROM page_sections WHERE id = ?");
        $stmt->execute([$id]);

        logActivity('CMS_DELETE_SECTION', "Deleted section ID: $id");
        sendResponse(['success' => true, 'message' => 'Section deleted successfully']);
    }
} catch (Exception $e) {
    sendError('CMS operation failed: ' . $e->getMessage(), 500);
}
