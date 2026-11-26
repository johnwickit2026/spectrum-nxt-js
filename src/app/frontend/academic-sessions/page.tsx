"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { fetchAcademicSessions } from "@/lib/api";
import { AcademicSession } from "@/types";

export default function AcademicSessionsPage() {
  const [activeTab, setActiveTab] = useState<"june" | "january">("june");
  const [sessions, setSessions] = useState<AcademicSession[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [activeJuneSession, setActiveJuneSession] = useState<string>("");
  const [activeJanSession, setActiveJanSession] = useState<string>("");

  useEffect(() => {
    // Determine Bangladesh time (UTC+6)
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const bdTime = new Date(utc + 3600000 * 6);
    const yr = bdTime.getFullYear();
    const mo = bdTime.getMonth() + 1; // 1-12
    setCurrentYear(yr);

    // June session: starts in June. If mo >= 6, session is yr to yr+1. Else (yr-1) to yr.
    const juneStart = mo >= 6 ? yr : yr - 1;
    const juneEnd = juneStart + 1;
    setActiveJuneSession(`Session ${juneStart}–${juneEnd} (June to June)`);

    // January session: runs Jan to Jan/Dec of current year
    setActiveJanSession(`Session ${yr} (January to January)`);

    fetchAcademicSessions().then((data) => {
      if (data && data.length > 0) {
        setSessions(data);
      }
    });
  }, []);

  const ageGuide = [
    { grade: "Play Group", ageRange: "2.5 – 3.5 Years", cutoff: `Born on or before Dec 31, ${currentYear - 3}`, focus: "Phonics, sensory play, motor skills" },
    { grade: "Nursery", ageRange: "3.5 – 4.5 Years", cutoff: `Born on or before Dec 31, ${currentYear - 4}`, focus: "Pre-reading, conversation, numeracy" },
    { grade: "Kindergarten (KG)", ageRange: "4.5 – 5.5 Years", cutoff: `Born on or before Dec 31, ${currentYear - 5}`, focus: "Phonetic writing, addition, reading" },
    { grade: "Class I", ageRange: "5.5 – 6.5 Years", cutoff: `Born on or before Dec 31, ${currentYear - 6}`, focus: "Elementary Edexcel curriculum" },
    { grade: "Class II – V", ageRange: "6.5 – 10.5 Years", cutoff: "Corresponding grade transition", focus: "Primary English, Math, Science" },
    { grade: "Class VI – VIII", ageRange: "11 – 13.5 Years", cutoff: "Lower Secondary transition", focus: "Lower Secondary British standard" },
    { grade: "O Level (IX – X)", ageRange: "14 – 16 Years", cutoff: "Prior academic transcripts", focus: "Edexcel / Cambridge IGCSE / O Level" },
    { grade: "A Level (XI – XII)", ageRange: "16+ Years", cutoff: "Minimum 5 O Level passes", focus: "International A Levels (Jan & June Intakes)" },
    { grade: "Tahfeezul Quran (Hifz)", ageRange: "Ages 6 to 14 Years", cutoff: "Quran recitation readiness", focus: "Integrated Hifz with academic core" },
  ];

  return (
    <div>
      <PageBanner
        title="Academic Sessions & Age Guide"
        badge="Dual-Cycle Session Calendar"
        subtitle="Spectrum International School operates two distinct academic session cycles: June to June (Regular Curriculum) and January to January (Fast-Track & Cambridge Winter Intake)."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Academic Sessions" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Active Session Notification Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#171E45] to-[#252f6b] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FC800A]/20 text-[#FC800A] text-[11px] font-bold uppercase tracking-wider border border-[#FC800A]/30">
                <Sparkles className="w-3.5 h-3.5" />
                Auto-Determined Active Sessions (Bangladesh Time)
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Dual Academic Intake Windows Active
              </h2>
              <p className="text-xs text-gray-300 max-w-xl leading-relaxed">
                Admissions desk is currently accepting candidate applications for both the <strong>{activeJuneSession}</strong> and <strong>{activeJanSession}</strong> cycles.
              </p>
            </div>

            <Link
              href="/frontend/apply"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white text-xs font-bold shadow-lg hover:shadow-glow hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              <span>Apply for Current Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dual Session Selector Tabs */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-3 border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveTab("june")}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
                  activeTab === "june"
                    ? "bg-[#BF5700] text-white shadow-orange-950/20 scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>June Session (June to June)</span>
              </button>

              <button
                onClick={() => setActiveTab("january")}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
                  activeTab === "january"
                    ? "bg-[#92278F] text-white shadow-purple-950/20 scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>January Session (January to January)</span>
              </button>
            </div>

            {/* June to June Tab Content */}
            {activeTab === "june" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in">
                <div className="bg-[#FBF1E3] p-8 rounded-3xl border border-[#EBE8E2] space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#BF5700] text-white flex items-center justify-center shadow">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BF5700]">
                        Standard Primary &amp; Secondary
                      </span>
                      <h3 className="text-xl font-extrabold text-[#171E45]">Regular June to June Cycle</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    The primary academic year runs continuously from <strong>June 1st through June 30th</strong> of the following year. It encompasses Play Group through Class X (O Levels) and Cambridge A Levels.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2.5 pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                      <span><strong>First Semester (Term 1):</strong> June through November (concluding with Mid-Term assessments).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                      <span><strong>Winter Break:</strong> Mid-December to early January.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                      <span><strong>Final Semester (Term 2):</strong> January through June (concluding with Final Annual Examinations).</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-[#171E45] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#BF5700]" />
                    <span>June Session Key Advantages</span>
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Aligned directly with British Council Pearson Edexcel and Cambridge International May/June exam series for O and A Levels.
                  </p>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Target Grades:</strong> Play Group, Nursery, KG, Classes I through VIII, O-Levels &amp; A-Levels.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Enrollment Deadlines:</strong> Priority intake opens March – May annually with rolling admissions.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Hifz Integration:</strong> Girls &amp; Boys Hifz departments commence simultaneous Quranic cohorts in June.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* January to January Tab Content */}
            {activeTab === "january" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in">
                <div className="bg-purple-50/60 p-8 rounded-3xl border border-purple-100 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#92278F] text-white flex items-center justify-center shadow">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#92278F]">
                        Cambridge Winter &amp; Fast-Track
                      </span>
                      <h3 className="text-xl font-extrabold text-[#171E45]">January to January Cycle</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Our second independent academic stream runs from <strong>January 1st through December 31st / January</strong>, catering specifically to Cambridge winter intake candidates, returning expatriate students, and accelerated A-Level streams.
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2.5 pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#92278F] shrink-0 mt-0.5" />
                      <span><strong>Winter Term:</strong> January through May (concluding with Mid-Year evaluations).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#92278F] shrink-0 mt-0.5" />
                      <span><strong>Autumn Term:</strong> July through December (aligned with Cambridge Oct/Nov exam windows).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#92278F] shrink-0 mt-0.5" />
                      <span><strong>Expatriate Transition:</strong> Smooth credit transfers without loss of an entire academic year.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-[#171E45] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#92278F]" />
                    <span>January Session Key Advantages</span>
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Enables students who sat October/November Cambridge series or moved during mid-year to start their fresh academic year in January.
                  </p>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Target Grades:</strong> Cambridge A Levels (Classes XI &amp; XII), Class IX-X O Level fast-trackers, and Hifz newcomers.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Enrollment Deadlines:</strong> Winter intake window opens November – January.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <strong>Independent Transcripts:</strong> Separate terminal report cards and graduation cohorts.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Age Eligibility Table */}
          <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Eligibility Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Age Eligibility Matrix (Current Session)
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                Calculated on commencement of student enrollment according to British Council benchmarks.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#171E45] text-white uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6">Grade / Standard</th>
                    <th className="py-4 px-6">Age Range</th>
                    <th className="py-4 px-6">Cutoff &amp; Eligibility</th>
                    <th className="py-4 px-6">Key Learning Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {ageGuide.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/40 transition-colors">
                      <td className="py-3.5 px-6 font-bold text-[#171E45]">{row.grade}</td>
                      <td className="py-3.5 px-6 font-semibold text-[#BF5700]">{row.ageRange}</td>
                      <td className="py-3.5 px-6 text-gray-600">{row.cutoff}</td>
                      <td className="py-3.5 px-6 text-gray-700">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
