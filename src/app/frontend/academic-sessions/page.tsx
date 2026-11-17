import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Academic Sessions & Age Guide | Spectrum International School",
  description: "Academic year cycle (July to June), Cambridge A Level intake windows, and age eligibility table at SIS.",
};

const ageGuide = [
  { grade: "Play Group", ageRange: "2.5 – 3.5 Years", cutoff: "Born on or before Dec 31", focus: "Phonics, sensory play, motor skills" },
  { grade: "Nursery", ageRange: "3.5 – 4.5 Years", cutoff: "Born on or before Dec 31", focus: "Pre-reading, conversation, numeracy" },
  { grade: "Kindergarten (KG)", ageRange: "4.5 – 5.5 Years", cutoff: "Born on or before Dec 31", focus: "Phonetic writing, addition, reading" },
  { grade: "Class I", ageRange: "5.5 – 6.5 Years", cutoff: "Born on or before Dec 31", focus: "Elementary Edexcel curriculum" },
  { grade: "Class II – V", ageRange: "6.5 – 10.5 Years", cutoff: "Corresponding grade transition", focus: "Primary English, Math, Science" },
  { grade: "Class VI – VIII", ageRange: "11 – 13.5 Years", cutoff: "Lower Secondary transition", focus: "Lower Secondary British standard" },
  { grade: "O Level (IX – X)", ageRange: "14 – 16 Years", cutoff: "Prior academic transcripts", focus: "Edexcel / Cambridge IGCSE / O Level" },
  { grade: "A Level (XI – XII)", ageRange: "16+ Years", cutoff: "Minimum 5 O Level passes", focus: "International A Levels (Jan & July Intakes)" },
  { grade: "Tahfeezul Quran", ageRange: "Ages 6 to 14 Years", cutoff: "Quran recitation readiness", focus: "Integrated Hifz with academic core" },
];

export default function AcademicSessionsPage() {
  return (
    <div>
      <PageBanner
        title="Academic Sessions & Age Guide"
        badge="Session Calendar & Eligibility"
        subtitle="Detailed schedule of the academic year, intake cycles, and official age criteria for admission into Spectrum International School."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Academic Sessions" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Intake Windows Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FBF1E3] p-8 rounded-2xl border border-[#EBE8E2] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#BF5700] text-white flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171E45]">Regular Academic Session</h3>
                  <p className="text-xs text-[#BF5700] font-semibold">Play Group through Class VIII & O Levels</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                The standard academic year runs from <strong>July to June</strong>, split into two terms:
              </p>
              <ul className="text-xs text-gray-600 space-y-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                  <span><strong>First Term:</strong> July through December (Concluding with Mid-Term Exams)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                  <span><strong>Final Term:</strong> January through June (Concluding with Final Annual Assessment)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FBF1E3] p-8 rounded-2xl border border-[#EBE8E2] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#92278F] text-white flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171E45]">Cambridge A Level Intakes</h3>
                  <p className="text-xs text-[#92278F] font-semibold">Class XI & XII Specialized Streams</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Cambridge and Pearson Edexcel International A-Level students can enroll across two distinct intake windows:
              </p>
              <ul className="text-xs text-gray-600 space-y-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92278F] shrink-0 mt-0.5" />
                  <span><strong>Summer Intake:</strong> July / August (Aligned with regular school cycle)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92278F] shrink-0 mt-0.5" />
                  <span><strong>Winter Intake:</strong> January / February (Direct fast-track for October session candidates)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Age Eligibility Table */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Eligibility Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Age Eligibility Matrix (Session 2026–2027)
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                Calculated on the commencement of the academic session in July.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#171E45] text-white">
                  <tr>
                    <th className="p-4 font-bold">Grade / Class</th>
                    <th className="p-4 font-bold">Age Eligibility</th>
                    <th className="p-4 font-bold">Cut-off Guideline</th>
                    <th className="p-4 font-bold">Curriculum Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {ageGuide.map((row, i) => (
                    <tr key={i} className="hover:bg-orange-50/40 transition-colors">
                      <td className="p-4 font-bold text-[#171E45]">{row.grade}</td>
                      <td className="p-4 font-semibold text-[#BF5700]">{row.ageRange}</td>
                      <td className="p-4 text-gray-600">{row.cutoff}</td>
                      <td className="p-4 text-gray-600">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/frontend/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-full shadow-lg transition-all"
            >
              <span>Apply Online for Current Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
