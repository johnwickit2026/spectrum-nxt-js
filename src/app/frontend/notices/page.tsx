"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Notice } from "@/types";
import { Search, Calendar, FileText, ArrowRight, X, Download, Filter } from "lucide-react";

const initialNotices: Notice[] = [
  {
    id: 1,
    title: "Admissions Open for Academic Session 2026-2027 (Play Group to Class VIII & A Levels)",
    category_name: "Admissions",
    category_slug: "admissions",
    file_url: "/assets/prospectus.pdf",
    content: "Applications are officially open for Play Group, Nursery, KG, Classes I-VIII, and Cambridge A-Levels for the upcoming academic session. Parents may apply online or collect admission forms from the school admission office at Khadem Tower, Shantinagar.",
    publish_date: "2026-11-01",
    is_active: 1,
  },
  {
    id: 2,
    title: "Term Examination Schedule & Syllabus Guidelines",
    category_name: "Examinations",
    category_slug: "examinations",
    file_url: null,
    content: "The upcoming Mid-Term Examination schedule has been published for all grades. Students are advised to collect their exam admit cards and review the subject-wise syllabus guidelines posted on the student noticeboard.",
    publish_date: "2026-11-05",
    is_active: 1,
  },
  {
    id: 3,
    title: "Special Tahfeezul Quran (Hifz) Department Admissions",
    category_name: "Admissions",
    category_slug: "admissions",
    file_url: null,
    content: "Spectrum International School announces new enrollment slots for our dedicated Girls and Boys Hifzul Quran Departments, integrated smoothly with regular English-medium classes.",
    publish_date: "2026-11-08",
    is_active: 1,
  },
  {
    id: 4,
    title: "Important Advisory: Online Fee Payment Hours & Helplines",
    category_name: "Academic Routine",
    category_slug: "academic-routine",
    file_url: null,
    content: "Parents paying tuition and admission fees online are reminded that the secure payment window operates between 7:00 AM and 5:00 PM daily. For any assistance, please dial +880 1799-369685 or +880 1730-369686.",
    publish_date: "2026-11-12",
    is_active: 1,
  },
  {
    id: 5,
    title: "Annual Book Festival Schedule & Student Storytelling Contests",
    category_name: "Events & Holidays",
    category_slug: "events-holidays",
    file_url: null,
    content: "Spectrum International School will host its Annual Book Festival from December 05, 2026. Parents are cordially invited to visit student book stalls and storytelling competitions.",
    publish_date: "2026-11-15",
    is_active: 1,
  },
];

const categories = ["All", "Admissions", "Examinations", "Academic Routine", "Events & Holidays"];

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const filteredNotices = initialNotices.filter((notice) => {
    const matchesCategory =
      selectedCategory === "All" ||
      notice.category_name?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageBanner
        title="School Notices & Announcements"
        badge="Official Circulars"
        subtitle="Stay updated with the latest academic routines, examination schedules, fee payment guidelines, and school circulars."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Notices" }]}
        bgImage={ASSETS.hero.banner3}
      />

      <div className="section-padding bg-gray-50 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {/* Search & Filter Bar */}
          <div className="bg-white p-5 rounded-2xl shadow-card border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700] transition-colors"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#BF5700] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notices List */}
          <div className="space-y-4">
            {filteredNotices.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl text-center shadow-card border border-gray-100">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-gray-700">No notices found</h3>
                <p className="text-xs text-gray-500 mt-1">Try searching with different keywords or filter category.</p>
              </div>
            ) : (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-card-hover border border-gray-100 hover:border-orange-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">
                        {notice.category_name}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {notice.publish_date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#171E45] hover:text-[#BF5700] transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-1 max-w-2xl">{notice.content}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setActiveNotice(notice)}
                      className="px-4 py-2 bg-gray-100 hover:bg-orange-50 hover:text-[#BF5700] text-gray-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1"
                    >
                      <span>Read Notice</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Notice Detail Modal */}
      {activeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-gray-100 relative space-y-4">
            <button
              onClick={() => setActiveNotice(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#BF5700] bg-orange-100 px-2.5 py-0.5 rounded">
                {activeNotice.category_name}
              </span>
              <span className="text-xs text-gray-500">Date: {activeNotice.publish_date}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#171E45]">
              {activeNotice.title}
            </h3>

            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line border-t border-b border-gray-100 py-4">
              {activeNotice.content}
            </div>

            <div className="flex justify-between items-center pt-2">
              <p className="text-[11px] text-gray-400">Spectrum International School · Official Notice</p>
              <button
                onClick={() => setActiveNotice(null)}
                className="px-5 py-2 bg-[#171E45] text-white text-xs font-bold rounded-xl hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
