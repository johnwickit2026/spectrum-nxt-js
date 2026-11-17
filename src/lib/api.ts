import { SiteSettings, Notice, EventItem, BlogPost, GalleryItem, StaffMember, CommitteeMember, CareerItem } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "/api";

export async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_BASE}/settings.php`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {
    // Graceful fallback
  }

  return {
    admissions_enabled: "1",
    admission_popup_title: "Admissions Open for 2026-2027",
    admission_popup_content: "Apply now for Play Group through A-Levels and Hifzul Quran program at Spectrum International School.",
    admission_popup_image: "/assets/IMG_9861.JPG.jpeg",
    admission_popup_button_text: "Apply Online",
    admission_popup_button_url: "/frontend/apply",
    hero_video_url: "",
    hero_poster_url: "/assets/2.JPG.jpeg",
    school_address: "Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh",
    school_phone_1: "+880 1799-369685",
    school_phone_2: "+880 1730-369686",
    school_tel: "0248318285",
    school_email: "spectrumintlschool@gmail.com",
    payment_hours: "7:00 AM - 5:00 PM",
    student_count: "800+",
    teacher_count: "110+",
    campus_count: "2",
    established_year: "2013",
    social_facebook: "https://www.facebook.com/spectrumintlschool",
    social_youtube: "https://www.youtube.com/@spectrumintlschool",
    social_linkedin: "https://www.linkedin.com/school/spectrum-international-school-bd"
  };
}

export async function fetchNotices(category?: string, search?: string): Promise<Notice[]> {
  try {
    const query = new URLSearchParams();
    if (category) query.append("category", category);
    if (search) query.append("q", search);
    const res = await fetch(`${API_BASE}/notices.php?${query.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return [
    {
      id: 1,
      title: "Admissions Open for Academic Session 2026-2027 (Play Group to Class VIII & A Levels)",
      category_name: "Admissions",
      category_slug: "admissions",
      file_url: "/assets/prospectus.pdf",
      content: "Applications are officially open for Play Group, Nursery, KG, Classes I-VIII, and Cambridge A-Levels for the upcoming academic session. Parents may apply online or collect admission forms from the school admission office at Khadem Tower, Shantinagar.",
      publish_date: "2026-11-01",
      is_active: 1
    },
    {
      id: 2,
      title: "Term Examination Schedule & Syllabus Guidelines",
      category_name: "Examinations",
      category_slug: "examinations",
      file_url: null,
      content: "The upcoming Mid-Term Examination schedule has been published for all grades. Students are advised to collect their exam admit cards and review the subject-wise syllabus guidelines posted on the student noticeboard.",
      publish_date: "2026-11-05",
      is_active: 1
    },
    {
      id: 3,
      title: "Special Tahfeezul Quran (Hifz) Department Admissions",
      category_name: "Admissions",
      category_slug: "admissions",
      file_url: null,
      content: "Spectrum International School announces new enrollment slots for our dedicated Girls and Boys Hifzul Quran Departments, integrated smoothly with regular English-medium classes.",
      publish_date: "2026-11-08",
      is_active: 1
    },
    {
      id: 4,
      title: "Important Advisory: Online Fee Payment Hours & Helplines",
      category_name: "Academic Routine",
      category_slug: "academic-routine",
      file_url: null,
      content: "Parents paying tuition and admission fees online are reminded that the secure payment window operates between 7:00 AM and 5:00 PM daily. For any assistance, please dial +880 1799-369685 or +880 1730-369686.",
      publish_date: "2026-11-12",
      is_active: 1
    }
  ];
}

export async function fetchEvents(): Promise<EventItem[]> {
  try {
    const res = await fetch(`${API_BASE}/events.php`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return [
    {
      id: 1,
      title: "Annual Book Festival & Reading Culture Week",
      event_date: "2026-12-05",
      event_time: "09:00 AM - 03:00 PM",
      location: "SIS Main Auditorium, Khadem Tower",
      excerpt: "A vibrant week dedicated to cultivating literary curiosity, author sessions, and book exhibitions.",
      content: "Students from all grades showcase their favorite literary works, participate in storytelling competitions, and engage with renowned educational authors. Parents are warmly invited to visit our book stalls and student book reviews.",
      image_url: "/assets/IMG_9817.JPG.jpeg",
      is_featured: 1
    },
    {
      id: 2,
      title: "Parent-Teacher Orientation Program 2026",
      event_date: "2026-11-28",
      event_time: "10:00 AM - 01:00 PM",
      location: "Auditorium & Conference Hall",
      excerpt: "Interactive dialogue between faculty and parents to align on student growth and pastoral care.",
      content: "Our leadership team, along with class teachers and counselors, will present the curriculum milestones, grading policies, and co-curricular opportunities for the academic year.",
      image_url: "/assets/IMG_9861.JPG.jpeg",
      is_featured: 1
    },
    {
      id: 3,
      title: "Girls Hifz Department Quran Recitation Celebration",
      event_date: "2026-12-15",
      event_time: "09:30 AM - 12:30 PM",
      location: "SIS Campus Hall",
      excerpt: "Honoring our young Huffaz for exemplary dedication to the preservation and melodious recitation of the Holy Quran.",
      content: "A solemn and inspirational morning where students celebrate milestone achievements in Quran memorization under the guidance of certified Qaris and Islamic scholars.",
      image_url: "/assets/IMG_9469.JPG.jpeg",
      is_featured: 1
    }
  ];
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE}/blogs.php`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return [
    {
      id: 1,
      slug: "nurturing-faith-and-reason-at-spectrum",
      title: "Nurturing Faith & Reason: The Integrated Curriculum at SIS",
      category_name: "Islamic & Moral Values",
      category_slug: "islamic-values",
      author: "Academic Council",
      excerpt: "How Spectrum International School harmonizes Cambridge academic rigor with comprehensive Islamic studies and Tahfeezul Quran.",
      content: "At Spectrum International School, we believe true education enriches both the intellect and the soul. Our dual-curriculum framework combines Pearson Edexcel and Cambridge standards with rigorous Islamic values, Quranic recitation, and character-building (Tarbiyah). Students do not have to choose between worldly academic excellence and their spiritual heritage.",
      cover_image: "/assets/IMG_9469.JPG.jpeg",
      is_published: 1,
      published_at: "2026-10-15"
    },
    {
      id: 2,
      slug: "why-early-stem-in-primary-years",
      title: "Why Experiential STEM in Primary Years Sets Lifelong Thinkers",
      category_name: "Academic Excellence",
      category_slug: "academic-excellence",
      author: "Head of Science Dept",
      excerpt: "Engaging young minds in hands-on laboratories and inquiry-driven science sets the foundation for analytical leadership.",
      content: "In our state-of-the-art science laboratories and ICT suites, young learners explore hypotheses, conduct safe chemistry and physics demonstrations, and build robotics models. Research proves that tactile inquiry during formative school years cements neural pathways for lifelong problem-solving.",
      cover_image: "/assets/IMG_9437.JPG.jpeg",
      is_published: 1,
      published_at: "2026-11-01"
    },
    {
      id: 3,
      slug: "building-champions-through-athletics",
      title: "Building Resilience and Sportsmanship on the Field",
      category_name: "Campus Life & Activities",
      category_slug: "campus-life",
      author: "Physical Education Lead",
      excerpt: "Physical education at SIS is more than fitness—it teaches strategic thinking, teamwork, perseverance, and ethical leadership.",
      content: "Through organized sports leagues, athletics meets, martial arts, and badminton tournaments, our students cultivate stamina and a deep sense of fair play. Our students understand that falling and rising again on the sports field mirrors the perseverance required in adult life.",
      cover_image: "/assets/IMG_0413.JPG.jpeg",
      is_published: 1,
      published_at: "2026-11-10"
    }
  ];
}
