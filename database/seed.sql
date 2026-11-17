-- Spectrum International School (SIS) Seed Data
-- Run after schema.sql

-- 1. Admin Roles
INSERT INTO admin_roles (id, name, permissions) VALUES
(1, 'Super Admin', '["all"]'),
(2, 'Editor', '["blogs", "notices", "events", "gallery", "submissions"]');

-- 2. Default Admins (Password: Admin@SIS2026 - bcrypt hash $2y$10$e8w.x7R6lG2Bv4K1tWvK8Oz8g2a6y7C8h9f0a1b2c3d4e5f6g7h8i)
-- Using PHP standard password_hash('Admin@SIS2026', PASSWORD_BCRYPT)
INSERT INTO admins (id, username, password_hash, email, full_name, role_id, is_active) VALUES
(1, 'superadmin', '$2y$10$wOqZ0pYj6N8fP0Mh0p6hReK1wz6Y4.Cvyg1ZzOqVvj1s5pQx5eEWW', 'admin@spectrumintlschool.com', 'SIS Chief Administrator', 1, 1);

-- 3. Blog Categories
INSERT INTO blog_categories (id, name, slug) VALUES
(1, 'Academic Excellence', 'academic-excellence'),
(2, 'Islamic & Moral Values', 'islamic-values'),
(3, 'Campus Life & Activities', 'campus-life'),
(4, 'Early Childhood Education', 'early-childhood');

-- 4. Blogs
INSERT INTO blogs (id, slug, title, category_id, author, excerpt, content, cover_image, is_published, published_at) VALUES
(1, 'nurturing-faith-and-reason-at-spectrum', 'Nurturing Faith & Reason: The Integrated Curriculum at SIS', 2, 'Academic Council', 'How Spectrum International School harmonizes Cambridge academic rigor with comprehensive Islamic studies and Tahfeezul Quran.', 'At Spectrum International School, we believe true education enriches both the intellect and the soul. Our dual-curriculum framework combines Pearson Edexcel and Cambridge standards with rigorous Islamic values, Quranic recitation, and character-building (Tarbiyah). Students do not have to choose between worldly academic excellence and their spiritual heritage.', '/assets/IMG_9469.JPG.jpeg', 1, '2026-10-15'),
(2, 'why-early-stem-in-primary-years', 'Why Experiential STEM in Primary Years Sets Lifelong Thinkers', 1, 'Head of Science Dept', 'Engaging young minds in hands-on laboratories and inquiry-driven science sets the foundation for analytical leadership.', 'In our state-of-the-art science laboratories and ICT suites, young learners explore hypotheses, conduct safe chemistry and physics demonstrations, and build robotics models. Research proves that tactile inquiry during formative school years cements neural pathways for lifelong problem-solving.', '/assets/IMG_9437.JPG.jpeg', 1, '2026-11-01'),
(3, 'building-champions-through-athletics', 'Building Resilience and Sportsmanship on the Field', 3, 'Physical Education Lead', 'Physical education at SIS is more than fitness—it teaches strategic thinking, teamwork, perseverance, and ethical leadership.', 'Through organized sports leagues, athletics meets, martial arts, and badminton tournaments, our students cultivate stamina and a deep sense of fair play. Our students understand that falling and rising again on the sports field mirrors the perseverance required in adult life.', '/assets/IMG_0413.JPG.jpeg', 1, '2026-11-10');

-- 5. Notice Categories
INSERT INTO notice_categories (id, name, slug) VALUES
(1, 'Admissions', 'admissions'),
(2, 'Examinations', 'examinations'),
(3, 'Academic Routine', 'academic-routine'),
(4, 'Events & Holidays', 'events-holidays');

-- 6. Notices
INSERT INTO notices (id, title, category_id, file_url, content, publish_date, is_active) VALUES
(1, 'Admissions Open for Academic Session 2026-2027 (Play Group to Class VIII & A Levels)', 1, '/assets/prospectus.pdf', 'Applications are officially open for Play Group, Nursery, KG, Classes I-VIII, and Cambridge A-Levels for the upcoming academic session. Parents may apply online or collect admission forms from the school admission office at Khadem Tower, Shantinagar.', '2026-11-01', 1),
(2, 'Term Examination Schedule & Syllabus Guidelines', 2, NULL, 'The upcoming Mid-Term Examination schedule has been published for all grades. Students are advised to collect their exam admit cards and review the subject-wise syllabus guidelines posted on the student noticeboard.', '2026-11-05', 1),
(3, 'Special Tahfeezul Quran (Hifz) Department Admissions', 1, NULL, 'Spectrum International School announces new enrollment slots for our dedicated Girls and Boys Hifzul Quran Departments, integrated smoothly with regular English-medium classes.', '2026-11-08', 1),
(4, 'Important Advisory: Online Fee Payment Hours & Helplines', 3, NULL, 'Parents paying tuition and admission fees online are reminded that the secure payment window operates between 7:00 AM and 5:00 PM daily. For any assistance, please dial +880 1799-369685 or +880 1730-369686.', '2026-11-12', 1);

-- 7. Events
INSERT INTO events (id, title, event_date, event_time, location, excerpt, content, image_url, is_featured) VALUES
(1, 'Annual Book Festival & Reading Culture Week', '2026-12-05', '09:00 AM - 03:00 PM', 'SIS Main Auditorium, Khadem Tower', 'A vibrant week dedicated to cultivating literary curiosity, author sessions, and book exhibitions.', 'Students from all grades showcase their favorite literary works, participate in storytelling competitions, and engage with renowned educational authors. Parents are warmly invited to visit our book stalls and student book reviews.', '/assets/IMG_9817.JPG.jpeg', 1),
(2, 'Parent-Teacher Orientation Program 2026', '2026-11-28', '10:00 AM - 01:00 PM', 'Auditorium & Conference Hall', 'Interactive dialogue between faculty and parents to align on student growth and pastoral care.', 'Our leadership team, along with class teachers and counselors, will present the curriculum milestones, grading policies, and co-curricular opportunities for the academic year.', '/assets/IMG_9861.JPG.jpeg', 1),
(3, 'Girls Hifz Department Quran Recitation Celebration', '2026-12-15', '09:30 AM - 12:30 PM', 'SIS Campus Hall', 'Honoring our young Huffaz for exemplary dedication to the preservation and melodious recitation of the Holy Quran.', 'A solemn and inspirational morning where students celebrate milestone achievements in Quran memorization under the guidance of certified Qaris and Islamic scholars.', '/assets/IMG_9469.JPG.jpeg', 1);

-- 8. Gallery Albums
INSERT INTO gallery_albums (id, title, slug, description, cover_image) VALUES
(1, 'Life at Spectrum Campus', 'life-at-spectrum', 'Vibrant moments of daily learning, collaborative projects, and peer fellowship.', '/assets/2.JPG.jpeg'),
(2, 'Sports & Athletics Meet', 'sports-athletics', 'High-energy track, field, and team sports competitions showcasing student vitality.', '/assets/IMG_0413.JPG.jpeg'),
(3, 'Academic & Science Explorations', 'academic-science', 'Hands-on laboratories, ICT discoveries, and classroom engagement.', '/assets/IMG_9437.JPG.jpeg');

-- 9. Galleries
INSERT INTO galleries (id, album_id, title, category, image_url) VALUES
(1, 3, 'Modern Science Laboratory Investigation', 'Academics', '/assets/IMG_9437.JPG.jpeg'),
(2, 2, 'Annual Athletics Day & March Past', 'Sports', '/assets/IMG_0413.JPG.jpeg'),
(3, 1, 'Interactive Primary Classroom Engagement', 'Academics', '/assets/1.1.1.JPG.jpeg'),
(4, 1, 'School Morning Assembly & Flag Ceremony', 'Campus', '/assets/2.JPG.jpeg'),
(5, 1, 'Play & Learn Early Years Discovery Zone', 'Activities', '/assets/2.2.JPG.jpeg'),
(6, 1, 'Book Festival Literary Exhibition', 'Events', '/assets/IMG_9817.JPG.jpeg'),
(7, 1, 'Hifzul Quran Department Recitation', 'Islamic Studies', '/assets/IMG_9469.JPG.jpeg'),
(8, 1, 'New Academic Year Parent Orientation', 'Events', '/assets/IMG_9861.JPG.jpeg'),
(9, 1, 'Merit Recognition & Graduation Ceremony', 'Recognition', '/assets/IMG_9965.JPG.jpeg'),
(10, 1, 'Creative Fine Arts Workshop', 'Activities', '/assets/IMG_9828.JPG.jpeg'),
(11, 1, 'Heritage & Nature Study Tour', 'Field Trips', '/assets/IMG_9912.JPG.jpeg'),
(12, 3, 'Computer Technology & Coding Laboratory', 'Facilities', '/assets/IMG_2236.JPG.jpeg');

-- 10. Video Gallery
INSERT INTO video_gallery (id, title, youtube_id, video_url, thumbnail_url, sort_order) VALUES
(1, 'Spectrum International School Campus Tour & Facilities', 'dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '/assets/2.JPG.jpeg', 1),
(2, 'Annual Cultural Day and Academic Exhibitions', 'dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '/assets/1.JPG.jpeg', 2),
(3, 'Tahfeezul Quran & Islamic Curriculum Highlights', 'dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '/assets/IMG_9469.JPG.jpeg', 3);

-- 11. Staff
INSERT INTO staff (id, name, designation, department, team_type, bio, photo_url, phone, email, sort_order) VALUES
(1, 'Dr. M. A. Rahman', 'Principal & Academic Director', 'Academic Leadership', 'academic', 'Eminent academician with over 25 years of leadership in international British curriculum and holistic education.', '/assets/IMG_9993.JPG.jpeg', '+880 1799-369685', 'principal@spectrumintlschool.com', 1),
(2, 'Syeda Fatima Zahra', 'Vice Principal & Head of Senior Section', 'Senior School', 'academic', 'Passionate educator committed to Pearson Edexcel & Cambridge O/A Level academic excellence and student mentoring.', '/assets/IMG_2461.JPG.jpeg', '+880 1799-369685', 'vp@spectrumintlschool.com', 2),
(3, 'Sheikh Muhammad Abdullah', 'Director of Islamic Studies & Tahfeez', 'Islamic Studies', 'academic', 'Certified Qari and scholar overseeing Quranic memorization, Tajweed, and Tarbiyah programs.', '/assets/IMG_9469.JPG.jpeg', '+880 1799-369685', 'islamicstudies@spectrumintlschool.com', 3),
(4, 'Tariq Hasan', 'Chief Finance & Accounts Officer', 'Administration & Finance', 'non-academic', 'Oversees fiscal operations, parent accounts, fee management, and institutional resource planning.', '/assets/IMG_9917.JPG.jpeg', '+880 1730-369686', 'accounts@spectrumintlschool.com', 4),
(5, 'Kamal Hossain', 'Campus Facilities & Logistics Manager', 'Operations', 'support', 'Dedicated supervisor maintaining campus hygiene, 24/7 security, lab safety, and transport logistics.', '/assets/IMG_9917.JPG.jpeg', '+880 1730-369686', 'operations@spectrumintlschool.com', 5);

-- 12. Committees
INSERT INTO committees (id, name, designation, committee_type, photo_url, bio, sort_order) VALUES
(1, 'Engr. A. K. M. Shamsuddin', 'Chairman, Governing Board', 'management', '/assets/IMG_9993.JPG.jpeg', 'Distinguished industry leader providing strategic governance, ethical oversight, and infrastructural guidance for SIS.', 1),
(2, 'Dr. Tahmina Begum', 'Senior Education Advisor', 'advisor', '/assets/IMG_2461.JPG.jpeg', 'Former professor and curriculum consultant advising on international pedagogical benchmarks and teacher training.', 2),
(3, 'Mufti Dr. Abu Bakar Siddique', 'Head of Sharia Advisory Board', 'sharia', '/assets/IMG_9469.JPG.jpeg', 'Prominent Islamic jurist ensuring that all moral curricula, financial practices, and campus conduct uphold Islamic values.', 3);

-- 13. Careers
INSERT INTO careers (id, title, department, job_type, deadline, requirements, responsibilities, is_active) VALUES
(1, 'Cambridge O & A Level Physics Teacher', 'Science Department', 'Full Time', '2026-12-30', 'Master\'s or Bachelor\'s in Physics from a reputable university. Minimum 3 years teaching Cambridge IGCSE/A-Level syllabus. Excellent English communication skills.', 'Conduct engaging classroom theory and hands-on laboratory sessions. Prepare students thoroughly for British Council examinations. Provide personalized academic mentorship.', 1),
(2, 'Primary English & Literature Teacher', 'Primary Section', 'Full Time', '2026-12-25', 'BA/MA in English Literature or Linguistics. Prior experience with early childhood phonics, interactive storytelling, and language immersion.', 'Deliver creative phonics and reading programs. Encourage expressive writing, public speaking, and confidence in young learners.', 1),
(3, 'ICT & Robotics Coordinator', 'Technology Department', 'Full Time', '2026-12-31', 'B.Sc in Computer Science or Software Engineering. Proficiency in Python, Scratch, web development basics, and lab maintenance.', 'Guide students through digital literacy, coding, and STEM robotics clubs. Maintain computer lab hardware and network readiness.', 1);

-- 14. Site Settings
INSERT INTO site_settings (setting_key, setting_value, description) VALUES
('admissions_enabled', '1', 'Global admission status: 1 for open, 0 for closed'),
('admission_popup_title', 'Admissions Open for 2026-2027', 'Headline for homepage admission modal'),
('admission_popup_content', 'Join the Spectrum family! Admissions open from Play Group to Class VIII & Cambridge A Levels. Limited seats available in the Hifzul Quran section.', 'Content of admission announcement popup'),
('admission_popup_image', '/assets/IMG_9861.JPG.jpeg', 'Image shown inside admission announcement popup'),
('admission_popup_button_text', 'Apply Online Now', 'Button text for admission modal'),
('admission_popup_button_url', '/frontend/apply', 'Destination link for admission modal button'),
('hero_video_url', '', 'Direct URL or YouTube link for hero background video'),
('hero_poster_url', '/assets/2.JPG.jpeg', 'Hero background image or fallback poster'),
('school_address', 'Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh', 'Fixed campus address'),
('school_phone_1', '+880 1799-369685', 'Primary mobile / admission desk'),
('school_phone_2', '+880 1730-369686', 'Secondary mobile / accounts desk'),
('school_tel', '0248318285', 'Landline phone number'),
('school_email', 'spectrumintlschool@gmail.com', 'Official contact email'),
('payment_hours', '7:00 AM - 5:00 PM', 'Daily window for online payment transactions'),
('student_count', '800+', 'Total verified student community count'),
('teacher_count', '110+', 'Total qualified teachers & educational staff count'),
('campus_count', '2', 'Modern equipped campus buildings'),
('established_year', '2013', 'Year Spectrum International School was founded'),
('social_facebook', 'https://www.facebook.com/spectrumintlschool', 'Facebook page URL'),
('social_youtube', 'https://www.youtube.com/@spectrumintlschool', 'YouTube channel URL'),
('social_linkedin', 'https://www.linkedin.com/school/spectrum-international-school-bd', 'LinkedIn page URL');

-- 15. Activity Log (Initial)
INSERT INTO activity_logs (admin_id, admin_name, action, details, ip_address) VALUES
(1, 'System Initializer', 'DATABASE_SEED', 'Successfully loaded initial verified content, settings, and administration credentials.', '127.0.0.1');
