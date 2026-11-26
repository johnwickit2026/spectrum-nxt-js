"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
import { ASSETS } from "@/lib/assets";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Moon, 
  Sun, 
  X, 
  Mail, 
  GraduationCap, 
  Award, 
  Briefcase, 
  BookOpen, 
  Phone,
  ShieldCheck
} from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Lead Teachers" | "Quran & Islamic" | "Faculty & Teachers" | "Instructors";
  department: string;
  email: string;
  qualifications: string;
  experience: string;
  bio: string;
  image: string;
}

const academicTeamData: Teacher[] = [
  // Leadership & Coordinators
  { 
    id: "SIS-FAC-001",
    name: "Sharmin Akter Eva", 
    role: "Vice Principal & Academic Head", 
    category: "Leadership", 
    department: "Academic Leadership & Coordination",
    email: "sharmin.eva@spectrumintlschool.com",
    qualifications: "MA in English Literature, Cambridge & Edexcel Educational Leadership Diploma",
    experience: "12+ Years in British Curriculum Administration & Teacher Training",
    bio: "Oversees instructional standards, Cambridge international curriculum alignment, faculty development, and pastoral care across all campuses.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-002",
    name: "Md. Fahim Faysal", 
    role: "Assistant Coordinator", 
    category: "Leadership", 
    department: "Academic Coordination Desk",
    email: "fahim.faysal@spectrumintlschool.com",
    qualifications: "M.Sc in Applied Mathematics, Certified Cambridge Stage Coordinator",
    experience: "7+ Years in Academic Operations & Examinations Coordination",
    bio: "Coordinates middle school timetabling, student attendance tracking, and Cambridge mock exam administration.",
    image: ASSETS.people.teachersStaff 
  },
  { 
    id: "SIS-FAC-003",
    name: "Nowrin Sultana", 
    role: "Assistant Coordinator", 
    category: "Leadership", 
    department: "Academic Coordination Desk",
    email: "nowrin.sultana@spectrumintlschool.com",
    qualifications: "BA (Hons), MA in English, Cambridge Primary Stage Training",
    experience: "6+ Years in Early Years & Primary Curriculum Coordination",
    bio: "Specializes in early childhood phonics alignment, parental communication, and primary stage progress monitoring.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-004",
    name: "Shaykh Mahmudul Hasan", 
    role: "Scholar & Head of Arabic", 
    category: "Leadership", 
    department: "Arabic & Islamic Studies",
    email: "mahmudul.hasan@spectrumintlschool.com",
    qualifications: "Kamil Hadith & Classical Arabic Grammar, Certified Qari",
    experience: "14+ Years in Classical Quranic Arabic & Islamic Ethics",
    bio: "Guides Quranic Arabic morphology, Tajweed accuracy, and Islamic moral philosophy across all grade levels.",
    image: ASSETS.people.founderCeo 
  },
  { 
    id: "SIS-FAC-005",
    name: "Md. Ataullah", 
    role: "Teacher- Curriculum and Lang.", 
    category: "Leadership", 
    department: "Languages & Curriculum Planning",
    email: "ataullah@spectrumintlschool.com",
    qualifications: "MA in Applied Linguistics, British Council CELTA Certified",
    experience: "8+ Years in Second Language Acquisition & Curriculum Design",
    bio: "Directs English curriculum progression, public speaking contests, and student linguistic assessment rubrics.",
    image: ASSETS.people.teachersStaff 
  },

  // Lead Teachers & Preceptors
  { 
    id: "SIS-FAC-006",
    name: "Sumaiya Binta Shahid", 
    role: "Lead Teacher, Pre- Section", 
    category: "Lead Teachers", 
    department: "Early Childhood & Pre-Primary",
    email: "sumaiya.shahid@spectrumintlschool.com",
    qualifications: "B.Ed in Early Childhood Care & Education, Montessori Certified",
    experience: "8+ Years in Play Group, Nursery, and Phonics Instruction",
    bio: "Leads pre-primary stage educators with sensory learning modules, motor skill cultivation, and positive behavioral reinforcement.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-007",
    name: "Mahmudul Hasan", 
    role: "Lead Teacher- Al Quran and Religious Department & Preceptor- Hifz", 
    category: "Lead Teachers", 
    department: "Hifz & Religious Department",
    email: "m.hasan.quran@spectrumintlschool.com",
    qualifications: "Hafez-e-Quran, Sanad in Riwayah Hafs, Kamil in Islamic Studies",
    experience: "11+ Years in Hifz Memorization & Tarbiyah Preceptorship",
    bio: "Serves as Preceptor for residential and day Hifz students, guiding personalized daily Sabaq, Sabqi, and Manzil revisions.",
    image: ASSETS.activities.hifzDepartment 
  },
  { 
    id: "SIS-FAC-008",
    name: "Zakir Bin Mostak Azhari", 
    role: "Lead Teacher- Al Quran and Religious Department", 
    category: "Lead Teachers", 
    department: "Al Quran Department",
    email: "zakir.azhari@spectrumintlschool.com",
    qualifications: "Al-Azhar University Graduate, Kamil in Fiqh & Hadith",
    experience: "9+ Years in Islamic Theology & Quran Recitation",
    bio: "Leads upper school religious coursework, inter-campus Arabic debates, and spiritual ethics seminars.",
    image: ASSETS.activities.hifzDepartment 
  },
  { 
    id: "SIS-FAC-009",
    name: "Ashraf Uddin Munna", 
    role: "Lead Teacher- Al Quran And Religious Department, Key Stage- 1", 
    category: "Lead Teachers", 
    department: "Al Quran Key Stage-1",
    email: "ashraf.munna@spectrumintlschool.com",
    qualifications: "Hafez-e-Quran, Master of Islamic Studies",
    experience: "7+ Years in Primary Stage Quran Pedagogy",
    bio: "Nurtures foundational Quranic love, basic Tajweed rules, and daily Sunnah manners in young learners.",
    image: ASSETS.activities.hifzDepartment 
  },
  { 
    id: "SIS-FAC-010",
    name: "Rifatul Zannat", 
    role: "Lead Teacher & Preceptor Grade- V", 
    category: "Lead Teachers", 
    department: "Primary Section Grade V",
    email: "rifatul.zannat@spectrumintlschool.com",
    qualifications: "B.Sc (Hons), M.Sc in Mathematics, Edexcel Primary Training",
    experience: "8+ Years in Upper Primary Mentorship & Preceptorship",
    bio: "Preceptor for Grade V, preparing students academically and emotionally for the secondary transition.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-011",
    name: "Abeda Sultana Happy", 
    role: "Lead Teacher and Preceptor Grade- I", 
    category: "Lead Teachers", 
    department: "Primary Section Grade I",
    email: "abeda.happy@spectrumintlschool.com",
    qualifications: "BA (Hons), MA in English Literature",
    experience: "7+ Years in Key Stage 1 Preceptorship",
    bio: "Coordinates Grade I instructional integration, phonics progression, and compassionate classroom routines.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-012",
    name: "Md. Saiful Bari", 
    role: "Lead Teacher", 
    category: "Lead Teachers", 
    department: "General Sciences & Mathematics",
    email: "saiful.bari@spectrumintlschool.com",
    qualifications: "M.Sc in Physics, Cambridge Lower Secondary Trained",
    experience: "10+ Years in Laboratory Science & Problem-Based Learning",
    bio: "Leads experimental inquiry modules in physics and junior mathematics Olympiad coaching.",
    image: ASSETS.people.teachersStaff 
  },
  { 
    id: "SIS-FAC-013",
    name: "Noshin Taranoom", 
    role: "Lead Teacher & Preceptor Grade - III", 
    category: "Lead Teachers", 
    department: "Primary Section Grade III",
    email: "noshin.taranoom@spectrumintlschool.com",
    qualifications: "B.Sc (Hons) in Environmental Science, B.Ed",
    experience: "6+ Years in Elementary Inquiry & Stage Mentoring",
    bio: "Guides Grade III students through hands-on science projects, creative writing, and moral character studies.",
    image: ASSETS.people.faculty 
  },
  { 
    id: "SIS-FAC-014",
    name: "Nuzhat Ashraf Mahsa", 
    role: "Lead Teacher and Preceptor: G-II", 
    category: "Lead Teachers", 
    department: "Primary Section Grade II",
    email: "nuzhat.mahsa@spectrumintlschool.com",
    qualifications: "MA in English Language Teaching (ELT)",
    experience: "6+ Years in Early Primary Literacy & Preceptorship",
    bio: "Focuses on interactive reading clubs, vocabulary immersion, and holistic social development for Grade II learners.",
    image: ASSETS.people.faculty 
  },

  // Al Quran & Religious Department / Hifz Faculty
  { id: "SIS-FAC-015", name: "Khaled Saifullah", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "khaled.saifullah@spectrumintlschool.com", qualifications: "Certified Qari, Kamil Hadith", experience: "5+ Years", bio: "Instructs students in correct Arabic letter articulation (Makharij) and melodious Tajweed recitation.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-016", name: "Yousuf Jamil", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "yousuf.jamil@spectrumintlschool.com", qualifications: "Hafez-e-Quran, Sanad in Tajweed", experience: "6+ Years", bio: "Specializes in rhythmic Quran recitation and early Tajweed habituation.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-017", name: "Md. Shihab Uddin", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "shihab.uddin@spectrumintlschool.com", qualifications: "Master of Islamic Studies", experience: "4+ Years", bio: "Guides primary and middle school classes in Quranic memorization and moral stories.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-018", name: "Md. Rasel Ahmed", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "rasel.ahmed@spectrumintlschool.com", qualifications: "Hafez-e-Quran, Kamil Tafseer", experience: "7+ Years", bio: "Coaches students in Quranic Arabic vocabulary and daily Surah review.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-019", name: "Md. Saiful Islam (Maolana)", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "saiful.maolana@spectrumintlschool.com", qualifications: "Maolana, Certified Islamic Preacher", experience: "10+ Years", bio: "Oversees Islamic cultural activities, Friday Jummah khutbahs, and moral Tarbiyah.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-020", name: "Omar Farok", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "omar.farok@spectrumintlschool.com", qualifications: "Hafez-e-Quran", experience: "5+ Years", bio: "Specializes in individual student recitation guidance and error correction.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-021", name: "Md. Mushfikur Rahman", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "mushfikur.rahman@spectrumintlschool.com", qualifications: "Bachelor in Islamic Studies", experience: "4+ Years", bio: "Teaches Islamic history, Prophetic biographies (Seerah), and Quranic basics.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-022", name: "Mahbubur Rahman Bhuiyan", role: "Teacher- Hifz", category: "Quran & Islamic", department: "Hifz Department", email: "mahbubur.bhuiyan@spectrumintlschool.com", qualifications: "Hafez-e-Quran, Hifz Section Mentor", experience: "9+ Years", bio: "Dedicated residential Hifz teacher supervising daily Quran memorization quotas.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-023", name: "Mufti Zahid Hasan", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "mufti.zahid@spectrumintlschool.com", qualifications: "Mufti, Certified Islamic Scholar", experience: "8+ Years", bio: "Provides theological counseling and teaches advanced Islamic jurisprudential principles.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-024", name: "Abul Hayat Muhammad Yahya", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "yahya.quran@spectrumintlschool.com", qualifications: "Kamil in Islamic Studies", experience: "6+ Years", bio: "Teaches classical Quranic recitation and Arabic phonetic roots.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-025", name: "Jawadul Haque", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "jawadul.haque@spectrumintlschool.com", qualifications: "Hafez-e-Quran", experience: "4+ Years", bio: "Guides junior boys in Quran memorization and melodic recitation.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-026", name: "Abu Jar Gifari Talukdar", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "abujar.talukdar@spectrumintlschool.com", qualifications: "Master in Arabic Literature", experience: "5+ Years", bio: "Coordinates Arabic spelling bee practice and daily Du'a recitations.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-027", name: "Md. Saidor Rahman", role: "Teacher- Hifz", category: "Quran & Islamic", department: "Hifz Department", email: "saidor.rahman@spectrumintlschool.com", qualifications: "Hafez-e-Quran", experience: "7+ Years", bio: "Instructs senior Hifz students during accelerated memorization sessions.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-028", name: "Md. Fayzur Rahman", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "fayzur.rahman@spectrumintlschool.com", qualifications: "Kamil Hadith", experience: "6+ Years", bio: "Instructs students in Quranic recitation, prayer etiquettes, and moral discipline.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-029", name: "Ariful Islam (Billah)", role: "Teacher- Al Quran", category: "Quran & Islamic", department: "Al Quran Faculty", email: "ariful.billah@spectrumintlschool.com", qualifications: "Hafez-e-Quran", experience: "4+ Years", bio: "Mentors young students in foundational Noorani Qaida and Juz Amma.", image: ASSETS.activities.hifzDepartment },
  { id: "SIS-FAC-030", name: "Saiful Islam (Hafez)", role: "Teacher- Hifz", category: "Quran & Islamic", department: "Hifz Department", email: "saiful.hafez@spectrumintlschool.com", qualifications: "Hafez-e-Quran", experience: "8+ Years", bio: "Conducts intensive Tajweed and Manzil revision sessions for Hifz department learners.", image: ASSETS.activities.hifzDepartment },

  // Faculty & Teachers (Cambridge & Edexcel Academics)
  { id: "SIS-FAC-031", name: "Adnan Mustafa Sami", role: "Teacher", category: "Faculty & Teachers", department: "Mathematics & Computing", email: "adnan.sami@spectrumintlschool.com", qualifications: "B.Sc in Computer Science & Engineering", experience: "5+ Years", bio: "Inspires students with analytical problem-solving, Scratch coding, and Cambridge math.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-032", name: "Mahfuza Yesmin Khan Tanni", role: "Teacher", category: "Faculty & Teachers", department: "English & Social Studies", email: "mahfuza.tanni@spectrumintlschool.com", qualifications: "MA in English Literature", experience: "6+ Years", bio: "Nurtures creative writing, grammar precision, and public speaking in middle school.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-033", name: "Tanea Kamal", role: "Teacher", category: "Faculty & Teachers", department: "General Sciences", email: "tanea.kamal@spectrumintlschool.com", qualifications: "M.Sc in Chemistry", experience: "5+ Years", bio: "Conducts practical laboratory experiments and fosters scientific inquiry in junior grades.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-034", name: "Asaduzzaman Asad", role: "Teacher", category: "Faculty & Teachers", department: "Mathematics", email: "asaduzzaman@spectrumintlschool.com", qualifications: "M.Sc in Pure Mathematics", experience: "7+ Years", bio: "Develops conceptual mathematical mastery and prepares candidates for Cambridge assessments.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-035", name: "Sanjin Sultana", role: "Teacher", category: "Faculty & Teachers", department: "Primary Academics", email: "sanjin.sultana@spectrumintlschool.com", qualifications: "BA (Hons) in English", experience: "4+ Years", bio: "Focuses on interactive phonics, story circles, and supportive classroom dialogue.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-036", name: "Fariha Newaz", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "fariha.newaz@spectrumintlschool.com", qualifications: "B.Sc in Biochemistry", experience: "4+ Years", bio: "Inspires primary students with curious observations about the living world and nature.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-037", name: "Tahmina Rahman Tanjin", role: "Teacher", category: "Faculty & Teachers", department: "English Literature", email: "tahmina.tanjin@spectrumintlschool.com", qualifications: "MA in English", experience: "6+ Years", bio: "Mentors debate participants and teaches expressive English comprehension and drama.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-038", name: "Afia Sumya", role: "Teacher", category: "Faculty & Teachers", department: "Early Years", email: "afia.sumya@spectrumintlschool.com", qualifications: "B.Ed in Primary Education", experience: "3+ Years", bio: "Builds a safe, encouraging classroom where early learners develop confidence and joy.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-039", name: "Mahea Farin Momo", role: "Teacher", category: "Faculty & Teachers", department: "General Studies", email: "mahea.momo@spectrumintlschool.com", qualifications: "B.Sc in Environmental Science", experience: "4+ Years", bio: "Coordinates green campus initiatives and environmental science inquiry projects.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-040", name: "Md. Aftab", role: "Teacher", category: "Faculty & Teachers", department: "Secondary Sciences", email: "md.aftab@spectrumintlschool.com", qualifications: "M.Sc in Physics", experience: "8+ Years", bio: "Prepares senior learners for British Council Cambridge IGCSE and A-Level physics.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-041", name: "Md. Kawsar Ahmad", role: "Teacher", category: "Faculty & Teachers", department: "Mathematics", email: "kawsar.ahmad@spectrumintlschool.com", qualifications: "B.Sc in Mathematics & Statistics", experience: "5+ Years", bio: "Demystifies algebra and geometry with visual models and real-world logic problems.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-042", name: "Jabunnasa Moushumi", role: "Teacher", category: "Faculty & Teachers", department: "Language & Literature", email: "jabunnasa@spectrumintlschool.com", qualifications: "MA in Bengali & Cultural Studies", experience: "7+ Years", bio: "Teaches Bengali language appreciation, creative poetry, and national history.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-043", name: "Md. Ashraf Ullah", role: "Teacher", category: "Faculty & Teachers", department: "Social Sciences & History", email: "ashraf.ullah@spectrumintlschool.com", qualifications: "Master in World History", experience: "6+ Years", bio: "Guides students through critical world historical milestones, geography, and civic leadership.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-044", name: "Mohammad Mohiuddin Sarker", role: "Teacher", category: "Faculty & Teachers", department: "Commerce & Economics", email: "mohiuddin.sarker@spectrumintlschool.com", qualifications: "M.Com in Accounting", experience: "9+ Years", bio: "Teaches O & A Level business studies, accounting principles, and entrepreneurship.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-045", name: "Sumaiya Akter", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "sumaiya.akter@spectrumintlschool.com", qualifications: "BA in Education", experience: "4+ Years", bio: "Creates engaging early numeracy games and guided reading exercises.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-046", name: "Md Shahadat Hossain (Shanto)", role: "Teacher- Art and Craft", category: "Faculty & Teachers", department: "Fine Arts & Crafts", email: "shahadat.art@spectrumintlschool.com", qualifications: "BFA in Fine Arts, Charukala", experience: "6+ Years", bio: "Nurtures creative visualization, water color painting, calligraphy, and exhibition crafts.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-047", name: "Sayma Binte Bashar", role: "Teacher Assistant", category: "Faculty & Teachers", department: "Primary Support", email: "sayma.bashar@spectrumintlschool.com", qualifications: "BA in English", experience: "3+ Years", bio: "Provides targeted remedial instruction and personalized support during class routines.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-048", name: "Samia Nushrat", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "samia.nushrat@spectrumintlschool.com", qualifications: "B.Sc in Psychology", experience: "4+ Years", bio: "Applies developmental psychology principles to create inclusive, empathetic learning spaces.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-049", name: "Md. Sagir Ahammad", role: "Teacher", category: "Faculty & Teachers", department: "Physical Education & Sports", email: "sagir.ahammad@spectrumintlschool.com", qualifications: "B.P.Ed, Certified Athletics Coach", experience: "8+ Years", bio: "Directs inter-house athletics, fitness regimens, sprint training, and tournament safety.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-050", name: "Mashiyat Shahrin", role: "Teacher", category: "Faculty & Teachers", department: "Science Faculty", email: "mashiyat.shahrin@spectrumintlschool.com", qualifications: "B.Sc in Biotechnology", experience: "4+ Years", bio: "Leads cellular biology experiments and environmental awareness clubs.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-051", name: "Al- Mohosana Niru", role: "Teacher", category: "Faculty & Teachers", department: "Language Department", email: "mohosana.niru@spectrumintlschool.com", qualifications: "MA in Linguistics", experience: "5+ Years", bio: "Focuses on conversational fluency, spelling competitions, and phonics root learning.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-052", name: "Afrin Nahar", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "afrin.nahar@spectrumintlschool.com", qualifications: "B.Sc in Home Economics", experience: "4+ Years", bio: "Encourages positive social collaboration and joyful learning habits in young children.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-053", name: "Maliha Benta Feroz", role: "Teacher", category: "Faculty & Teachers", department: "Social Sciences", email: "maliha.feroz@spectrumintlschool.com", qualifications: "BSS in Sociology", experience: "3+ Years", bio: "Guides primary learners in civic responsibility, global cultures, and family values.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-054", name: "Niger Sultana", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "niger.sultana@spectrumintlschool.com", qualifications: "BA (Hons) in English", experience: "5+ Years", bio: "Coordinates primary reading logs, spelling bees, and daily recitation practice.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-055", name: "Hozaefa Bilkis Liza", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "hozaefa.liza@spectrumintlschool.com", qualifications: "B.Ed in Elementary Education", experience: "5+ Years", bio: "Focuses on child-centered active learning and positive behavioral development.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-056", name: "Sumaiya Meem", role: "Teacher", category: "Faculty & Teachers", department: "Early Childhood", email: "sumaiya.meem@spectrumintlschool.com", qualifications: "BA in Education", experience: "3+ Years", bio: "Inspires Nursery and Kindergarten learners with songs, sensory crafts, and storytelling.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-057", name: "Faysal Hossain Noman", role: "Teacher", category: "Faculty & Teachers", department: "Mathematics", email: "faysal.noman@spectrumintlschool.com", qualifications: "B.Sc in Civil Engineering", experience: "4+ Years", bio: "Teaches applied math, geometry, and spatial reasoning with engineering examples.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-058", name: "Atika Ashek", role: "Assistant Teacher and Pediatric Healthcare Staff", category: "Faculty & Teachers", department: "Pediatric Healthcare & Academic Support", email: "atika.ashek@spectrumintlschool.com", qualifications: "Diploma in Nursing & Child Healthcare, B.Sc", experience: "6+ Years", bio: "Oversees student campus wellness, medical checkups, and early childhood classroom support.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-059", name: "Tasmia Ahmed", role: "Teacher", category: "Faculty & Teachers", department: "English", email: "tasmia.ahmed@spectrumintlschool.com", qualifications: "MA in English Literature", experience: "4+ Years", bio: "Specializes in comprehension strategies, phonics development, and poetry reading.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-060", name: "Afroza Akter", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "afroza.akter@spectrumintlschool.com", qualifications: "BA in Education", experience: "4+ Years", bio: "Nurtures creative curiosity and polite social values in foundational classes.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-061", name: "Mohammad Khan Shamim", role: "Teacher", category: "Faculty & Teachers", department: "General Studies", email: "khan.shamim@spectrumintlschool.com", qualifications: "M.Sc in Applied Chemistry", experience: "7+ Years", bio: "Teaches middle school general science and assists in science fair project preparation.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-062", name: "Munia Khan", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "munia.khan@spectrumintlschool.com", qualifications: "BA in English", experience: "3+ Years", bio: "Encourages young learners with interactive vocabulary flashcards and phonics songs.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-063", name: "Rifat Sharmin", role: "Teacher", category: "Faculty & Teachers", department: "Primary Section", email: "rifat.sharmin@spectrumintlschool.com", qualifications: "B.Sc in Botany", experience: "4+ Years", bio: "Introduces elementary botany, plant life cycles, and nature appreciation.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-064", name: "Ayasha Siddika", role: "Teacher", category: "Faculty & Teachers", department: "Islamic Studies", email: "ayasha.siddika@spectrumintlschool.com", qualifications: "Kamil in Hadith & Islamic Studies", experience: "5+ Years", bio: "Teaches Islamic moral ethics (Akhlaq), daily Sunnah, and female student mentorship.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-065", name: "Md. Sumsul Arfin", role: "Teacher", category: "Faculty & Teachers", department: "Information Technology", email: "sumsul.arfin@spectrumintlschool.com", qualifications: "B.Sc in Computer Science", experience: "5+ Years", bio: "Instructs coding basics, typing speed, and digital citizenship in our computer labs.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-066", name: "Humayra Hasan", role: "Teacher", category: "Faculty & Teachers", department: "Early Years", email: "humayra.hasan@spectrumintlschool.com", qualifications: "B.Ed in Early Childhood", experience: "3+ Years", bio: "Builds a joyful, supportive foundation for young toddlers taking their first school steps.", image: ASSETS.people.faculty },
  { id: "SIS-FAC-067", name: "Rahimul Abedin Foysal", role: "Co-Teacher", category: "Faculty & Teachers", department: "Primary Support", email: "rahimul.foysal@spectrumintlschool.com", qualifications: "B.Sc in Mathematics", experience: "3+ Years", bio: "Assists lead teachers with small-group mathematics remediation and task review.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-068", name: "Mohammad Mahfuzur Rahman", role: "Co-Teacher", category: "Faculty & Teachers", department: "Academic Support", email: "mahfuzur.rahman@spectrumintlschool.com", qualifications: "BA in English", experience: "3+ Years", bio: "Supports classroom literacy stations, reading remediation, and homework clinics.", image: ASSETS.people.teachersStaff },

  // Instructors
  { id: "SIS-FAC-069", name: "Habibur Rahman", role: "Instructor", category: "Instructors", department: "Robotics & STEM Labs", email: "habibur.stem@spectrumintlschool.com", qualifications: "Diploma in Electrical & Robotics Engineering", experience: "5+ Years", bio: "Maintains STEM lab equipment, sensor circuits, and assists student robotics teams.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-070", name: "Muzahid Zaman", role: "Instructor", category: "Instructors", department: "ICT Lab Maintenance", email: "muzahid.ict@spectrumintlschool.com", qualifications: "Diploma in Information Technology", experience: "4+ Years", bio: "Maintains gigabit fiber workstations, audio-visual systems, and software readiness.", image: ASSETS.people.teachersStaff },
  { id: "SIS-FAC-071", name: "Ummay Rabeya Si Ul Moon Shammi", role: "Instructor", category: "Instructors", department: "Montessori & Creative Activities", email: "shammi.montessori@spectrumintlschool.com", qualifications: "Certified Montessori Specialist", experience: "6+ Years", bio: "Instructs tactile motor activities, creative origami, and preschool enrichment.", image: ASSETS.people.faculty },
];

// Specific Role Filters requested by user
const roleFilters = [
  "All",
  "Assistant Coordinator",
  "Coordinator",
  "Lead Teacher",
  "Teacher",
  "Preceptor"
] as const;

const ITEMS_PER_PAGE = 12;

export default function AcademicTeamPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardTheme, setCardTheme] = useState<"dark" | "light">("dark");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filteredStaff = academicTeamData.filter((member) => {
    // Role filter matching
    let matchesRole = true;
    if (activeFilter === "All") {
      matchesRole = true;
    } else if (activeFilter === "Assistant Coordinator") {
      matchesRole = member.role.toLowerCase().includes("assistant coordinator");
    } else if (activeFilter === "Coordinator") {
      matchesRole = member.role.toLowerCase().includes("coordinator") || member.role.toLowerCase().includes("academic head");
    } else if (activeFilter === "Lead Teacher") {
      matchesRole = member.role.toLowerCase().includes("lead teacher");
    } else if (activeFilter === "Teacher") {
      matchesRole = member.role.toLowerCase().includes("teacher");
    } else if (activeFilter === "Preceptor") {
      matchesRole = member.role.toLowerCase().includes("preceptor");
    }

    // Search query matching
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRole && matchesSearch;
  });

  const totalPages = Math.ceil(filteredStaff.length / ITEMS_PER_PAGE) || 1;
  const paginatedStaff = filteredStaff.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div>
      <PageBanner
        title="Academic Team"
        badge="Faculty Directory"
        subtitle="Meet our dedicated educators, lead teachers, coordinators, and certified Islamic scholars published in the official SIS directory."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Academic Team" }]}
        bgImage={ASSETS.academics.classroom2}
      />

      <div className="section-padding bg-[#0f0e13] text-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Official Published Roster
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Teachers & Academic Team
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Browse our verified educators and preceptors. Click any card to view their full credentials, qualifications, and official email.
            </p>
          </div>

          {/* Search, Role Filters & Theme Toggle */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {/* Requested Role Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {roleFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-[#BF5700] text-white shadow-lg shadow-orange-950/40 scale-105"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              {/* Theme toggle for ReflectiveCard */}
              <button
                onClick={() => setCardTheme(t => (t === "dark" ? "light" : "dark"))}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10 transition-all flex items-center gap-1.5"
                title="Toggle Card Theme"
              >
                {cardTheme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Silver Metal</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Dark Graphite</span>
                  </>
                )}
              </button>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search name, role, email..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#BF5700] focus:ring-1 focus:ring-[#BF5700]"
                />
              </div>
            </div>
          </div>

          {/* Results count & status */}
          <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
            <span>
              Showing {filteredStaff.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredStaff.length)} of {filteredStaff.length} faculty members
            </span>
            <span className="text-[11px] text-orange-400">
              💡 Click any teacher card to view full profile &amp; email
            </span>
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {paginatedStaff.map((teacher) => {
              return (
                <div
                  key={teacher.id}
                  onClick={() => setSelectedTeacher(teacher)}
                  className="cursor-pointer group transform transition-transform hover:-translate-y-1.5 focus:outline-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedTeacher(teacher); }}
                >
                  <ReflectiveCard
                    name={teacher.name}
                    role={teacher.role}
                    badge={teacher.category}
                    status="Active"
                    statusColor="#22c55e"
                    idLabel="Faculty ID"
                    idValue={teacher.id}
                    avatar={teacher.image}
                    theme={cardTheme}
                    metalness={0.92}
                    roughness={0.28}
                    blurStrength={6}
                    shine={1.2}
                    glare={0.65}
                    width={290}
                    height={440}
                    radius={22}
                    className="shadow-2xl group-hover:ring-2 group-hover:ring-[#BF5700]/70 transition-all"
                  />
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-300 group-hover:underline">
                      <Mail className="w-3 h-3 text-[#FC800A]" />
                      <span>{teacher.email}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white/10 text-gray-300 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                    currentPage === pageNum
                      ? "bg-[#BF5700] text-white shadow-md shadow-orange-950/40"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-white/10 text-gray-300 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {filteredStaff.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-sm">
              No faculty members found matching &quot;{searchQuery}&quot; under &quot;{activeFilter}&quot;.
            </div>
          )}
        </div>
      </div>

      {/* Teacher Profile Modal (Detailed Profile View) */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#171E45] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-700 pb-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#FC800A] shadow-xl shrink-0 bg-gray-900">
                <Image
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#FC800A] text-[10px] font-bold uppercase tracking-wider border border-orange-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{selectedTeacher.category}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">{selectedTeacher.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-orange-200">{selectedTeacher.role}</p>
                <p className="text-xs text-gray-400">{selectedTeacher.department}</p>
              </div>
            </div>

            {/* Detailed Credentials & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Clickable Email */}
              <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/60 space-y-1">
                <span className="text-gray-400 text-[11px] block font-medium">Official Contact Email</span>
                <a
                  href={`mailto:${selectedTeacher.email}`}
                  className="inline-flex items-center gap-1.5 text-orange-300 hover:text-white transition-colors font-bold text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FC800A]" />
                  <span>{selectedTeacher.email}</span>
                </a>
              </div>

              {/* Faculty ID */}
              <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/60 space-y-1">
                <span className="text-gray-400 text-[11px] block font-medium">Roster Identifier</span>
                <span className="text-white font-mono font-bold text-xs">{selectedTeacher.id}</span>
              </div>
            </div>

            {/* Academic Qualifications */}
            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[#FC800A] font-bold flex items-center gap-1.5 text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Qualifications &amp; Accreditations</span>
              </span>
              <p className="text-gray-200 leading-relaxed">{selectedTeacher.qualifications}</p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-purple-300 font-bold flex items-center gap-1.5 text-xs">
                <Briefcase className="w-4 h-4" />
                <span>Professional Pedagogical Experience</span>
              </span>
              <p className="text-gray-200 leading-relaxed">{selectedTeacher.experience}</p>
            </div>

            {/* Biography & Mentorship philosophy */}
            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-green-300 font-bold flex items-center gap-1.5 text-xs">
                <BookOpen className="w-4 h-4" />
                <span>Mentorship Philosophy &amp; Classroom Practice</span>
              </span>
              <p className="text-gray-300 leading-relaxed">{selectedTeacher.bio}</p>
            </div>

            {/* Footer action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">Spectrum International School • Verified Faculty Roster</span>
              <a
                href={`mailto:${selectedTeacher.email}`}
                className="px-5 py-2 bg-gradient-to-r from-[#BF5700] to-[#FC800A] hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
