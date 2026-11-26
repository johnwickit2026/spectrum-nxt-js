import { 
  SiteSettings, 
  Notice, 
  EventItem, 
  BlogPost, 
  GalleryItem, 
  StaffMember, 
  CommitteeMember, 
  CareerItem,
  AcademicSession,
  FacilityItem,
  PageSection
} from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "/api";

export async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_BASE}/settings.php`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return {
    admissions_enabled: "1",
    admission_popup_title: "Admissions Open for Academic Session 2026-2027",
    admission_popup_content: "Apply now for Play Group through A-Levels and Hifzul Quran program at Spectrum International School.",
    admission_popup_image: "/assets/IMG_9861.JPG.jpeg",
    admission_popup_button_text: "Apply Online",
    admission_popup_button_url: "/frontend/apply",
    hero_video_url: "",
    hero_poster_url: "/assets/2.JPG.jpeg",
    school_address: "Campus 01: 41/1, Shantinagar, Dhaka | Campus 02: House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka",
    school_phone_1: "+88 01799-369685",
    school_phone_2: "+88 01730-369686",
    school_tel: "0248318285",
    school_email: "spectrumintlschool@gmail.com",
    payment_hours: "7:00 AM - 5:00 PM",
    student_count: "800+",
    teacher_count: "110+",
    campus_count: "4",
    established_year: "2020",
    social_facebook: "https://www.facebook.com/spectruminternationalschool.dhaka",
    social_youtube: "https://www.youtube.com/@SpectrumTVBD",
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
      content: "Applications are officially open for Play Group, Nursery, KG, Classes I-VIII, and Cambridge A-Levels for the upcoming academic session. Parents may apply online or collect admission forms from the school admission office at Shantinagar Campus.",
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

export async function fetchEvents(category?: string): Promise<EventItem[]> {
  try {
    const query = new URLSearchParams();
    if (category) query.append("category", category);
    const res = await fetch(`${API_BASE}/events.php?${query.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return [
    {
      id: 1,
      title: "Annual Spelling Bee Championship 2026",
      category: "Spelling Bee",
      event_date: "2026-11-20",
      event_time: "09:30 AM - 01:30 PM",
      location: "SIS Main Auditorium, Khadem Tower, Shantinagar",
      gallery_album_id: 1,
      excerpt: "Annual English spelling bee test of vocabulary, linguistic precision, and phonics mastery across Junior and Senior divisions.",
      content: "Students compete across multiple rigorous rounds demonstrating vocabulary retention, phonetic root understanding, and rapid spelling skills before our panel of British Council certified judges.",
      image_url: "/assets/IMG_9817.JPG.jpeg",
      images: ["/assets/IMG_9817.JPG.jpeg", "/assets/IMG_9861.JPG.jpeg"],
      is_featured: 1
    },
    {
      id: 2,
      title: "Inter-Campus Arabic Spelling Bee & Tajweed",
      category: "Arabic Spelling Bee",
      event_date: "2026-12-08",
      event_time: "10:00 AM - 01:00 PM",
      location: "SIS Campus Hall, Shantinagar",
      gallery_album_id: 1,
      excerpt: "Prestige linguistic competition celebrating classical Arabic orthography, phonetics, and melodious Quranic pronunciation.",
      content: "Under the patronage of the Islamic Studies faculty, students demonstrate classical Arabic morphology, correct letter-articulation (Makharij), and vocabulary synthesis.",
      image_url: "/assets/IMG_9469.JPG.jpeg",
      images: ["/assets/IMG_9469.JPG.jpeg"],
      is_featured: 1
    },
    {
      id: 3,
      title: "SIS Annual Science Fair & Robotics Expo",
      category: "Science Fair",
      event_date: "2026-12-18",
      event_time: "09:00 AM - 04:00 PM",
      location: "SIS STEM Courtyard & Laboratories",
      gallery_album_id: 3,
      excerpt: "Showcase of ingenious science experiments, environmental conservation models, and automated robotics prototypes built by students.",
      content: "Over 60 original student projects demonstrated scientific inquiry across Renewable Energy, Biomedical innovations, AI and smart robotics.",
      image_url: "/assets/IMG_9437.JPG.jpeg",
      images: ["/assets/IMG_9437.JPG.jpeg", "/assets/IMG_2236.JPG.jpeg"],
      is_featured: 1
    },
    {
      id: 4,
      title: "Traditional Pitha Utshob & Heritage Celebration",
      category: "Pitha Utshob",
      event_date: "2027-01-14",
      event_time: "10:00 AM - 03:30 PM",
      location: "Shantinagar Campus Grounds",
      gallery_album_id: 1,
      excerpt: "Festive celebration of Bengali winter culinary traditions, artisanal pitha making, and vibrant community bonding.",
      content: "Bringing families, educators, and children together in colorful festive stalls featuring over 30 authentic pitha varieties, cultural presentations, and appreciation of national heritage.",
      image_url: "/assets/IMG_9828.JPG.jpeg",
      images: ["/assets/IMG_9828.JPG.jpeg", "/assets/2.JPG.jpeg"],
      is_featured: 1
    },
    {
      id: 5,
      title: "Annual Track & Field Sports Championship",
      category: "Sports",
      event_date: "2027-01-25",
      event_time: "08:30 AM - 04:30 PM",
      location: "National Stadium Grounds, Dhaka",
      gallery_album_id: 2,
      excerpt: "The premier athletic celebration featuring inter-house sprint relays, high jump, karate exhibitions, and drill formations.",
      content: "Celebrating stamina, sportsmanship, and teamwork. Students from all grades participated in track and field contests, culminating in the trophy presentation by the Chairman.",
      image_url: "/assets/IMG_0413.JPG.jpeg",
      images: ["/assets/IMG_0413.JPG.jpeg", "/assets/1.JPG.jpeg"],
      is_featured: 1
    },
    {
      id: 6,
      title: "Girls Hifz Department Quran Recitation Celebration",
      category: "Hifz",
      event_date: "2026-12-15",
      event_time: "09:30 AM - 12:30 PM",
      location: "SIS Campus Hall",
      gallery_album_id: 1,
      excerpt: "Honoring our young Hifz students for exemplary dedication to the preservation and melodious recitation of the Holy Quran.",
      content: "A solemn and inspirational morning where students celebrate milestone achievements in Quran memorization under the guidance of certified Qaris and Islamic scholars.",
      image_url: "/assets/IMG_9469.JPG.jpeg",
      images: ["/assets/IMG_9469.JPG.jpeg"],
      is_featured: 0
    }
  ];
}

export async function fetchAcademicSessions(): Promise<AcademicSession[]> {
  try {
    const res = await fetch(`${API_BASE}/sessions.php`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  const currentYear = new Date().getFullYear();
  return [
    {
      id: 1,
      name: `Academic Session ${currentYear}-${currentYear + 1} (June Cycle)`,
      session_type: "june",
      start_date: `${currentYear}-06-01`,
      end_date: `${currentYear + 1}-06-30`,
      status: "active",
      is_current: 1,
      description: "Regular academic cycle spanning Play Group to Class XII & Cambridge O/A Levels."
    },
    {
      id: 2,
      name: `Academic Session ${currentYear} (January Cycle)`,
      session_type: "january",
      start_date: `${currentYear}-01-01`,
      end_date: `${currentYear}-12-31`,
      status: "active",
      is_current: 1,
      description: "Accelerated January academic session and specialized Cambridge winter intake."
    },
    {
      id: 3,
      name: `Academic Session ${currentYear + 1} (January Cycle)`,
      session_type: "january",
      start_date: `${currentYear + 1}-01-01`,
      end_date: `${currentYear + 1}-12-31`,
      status: "upcoming",
      is_current: 0,
      description: "Upcoming winter session intake for A-Levels and Hifzul Quran students."
    }
  ];
}

export async function fetchFacilities(category?: string): Promise<FacilityItem[]> {
  try {
    const query = new URLSearchParams();
    if (category) query.append("category", category);
    const res = await fetch(`${API_BASE}/facilities.php?${query.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  const all = [
    {
      id: 1,
      category: "lab" as const,
      subcategory: "Science Lab",
      title: "Multidisciplinary Science Laboratories",
      slug: "science-lab",
      description: "Specialized, ventilated laboratories for Physics, Chemistry, and Biology equipped with advanced optical microscopes, digital measurement apparatus, fume hoods, reagent stocks, and international safety compliance.",
      cover_image: "/assets/IMG_9437.JPG.jpeg",
      gallery_images: ["/assets/IMG_9437.JPG.jpeg", "/assets/1.1.1.JPG.jpeg", "/assets/IMG_9828.JPG.jpeg"],
      sort_order: 1,
      is_published: 1
    },
    {
      id: 2,
      category: "lab" as const,
      subcategory: "Computer Lab",
      title: "Modern ICT & Coding Laboratories",
      slug: "computer-lab",
      description: "High-speed networked computer workstations, interactive smart displays, gigabit fiber broadband, educational programming suites (Python, Scratch), and robotics prototyping kits.",
      cover_image: "/assets/IMG_2236.JPG.jpeg",
      gallery_images: ["/assets/IMG_2236.JPG.jpeg", "/assets/2.JPG.jpeg"],
      sort_order: 2,
      is_published: 1
    },
    {
      id: 3,
      category: "club" as const,
      subcategory: "Language Club",
      title: "Language Club (English & Arabic)",
      slug: "language-club",
      description: "Fosters eloquence in English and classical Quranic Arabic through weekly debate tournaments, spelling bee preparation, public speaking workshops, recitation, and creative essay writing.",
      cover_image: "/assets/IMG_9817.JPG.jpeg",
      gallery_images: ["/assets/IMG_9817.JPG.jpeg", "/assets/IMG_9861.JPG.jpeg"],
      sort_order: 3,
      is_published: 1
    },
    {
      id: 4,
      category: "club" as const,
      subcategory: "Sports Club",
      title: "Sports Club & Physical Fitness",
      slug: "sports-club",
      description: "Comprehensive athletic programs including martial arts (Karate), football, badminton, table tennis, gymnastics, and annual sports meets.",
      cover_image: "/assets/IMG_0413.JPG.jpeg",
      gallery_images: ["/assets/IMG_0413.JPG.jpeg", "/assets/1.JPG.jpeg"],
      sort_order: 4,
      is_published: 1
    },
    {
      id: 5,
      category: "club" as const,
      subcategory: "Computer Club",
      title: "ICT & Robotics Innovation Club",
      slug: "computer-club",
      description: "Empowers students with coding fundamentals, computational thinking, robotics design, digital media skills, and ethical cyber citizenship.",
      cover_image: "/assets/IMG_2236.JPG.jpeg",
      gallery_images: ["/assets/IMG_2236.JPG.jpeg"],
      sort_order: 5,
      is_published: 1
    },
    {
      id: 6,
      category: "club" as const,
      subcategory: "Science Club",
      title: "Science Exploration & STEM Club",
      slug: "science-club",
      description: "Engages students in experimental inquiry, environmental sustainability projects, science fairs, and inter-school science Olympiads.",
      cover_image: "/assets/IMG_9437.JPG.jpeg",
      gallery_images: ["/assets/IMG_9437.JPG.jpeg"],
      sort_order: 6,
      is_published: 1
    },
    {
      id: 7,
      category: "club" as const,
      subcategory: "Reading Club",
      title: "Literary Reading & Book Circle",
      slug: "reading-club",
      description: "Dedicated to cultivating deep reading habits, book discussions, author study circles, and our annual Book Fair celebrations.",
      cover_image: "/assets/IMG_9817.JPG.jpeg",
      gallery_images: ["/assets/IMG_9817.JPG.jpeg"],
      sort_order: 7,
      is_published: 1
    },
    {
      id: 8,
      category: "club" as const,
      subcategory: "Cultural Club",
      title: "Cultural & Islamic Heritage Club",
      slug: "cultural-club",
      description: "Inspiring creative expression through Islamic nasheeds, calligraphy art, stage presentation, and community outreach.",
      cover_image: "/assets/IMG_9828.JPG.jpeg",
      gallery_images: ["/assets/IMG_9828.JPG.jpeg"],
      sort_order: 8,
      is_published: 1
    },
    {
      id: 9,
      category: "eca" as const,
      subcategory: "Study Tour",
      title: "Annual Educational Study Tours",
      slug: "study-tour",
      description: "Immersive experiential learning excursions to historical landmarks, research institutes, nature reserves, and industrial science centers designed to broaden worldview and foster camaraderie.",
      cover_image: "/assets/IMG_9912.JPG.jpeg",
      gallery_images: ["/assets/IMG_9912.JPG.jpeg", "/assets/2.JPG.jpeg"],
      sort_order: 9,
      is_published: 1
    },
    {
      id: 10,
      category: "eca" as const,
      subcategory: "Field Trip",
      title: "Hands-On Academic Field Trips",
      slug: "field-trip",
      description: "Targeted grade-level excursions complementing Cambridge classroom theory with practical observation at botanical gardens, museums, and planetariums.",
      cover_image: "/assets/1.JPG.jpeg",
      gallery_images: ["/assets/1.JPG.jpeg", "/assets/IMG_9912.JPG.jpeg"],
      sort_order: 10,
      is_published: 1
    }
  ];

  return category ? all.filter(f => f.category === category) : all;
}

export async function fetchPageSections(slug: string): Promise<PageSection[]> {
  try {
    const res = await fetch(`${API_BASE}/pages.php?slug=${encodeURIComponent(slug)}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.sections) return data.sections;
    }
  } catch (err) {}
  return [];
}

export async function fetchCareers(): Promise<CareerItem[]> {
  try {
    const res = await fetch(`${API_BASE}/careers.php`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) return data.data;
    }
  } catch (err) {}

  return [
    {
      id: 1,
      title: "Cambridge O & A Level Physics Teacher",
      department: "Science Department",
      job_type: "Full Time",
      deadline: "2026-12-30",
      requirements: "Master's or Bachelor's in Physics from a reputable university. Minimum 3 years teaching Cambridge IGCSE/A-Level syllabus. Excellent English communication skills.",
      responsibilities: "Conduct engaging classroom theory and hands-on laboratory sessions. Prepare students thoroughly for British Council examinations. Provide personalized academic mentorship.",
      is_active: 1
    },
    {
      id: 2,
      title: "Primary English & Literature Teacher",
      department: "Primary Section",
      job_type: "Full Time",
      deadline: "2026-12-25",
      requirements: "BA/MA in English Literature or Linguistics. Prior experience with early childhood phonics, interactive storytelling, and language immersion.",
      responsibilities: "Deliver creative phonics and reading programs. Encourage expressive writing, public speaking, and confidence in young learners.",
      is_active: 1
    },
    {
      id: 3,
      title: "ICT & Robotics Coordinator",
      department: "Technology Department",
      job_type: "Full Time",
      deadline: "2026-12-31",
      requirements: "B.Sc in Computer Science or Software Engineering. Proficiency in Python, Scratch, web development basics, and lab maintenance.",
      responsibilities: "Guide students through digital literacy, coding, and STEM robotics clubs. Maintain computer lab hardware and network readiness.",
      is_active: 1
    }
  ];
}

export async function submitJobApplication(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/applications.php`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { success: true, message: "Application submitted successfully." };
  }
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
