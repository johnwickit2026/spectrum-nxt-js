import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { BookOpen, CheckCircle2, Award, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Academic Curriculum | Spectrum International School",
  description: "Pearson Edexcel and Cambridge International curriculum pathways, early childhood phonics, O/A Levels, and Tahfeezul Quran.",
};

const curriculumLevels = [
  {
    level: "Early Childhood Education (Play Group, Nursery, KG)",
    age: "Age 2.5 to 5.5 Years",
    accent: "border-[#BF5700]",
    badgeBg: "bg-orange-100 text-[#BF5700]",
    description: "Our early years program employs sensory apparatus, Jolly Phonics, rhythmic vocabulary acquisition, number concepts, fine motor skills, and foundational Islamic etiquette.",
    subjects: [
      "Jolly Phonics & Pre-Reading",
      "Conversational English Immersion",
      "Early Numeracy & Math Concepts",
      "Arabic Alphabet & Basic Duas",
      "Gross & Fine Motor Skill Games",
      "Sensory Play & Art Exploration"
    ],
  },
  {
    level: "Primary Section (Class I to Class V)",
    age: "Age 6 to 10 Years",
    accent: "border-[#92278F]",
    badgeBg: "bg-purple-100 text-[#92278F]",
    description: "Building robust conceptual clarity in language, scientific inquiry, and mathematics according to Pearson Edexcel Primary standards.",
    subjects: [
      "English Language & Creative Composition",
      "English Literature & Guided Reading",
      "Mathematics (Arithmetic, Geometry)",
      "General Science & Nature Study",
      "Social Studies & Global Geography",
      "Bangla (Language & Heritage)",
      "Islamic Studies & Tajweed Quran",
      "ICT & Computer Basics"
    ],
  },
  {
    level: "Lower Secondary (Class VI to Class VIII)",
    age: "Age 11 to 13 Years",
    accent: "border-[#8AB326]",
    badgeBg: "bg-green-100 text-[#8AB326]",
    description: "Transitioning students into formal experimental science, algebra, analytical literature, and structured British curriculum assessment.",
    subjects: [
      "Advanced English Language & Composition",
      "English Literature (Shakespeare & Modern Prose)",
      "Mathematics (Algebra, Statistics, Geometry)",
      "Integrated Science (Physics, Chemistry, Biology)",
      "Bangla Literature & Grammar",
      "Islamic Studies & Fiqh Basics",
      "Computer Science & Python Coding",
      "Bangladesh & Global Studies"
    ],
  },
  {
    level: "Cambridge & Edexcel O Level / IGCSE (Class IX to X)",
    age: "Age 14 to 16 Years",
    accent: "border-[#171E45]",
    badgeBg: "bg-indigo-100 text-[#171E45]",
    description: "Intensive preparation for Pearson Edexcel / Cambridge board examinations administered by the British Council.",
    subjects: [
      "English Language (Syllabus B / 1123)",
      "Pure Mathematics (Syllabus D / Pure 1-2)",
      "Further Pure Mathematics (Optional)",
      "Physics (Theory & Practical Alternative)",
      "Chemistry (Theory & Practical Alternative)",
      "Biology (Theory & Practical Alternative)",
      "Accounting & Business Studies",
      "Economics & Commerce",
      "Computer Science (0478 / 4CP0)",
      "Islamiyat (2058 / 4IS1)",
      "Bengali (0518 / 4BN1)"
    ],
  },
  {
    level: "Cambridge & Edexcel International A Level (Class XI to XII)",
    age: "Age 16 to 18 Years",
    accent: "border-[#BF5700]",
    badgeBg: "bg-orange-100 text-[#BF5700]",
    description: "In-depth specialization tailored for university admissions across engineering, medical, computer science, and business faculties worldwide.",
    subjects: [
      "Physics (Mechanics, Waves, Modern Physics)",
      "Chemistry (Inorganic, Organic, Physical)",
      "Biology (Genetics, Ecology, Cellular)",
      "Mathematics (P1, P2, P3, P4, Mechanics, Stats)",
      "Economics (Micro & Macro Analysis)",
      "Accounting & Corporate Finance",
      "Business Studies & Strategic Management",
      "Computer Science (Algorithms, System Architecture)"
    ],
  },
  {
    level: "Tahfeezul Quran Wing (Integrated Hifz)",
    age: "Segregated Boys & Girls Departments",
    accent: "border-[#8AB326]",
    badgeBg: "bg-green-100 text-[#8AB326]",
    description: "A specialized parallel department allowing gifted students to memorize the complete Holy Quran with authentic Tajweed while advancing through core academic grades.",
    subjects: [
      "Hifzul Quran (Memorization & Revision cycles)",
      "Tajweed-ul-Quran (Melodic phonetics with certified Qaris)",
      "Hifz Tarbiyah & Daily Sunnah Etiquettes",
      "Selected Arabic Language Grammar (Nahw & Sarf)",
      "Core English, Math & Science Instruction"
    ],
  },
];

export default function CurriculumPage() {
  return (
    <div>
      <PageBanner
        title="Academic Curriculum"
        badge="British Curriculum Standards"
        subtitle="A comprehensive, rigorous educational roadmap combining Pearson Edexcel, Cambridge International benchmarks, and Tahfeezul Quran."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Academic Curriculum" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Overview text */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Educational Excellence
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45]">
              Seamless Continuum from Early Years to University Entry
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Spectrum International School, our curriculum is carefully calibrated to ensure academic depth, critical reasoning, and moral uprightness. We do not use fragmented or placeholder syllabi; every subject aligns with globally recognized Pearson Edexcel and Cambridge standards, verified by the British Council Bangladesh.
            </p>
          </div>

          {/* Curriculum Levels Cards */}
          <div className="space-y-8">
            {curriculumLevels.map((lvl, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 rounded-2xl p-6 sm:p-8 border-l-4 ${lvl.accent} border border-gray-100 shadow-sm hover:shadow-card transition-all`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-[#171E45]">{lvl.level}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${lvl.badgeBg}`}>
                    {lvl.age}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  {lvl.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    Curriculum Subjects & Components:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {lvl.subjects.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white px-3 py-2 rounded-xl border border-gray-200/80 text-xs text-gray-700 flex items-center gap-2 shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span className="font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-[#171E45] text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Ready to Start Your Child&apos;s Academic Journey?</h3>
              <p className="text-xs text-gray-300">Download the complete prospectus or submit an admission application online.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/frontend/apply"
                className="px-6 py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/frontend/prospectus"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-all"
              >
                Download Prospectus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
