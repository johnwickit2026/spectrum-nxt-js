<?php
require_once __DIR__ . '/../helper.php';
setCorsHeaders();
requireAdminAuth();

$pdo = Database::getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!$pdo) {
        sendResponse(['success' => true, 'data' => []]);
    }
    $stmt = $pdo->query("SELECT setting_key, setting_value, description FROM site_settings");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    sendResponse(['success' => true, 'data' => $settings]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = getJsonInput();
    if (empty($input)) {
        sendError('No settings payload provided', 400);
    }

    if (!$pdo) {
        sendResponse(['success' => true, 'message' => 'Settings saved (mock mode).', 'data' => $input]);
    }

    try {
        $pdo->beginTransaction();
        $stmt = $pdo->prepare("INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?");

        foreach ($input as $key => $val) {
            $cleanVal = is_string($val) ? trim($val) : json_encode($val);
            $stmt->execute([$key, $cleanVal, $cleanVal]);
        }
        $pdo->commit();

        $changedAdmission = isset($input['admissions_enabled']) ? " (Admissions set to " . ($input['admissions_enabled'] == '1' ? 'OPEN' : 'CLOSED') . ")" : "";
        logActivity('SETTINGS_UPDATE', 'Site settings updated' . $changedAdmission);

        sendResponse(['success' => true, 'message' => 'Settings updated successfully.', 'data' => $input]);
    } catch (Exception $e) {
        if ($pdo->inTransaction()) $pdo->rollBack();
        sendError('Failed to update settings: ' . $e->getMessage(), 500);
    }
}
