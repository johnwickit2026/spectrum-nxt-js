-- ==============================================================================
-- Spectrum International School (SIS) — 2026 Comprehensive Upgrade Migration
-- Hostinger MySQL / MariaDB Compatible
-- ==============================================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Academic Sessions Table (Supports June and January Cycles)
CREATE TABLE IF NOT EXISTS academic_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    session_type ENUM('june', 'january') NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'upcoming', 'completed', 'archived') NOT NULL DEFAULT 'active',
    is_current TINYINT(1) DEFAULT 0,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Facilities, Clubs & ECA Table
CREATE TABLE IF NOT EXISTS facilities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('lab', 'club', 'eca') NOT NULL,
    subcategory VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description LONGTEXT NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    gallery_images JSON NULL,
    sort_order INT DEFAULT 0,
    is_published TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Modify Staff Table:
-- Update team_type to ('academic', 'admin', 'support'), add qualifications & experience & email
ALTER TABLE staff MODIFY COLUMN team_type ENUM('academic', 'admin', 'support') NOT NULL DEFAULT 'academic';
ALTER TABLE staff ADD COLUMN IF NOT EXISTS qualifications TEXT NULL AFTER department;
ALTER TABLE staff ADD COLUMN IF NOT EXISTS experience TEXT NULL AFTER qualifications;

-- Update existing non-academic staff to admin
UPDATE staff SET team_type = 'admin' WHERE team_type = 'non-academic' OR team_type = '';

-- 4. Modify Events Table:
-- Add category, gallery_album_id, is_published, images
ALTER TABLE events ADD COLUMN IF NOT EXISTS category VARCHAR(100) NOT NULL DEFAULT 'General' AFTER title;
ALTER TABLE events ADD COLUMN IF NOT EXISTS gallery_album_id INT NULL AFTER location;
ALTER TABLE events ADD COLUMN IF NOT EXISTS is_published TINYINT(1) DEFAULT 1 AFTER is_featured;
ALTER TABLE events ADD COLUMN IF NOT EXISTS images JSON NULL AFTER image_url;

-- 5. Modify Notices Table:
-- Add session_id, is_published
ALTER TABLE notices ADD COLUMN IF NOT EXISTS session_id INT NULL AFTER category_id;
ALTER TABLE notices ADD COLUMN IF NOT EXISTS is_published TINYINT(1) DEFAULT 1 AFTER is_active;

-- 6. Job Applications Table
CREATE TABLE IF NOT EXISTS job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    career_id INT NULL,
    job_title VARCHAR(200) NOT NULL,
    applicant_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    linkedin VARCHAR(255) NULL,
    cover_note LONGTEXT NULL,
    resume_path VARCHAR(255) NULL,
    status ENUM('pending', 'reviewed', 'shortlisted', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (career_id) REFERENCES careers(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Page Sections Table
CREATE TABLE IF NOT EXISTS pages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(120) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    meta_title VARCHAR(255) NULL,
    meta_description TEXT NULL,
    is_published TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS page_sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_id INT NOT NULL,
    section_key VARCHAR(100) NOT NULL,
    title VARCHAR(255) NULL,
    subtitle VARCHAR(255) NULL,
    content LONGTEXT NULL,
    image_url VARCHAR(255) NULL,
    extra_json JSON NULL,
    sort_order INT DEFAULT 0,
    is_published TINYINT(1) DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE,
    UNIQUE KEY (page_id, section_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==============================================================================
-- INITIAL SEED DATA FOR NEW TABLES & COLUMNS
-- ==============================================================================

-- Seed Academic Sessions (June & January distinct cycles)
INSERT INTO academic_sessions (id, name, session_type, start_date, end_date, status, is_current, description) VALUES
(1, 'Academic Session 2026-2027 (June Cycle)', 'june', '2026-06-01', '2027-06-30', 'active', 1, 'Regular school academic cycle spanning Play Group to Class XII & Cambridge O/A Levels.'),
(2, 'Academic Session 2025-2026 (June Cycle)', 'june', '2025-06-01', '2026-06-30', 'completed', 0, 'Previous academic session concluded with annual exams and graduation ceremonies.'),
(3, 'Academic Session 2026 (January Cycle)', 'january', '2026-01-01', '2026-12-31', 'active', 1, 'Accelerated January academic session and specialized Cambridge winter intake.'),
(4, 'Academic Session 2027 (January Cycle)', 'january', '2027-01-01', '2027-12-31', 'upcoming', 0, 'Upcoming winter session intake for A-Levels and Hifzul Quran students.')
ON DUPLICATE KEY UPDATE name = VALUES(name), status = VALUES(status), is_current = VALUES(is_current);

-- Seed Facilities, Clubs, and ECA
INSERT INTO facilities (id, category, subcategory, title, slug, description, cover_image, gallery_images, sort_order, is_published) VALUES
-- Lab Facilities
(1, 'lab', 'Science Lab', 'Multidisciplinary Science Laboratories', 'science-lab', 'Specialized, ventilated laboratories for Physics, Chemistry, and Biology equipped with advanced optical microscopes, digital measurement apparatus, fume hoods, reagent stocks, and international safety compliance.', '/assets/IMG_9437.JPG.jpeg', '["/assets/IMG_9437.JPG.jpeg", "/assets/1.1.1.JPG.jpeg", "/assets/IMG_9828.JPG.jpeg"]', 1, 1),
(2, 'lab', 'Computer Lab', 'Modern ICT & Coding Laboratories', 'computer-lab', 'High-speed networked computer workstations, interactive smart displays, gigabit fiber broadband, educational programming suites (Python, Scratch), and robotics prototyping kits.', '/assets/IMG_2236.JPG.jpeg', '["/assets/IMG_2236.JPG.jpeg", "/assets/2.JPG.jpeg"]', 2, 1),

-- Club Facilities (Keeping all existing clubs intact)
(3, 'club', 'Language Club', 'Language Club (English & Arabic)', 'language-club', 'Fosters eloquence in English and classical Quranic Arabic through weekly debate tournaments, spelling bee preparation, public speaking workshops, recitation, and creative essay writing.', '/assets/IMG_9817.JPG.jpeg', '["/assets/IMG_9817.JPG.jpeg", "/assets/IMG_9861.JPG.jpeg"]', 3, 1),
(4, 'club', 'Computer Club', 'ICT & Robotics Innovation Club', 'computer-club', 'Empowers students with coding fundamentals, computational thinking, robotics design, digital media skills, and ethical cyber citizenship.', '/assets/IMG_2236.JPG.jpeg', '["/assets/IMG_2236.JPG.jpeg"]', 4, 1),
(5, 'club', 'Science Club', 'Science Exploration & STEM Club', 'science-club', 'Engages students in experimental inquiry, environmental sustainability projects, science fairs, and inter-school science Olympiads.', '/assets/IMG_9437.JPG.jpeg', '["/assets/IMG_9437.JPG.jpeg"]', 5, 1),
(6, 'club', 'Sports Club', 'Sports Club & Physical Fitness', 'sports-club', 'Comprehensive athletic programs including martial arts (Karate), football, badminton, table tennis, gymnastics, and annual sports meets.', '/assets/IMG_0413.JPG.jpeg', '["/assets/IMG_0413.JPG.jpeg"]', 6, 1),
(7, 'club', 'Reading Club', 'Literary Reading & Book Circle', 'reading-club', 'Dedicated to cultivating deep reading habits, book discussions, author study circles, and our annual Book Fair celebrations.', '/assets/IMG_9817.JPG.jpeg', '["/assets/IMG_9817.JPG.jpeg"]', 7, 1),
(8, 'club', 'Cultural Club', 'Cultural & Islamic Heritage Club', 'cultural-club', 'Inspiring creative expression through Islamic nasheeds, calligraphy art, stage presentation, and community outreach.', '/assets/IMG_9828.JPG.jpeg', '["/assets/IMG_9828.JPG.jpeg"]', 8, 1),

-- ECA (Extra-Curricular Activities)
(9, 'eca', 'Study Tour', 'Annual Educational Study Tours', 'study-tour', 'Immersive experiential learning excursions to historical landmarks, research institutes, nature reserves, and industrial science centers designed to broaden worldview and foster camaraderie.', '/assets/IMG_9912.JPG.jpeg', '["/assets/IMG_9912.JPG.jpeg", "/assets/2.JPG.jpeg", "/assets/IMG_9861.JPG.jpeg"]', 9, 1),
(10, 'eca', 'Field Trip', 'Hands-On Academic Field Trips', 'field-trip', 'Targeted grade-level excursions complementing Cambridge classroom theory with practical observation at botanical gardens, museums, and planetariums.', '/assets/1.JPG.jpeg', '["/assets/1.JPG.jpeg", "/assets/IMG_9912.JPG.jpeg"]', 10, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title), description = VALUES(description), cover_image = VALUES(cover_image);

-- Seed Events with Requested Categories
INSERT INTO events (id, title, category, event_date, event_time, location, gallery_album_id, excerpt, content, image_url, images, is_featured, is_published) VALUES
(1, 'Annual Spelling Bee Championship 2026', 'Spelling Bee', '2026-11-20', '09:30 AM - 01:30 PM', 'SIS Main Auditorium, Khadem Tower, Shantinagar', 1, 'Annual English spelling bee test of vocabulary, linguistic precision, and phonics mastery across Junior and Senior divisions.', 'Students compete across multiple rigorous rounds demonstrating vocabulary retention, phonetic root understanding, and rapid spelling skills before our panel of British Council certified judges.', '/assets/IMG_9817.JPG.jpeg', '["/assets/IMG_9817.JPG.jpeg", "/assets/IMG_9861.JPG.jpeg"]', 1, 1),
(2, 'Inter-Campus Arabic Spelling Bee & Tajweed', 'Arabic Spelling Bee', '2026-12-08', '10:00 AM - 01:00 PM', 'SIS Campus Hall, Shantinagar', 1, 'Prestige linguistic competition celebrating classical Arabic orthography, phonetics, and melodious Quranic pronunciation.', 'Under the patronage of the Islamic Studies faculty, students demonstrate classical Arabic morphology, correct letter-articulation (Makharij), and vocabulary synthesis.', '/assets/IMG_9469.JPG.jpeg', '["/assets/IMG_9469.JPG.jpeg"]', 1, 1),
(3, 'SIS Annual Science Fair & Robotics Expo', 'Science Fair', '2026-12-18', '09:00 AM - 04:00 PM', 'SIS STEM Courtyard & Laboratories', 3, 'Showcase of ingenious science experiments, environmental conservation models, and automated robotics prototypes built by students.', 'Over 60 original student projects demonstrated scientific inquiry across Renewable Energy, Biomedical innovations, AI and smart robotics. Parents and guests interact directly with student innovators.', '/assets/IMG_9437.JPG.jpeg', '["/assets/IMG_9437.JPG.jpeg", "/assets/IMG_2236.JPG.jpeg"]', 1, 1),
(4, 'Traditional Pitha Utshob & Heritage Celebration', 'Pitha Utshob', '2027-01-14', '10:00 AM - 03:30 PM', 'Shantinagar Campus Grounds', 1, 'Festive celebration of Bengali winter culinary traditions, artisanal pitha making, and vibrant community bonding.', 'Bringing families, educators, and children together in colorful festive stalls featuring over 30 authentic pitha varieties, cultural presentations, and appreciation of national heritage.', '/assets/IMG_9828.JPG.jpeg', '["/assets/IMG_9828.JPG.jpeg", "/assets/2.JPG.jpeg"]', 1, 1),
(5, 'Annual Track & Field Sports Championship', 'Sports', '2027-01-25', '08:30 AM - 04:30 PM', 'National Stadium Grounds, Dhaka', 2, 'The premier athletic celebration featuring inter-house sprint relays, high jump, karate exhibitions, and drill formations.', 'Celebrating stamina, sportsmanship, and teamwork. Students from all grades participated in track and field contests, culminating in the trophy presentation by the Chairman.', '/assets/IMG_0413.JPG.jpeg', '["/assets/IMG_0413.JPG.jpeg", "/assets/1.JPG.jpeg"]', 1, 1)
ON DUPLICATE KEY UPDATE category = VALUES(category), title = VALUES(title), gallery_album_id = VALUES(gallery_album_id), is_published = VALUES(is_published);

-- Seed Website Pages
INSERT INTO pages (id, slug, title, meta_title, meta_description, is_published) VALUES
(1, 'home', 'Home Page', 'Spectrum International School | Shaping Bright Minds', 'Leading English Medium Cambridge and Hifzul Quran School in Dhaka.', 1),
(2, 'about', 'About Us', 'About Spectrum International School', 'Committed to academic excellence, Pearson Edexcel standards, and Islamic moral character.', 1),
(3, 'academic-team', 'Academic Team', 'Academic Team & Faculty Directory', 'Meet our qualified educators, coordinators, and lead teachers.', 1),
(4, 'facilities', 'School Facilities', 'Campus Facilities & Labs', 'Modern Science and Computer labs, clubs, and sports arenas.', 1),
(5, 'clubs', 'Club Facilities', 'Clubs & Co-curricular Activities', 'Language, Science, Computer, Sports, and Cultural clubs.', 1),
(6, 'eca', 'ECA', 'Extra-Curricular Activities & Tours', 'Study tours and field trips.', 1),
(7, 'events', 'Events Calendar', 'School Events & Competitions', 'Spelling Bee, Science Fair, Pitha Utshob, and Sports tournaments.', 1),
(8, 'notices', 'School Notices', 'Official Notices & Announcements', 'Noticeboard for parents and students.', 1),
(9, 'spectrum-tv', 'Spectrum TV', 'Spectrum TV | Video Highlights', 'Watch school life, ceremonies, and highlights.', 1),
(10, 'contact', 'Contact Us', 'Contact Spectrum International School', 'Campus location at 41/1 Shantinagar, Dhaka.', 1),
(11, 'admission', 'Admissions', 'Admissions Open 2026-2027', 'Apply online for Play Group through A-Levels.', 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Seed Page Sections
INSERT INTO page_sections (page_id, section_key, title, subtitle, content, image_url, extra_json, sort_order, is_published) VALUES
(1, 'hero_banner', 'Nurturing Intellect, Faith, and Leadership', 'Shaping Bright Minds, Building Better Future', 'A premier English-medium institution combining Pearson Edexcel and Cambridge curriculum rigor with Islamic moral values and Tahfeezul Quran.', '/assets/2.JPG.jpeg', '{"cta_text": "Apply for Admission", "cta_url": "/frontend/apply", "secondary_cta_text": "Campus Facilities", "secondary_cta_url": "/frontend/campus-facilities"}', 1, 1),
(1, 'about_intro', 'Welcome to Spectrum International School', 'Established in 2020 | Pearson & Cambridge Attached Center', 'We provide an inspiring educational environment where modern international academic excellence thrives hand-in-hand with authentic moral character (Tarbiyah).', '/assets/IMG_9993.JPG.jpeg', '{"badge": "Holistic Education"}', 2, 1),
(1, 'affiliation_section', 'Internationally Recognized & Certified', 'Our Global Accreditations', 'Spectrum International School is an officially attached centre with British Council, Pearson Edexcel, and Cambridge curriculum benchmarks.', '/images/affiliation-logo.png', '{"pearson_center": "Attached Centre", "cambridge_curriculum": "Certified Standard", "british_council": "Partner School"}', 3, 1),
(4, 'lab_intro', 'World-Class Lab Facilities', 'Experiential STEM Learning', 'Equipped with separate modern science laboratories and networked computer suites.', '/assets/IMG_9437.JPG.jpeg', '{"science_lab": "Physics, Chem, Bio", "computer_lab": "Coding & Robotics"}', 1, 1),
(9, 'tv_intro', 'Spectrum TV Official Channel', 'Motion & Memories in Action', 'Watch student tournaments, recitation milestones, science exhibitions, and annual festivals.', '/assets/hero-banner1.jpg', '{"channel_url": "https://www.youtube.com/@SpectrumTVBD"}', 1, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title), content = VALUES(content);

-- Update Central Campus address to Shantinagar Campus in site_settings
UPDATE site_settings SET setting_value = 'Academic Campus 01: 41/1, Shantinagar, Dhaka | Campus 02: House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka' WHERE setting_key = 'school_address';

-- Update Founder & CEO photo
UPDATE staff SET photo_url = '/images/CEO SIR NEW - Copy.png' WHERE name LIKE '%Nur Ahammed%';
UPDATE management_committee SET photo_url = '/images/CEO SIR NEW - Copy.png' WHERE name LIKE '%Nur Ahammed%';

SET FOREIGN_KEY_CHECKS = 1;
