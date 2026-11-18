"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { GraduationCap, Search, Filter } from "lucide-react";

interface Teacher {
  name: string;
  role: string;
  category: "Leadership" | "Lead Teachers" | "Quran & Islamic" | "Faculty & Teachers" | "Instructors";
  image: string;
}

const academicTeamData: Teacher[] = [
  // Leadership & Coordinators
  { name: "Sharmin Akter Eva", role: "Vice Principal & Academic Head", category: "Leadership", image: ASSETS.people.faculty },
  { name: "Md. Fahim Faysal", role: "Assistant Coordinator", category: "Leadership", image: ASSETS.people.teachersStaff },
  { name: "Nowrin Sultana", role: "Assistant Coordinator", category: "Leadership", image: ASSETS.people.faculty },
  { name: "Shaykh Mahmudul Hasan", role: "Scholar & Head of Arabic", category: "Leadership", image: ASSETS.people.founderCeo },
  { name: "Md. Ataullah", role: "Teacher- Curriculum and Lang.", category: "Leadership", image: ASSETS.people.teachersStaff },

  // Lead Teachers
  { name: "Sumaiya Binta Shahid", role: "Lead Teacher, Pre- Section", category: "Lead Teachers", image: ASSETS.people.faculty },
  { name: "Mahmudul Hasan", role: "Lead Teacher- Al Quran and Religious Department & Preceptor- Hifz", category: "Lead Teachers", image: ASSETS.activities.hifzDepartment },
  { name: "Zakir Bin Mostak Azhari", role: "Lead Teacher- Al Quran and Religious Department", category: "Lead Teachers", image: ASSETS.activities.hifzDepartment },
  { name: "Ashraf Uddin Munna", role: "Lead Teacher- Al Quran And Religious Department, Key Stage- 1", category: "Lead Teachers", image: ASSETS.activities.hifzDepartment },
  { name: "Rifatul Zannat", role: "Lead Teacher & Preceptor Grade- V", category: "Lead Teachers", image: ASSETS.people.faculty },
  { name: "Abeda Sultana Happy", role: "Lead Teacher and Preceptor Grade- I", category: "Lead Teachers", image: ASSETS.people.faculty },
  { name: "Md. Saiful Bari", role: "Lead Teacher", category: "Lead Teachers", image: ASSETS.people.teachersStaff },
  { name: "Noshin Taranoom", role: "Lead Teacher & Preceptor Grade - III", category: "Lead Teachers", image: ASSETS.people.faculty },
  { name: "Nuzhat Ashraf Mahsa", role: "Lead Teacher and Preceptor: G-II", category: "Lead Teachers", image: ASSETS.people.faculty },

  // Al Quran & Religious Department / Hifz
  { name: "Khaled Saifullah", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Yousuf Jamil", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Shihab Uddin", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Rasel Ahmed", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Saiful Islam (Maolana)", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Omar Farok", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Mushfikur Rahman", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Mahbubur Rahman Bhuiyan", role: "Teacher- Hifz", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Mufti Zahid Hasan", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Abul Hayat Muhammad Yahya", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Jawadul Haque", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Abu Jar Gifari Talukdar", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Saidor Rahman", role: "Teacher- Hifz", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Md. Fayzur Rahman", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Ariful Islam (Billah)", role: "Teacher- Al Quran", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },
  { name: "Saiful Islam (Hafez)", role: "Teacher- Hifz", category: "Quran & Islamic", image: ASSETS.activities.hifzDepartment },

  // Faculty & Teachers
  { name: "Adnan Mustafa Sami", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Mahfuza Yesmin Khan Tanni", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Tanea Kamal", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Asaduzzaman Asad", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Sanjin Sultana", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Fariha Newaz", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Tahmina Rahman Tanjin", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Afia Sumya", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Mahea Farin Momo", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Md. Aftab", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Md. Kawsar Ahmad", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Jabunnasa Moushumi", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Md. Ashraf Ullah", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Mohammad Mohiuddin Sarker", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Sumaiya Akter", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Md Shahadat Hossain (Shanto)", role: "Teacher- Art and Craft", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Sayma Binte Bashar", role: "Teacher Assistant", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Samia Nushrat", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Md. Sagir Ahammad", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Mashiyat Shahrin", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Al- Mohosana Niru", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Afrin Nahar", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Maliha Benta Feroz", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Niger Sultana", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Hozaefa Bilkis Liza", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Sumaiya Meem", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Faysal Hossain Noman", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Atika Ashek", role: "Assistant Teacher & Pediatric Healthcare Staff", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Tasmia Ahmed", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Afroza Akter", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Mohammad Khan Shamim", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Munia Khan", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Rifat Sharmin", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Ayasha Siddika", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Md. Sumsul Arfin", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Humayra Hasan", role: "Teacher", category: "Faculty & Teachers", image: ASSETS.people.faculty },
  { name: "Rahimul Abedin Foysal", role: "Co-Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },
  { name: "Mohammad Mahfuzur Rahman", role: "Co-Teacher", category: "Faculty & Teachers", image: ASSETS.people.teachersStaff },

  // Instructors
  { name: "Habibur Rahman", role: "Instructor", category: "Instructors", image: ASSETS.people.teachersStaff },
  { name: "Muzahid Zaman", role: "Instructor", category: "Instructors", image: ASSETS.people.teachersStaff },
  { name: "Ummay Rabeya Si Ul Moon Shammi", role: "Instructor", category: "Instructors", image: ASSETS.people.faculty },
];

const categories = ["All", "Leadership", "Lead Teachers", "Quran & Islamic", "Faculty & Teachers", "Instructors"] as const;

export default function AcademicTeamPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStaff = academicTeamData.filter((member) => {
    const matchesCategory = activeCategory === "All" || member.category === activeCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageBanner
        title="Academic Team"
        badge="Faculty Directory"
        subtitle="Meet our dedicated educators, lead teachers, and certified Islamic scholars published in the official SIS directory."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Academic Team" }]}
        bgImage={ASSETS.academics.classroom2}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Official Published Roster
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Teachers & Academic Team
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Browse our verified educators, stage preceptors, coordinators, and Quran instructors.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#BF5700] text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search teacher or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
              />
            </div>
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStaff.map((teacher, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-orange-300 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-sm mb-4 border border-gray-200/50">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">
                    {teacher.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#171E45] mt-2 line-clamp-1">{teacher.name}</h3>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5 leading-snug">{teacher.role}</p>
                </div>
                <div className="pt-3 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#92278F]" />
                  <span>SIS Academic Faculty</span>
                </div>
              </div>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              No faculty members found matching &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
