import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Award, BookOpen, GraduationCap, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Academic Head | Spectrum International School",
  description: "Academic leadership, curriculum standards, and pedagogical vision from Sharmin Akter Eva, Vice Principal & Academic Head at SIS.",
};

export default function AcademicHeadPage() {
  return (
    <div>
      <PageBanner
        title="Academic Head"
        badge="Academic Council"
        subtitle="Ensuring pedagogical excellence, curriculum governance, and holistic student mentorship across all sections."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Academic Head" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Profile Card */}
            <div className="md:col-span-5 bg-[#FBF1E3] rounded-2xl p-6 border border-[#EBE8E2] text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={ASSETS.people.faculty}
                  alt="Sharmin Akter Eva, Vice Principal & Academic Head"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#171E45]">Sharmin Akter Eva</h3>
                <p className="text-xs font-bold text-[#92278F] uppercase tracking-wider mt-1">Vice Principal & Academic Head</p>
                <p className="text-xs text-gray-600 mt-2">Vice Principal & Academic Head, Spectrum International School</p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 text-xs text-left space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-3.5 h-3.5 text-[#92278F]" />
                  <span>academics@spectrumintlschool.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-3.5 h-3.5 text-[#92278F]" />
                  <span>+880 1799-369685 (Ext. 204)</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Curriculum Vision
              </span>
              <h2 className="text-2xl font-black text-[#171E45]">
                Cultivating Academic Discipline, Curiosity, and Global Success
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                As Academic Head of Spectrum International School, my foremost priority is ensuring that our pedagogical frameworks reflect international benchmarks. Our academic council continuously reviews lesson planning, teacher training workshops, laboratory equipment, and assessment methodologies.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We implement both Pearson Edexcel and Cambridge syllabi with customized supplementary workbooks. In early childhood, we emphasize phonetics and joyful sensory learning; in middle years, analytical problem-solving and scientific experimentation; and in senior years, focused exam mastery for IGCSE and A-Levels.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#92278F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#171E45]">Diagnostic & Continuous Assessment</h4>
                    <p className="text-xs text-gray-500">Regular quizzes, formative tracking, and parent consultations ensure no learner is left behind.</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#BF5700] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#171E45]">Faculty Professional Development</h4>
                    <p className="text-xs text-gray-500">Continuous pedagogical workshops with British Council trainers and Cambridge specialists.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/frontend/curriculum"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#92278F] hover:bg-purple-800 text-white text-xs font-bold rounded-xl shadow transition-colors"
                >
                  <span>Explore Academic Curriculum</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
