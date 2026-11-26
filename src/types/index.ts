export interface SiteSettings {
  admissions_enabled: string;
  admission_popup_title: string;
  admission_popup_content: string;
  admission_popup_image: string;
  admission_popup_button_text: string;
  admission_popup_button_url: string;
  hero_video_url?: string;
  hero_poster_url: string;
  school_address: string;
  school_phone_1: string;
  school_phone_2: string;
  school_tel: string;
  school_email: string;
  payment_hours: string;
  student_count: string;
  teacher_count: string;
  campus_count: string;
  established_year: string;
  social_facebook?: string;
  social_youtube?: string;
  social_linkedin?: string;
}

export interface Notice {
  id: number;
  title: string;
  category_name?: string;
  category_slug?: string;
  file_url?: string | null;
  content: string;
  publish_date: string;
  is_active: number;
  session_id?: number | null;
}

export interface EventItem {
  id: number;
  title: string;
  category?: string;
  event_date: string;
  event_time: string;
  location: string;
  gallery_album_id?: number | null;
  excerpt: string;
  content: string;
  image_url: string;
  images?: string[];
  is_featured: number;
  is_published?: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category_name?: string;
  category_slug?: string;
  author: string;
  excerpt: string;
  content: string;
  cover_image: string;
  is_published: number;
  published_at: string;
}

export interface GalleryItem {
  id: number;
  album_id?: number | null;
  album_title?: string;
  title: string;
  category: string;
  image_url: string;
}

export interface GalleryAlbum {
  id: number;
  title: string;
  slug: string;
  description?: string;
  cover_image: string;
  image_count?: number;
}

export interface StaffMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  team_type: 'academic' | 'admin' | 'support' | 'non-academic';
  qualifications?: string;
  experience?: string;
  bio?: string;
  photo_url: string;
  phone?: string;
  email?: string;
  sort_order?: number;
}

export interface CommitteeMember {
  id: number;
  name: string;
  designation: string;
  committee_type: 'management' | 'advisor' | 'sharia';
  photo_url: string;
  bio?: string;
  sort_order?: number;
}

export interface CareerItem {
  id: number;
  title: string;
  department: string;
  job_type: string;
  deadline: string;
  requirements: string;
  responsibilities: string;
  is_active: number;
}

export interface JobApplication {
  id: number;
  career_id?: number | null;
  job_title: string;
  applicant_name: string;
  email: string;
  phone: string;
  linkedin?: string;
  cover_note?: string;
  resume_path?: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  created_at: string;
}

export interface AcademicSession {
  id: number;
  name: string;
  session_type: 'june' | 'january';
  start_date: string;
  end_date: string;
  status: 'active' | 'upcoming' | 'completed' | 'archived';
  is_current: number;
  description?: string;
}

export interface FacilityItem {
  id: number;
  category: 'lab' | 'club' | 'eca';
  subcategory: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  gallery_images?: string[];
  sort_order?: number;
  is_published: number;
}

export interface PageSection {
  id?: number;
  page_id?: number;
  page_slug?: string;
  section_key: string;
  title?: string;
  subtitle?: string;
  content?: string;
  image_url?: string;
  extra_json?: any;
  sort_order?: number;
  is_published?: number;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  is_read: number;
  created_at: string;
}

export interface AppointmentSubmission {
  id: number;
  parent_name: string;
  student_name: string;
  student_class: string;
  email: string;
  phone: string;
  preferred_date: string;
  reason: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
  created_at: string;
}

export interface FeedbackSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  is_reviewed: number;
  created_at: string;
}
