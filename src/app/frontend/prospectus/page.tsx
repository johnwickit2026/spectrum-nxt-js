import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Download, FileText, CheckCircle2, ArrowRight, BookOpen, Compass, Award, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "School Prospectus (PDF) | Spectrum International School",
  description: "Download the official Spectrum International School Prospectus 2026 covering curriculum, facilities, uniform, guidelines, and campuses.",
};

const prospectusSections = [
  {
    title: "Dual Academic Pathways",
    desc: "Comprehensive Pearson iProgress (iPrimary to IAL) and Cambridge Pathways (Primary to Advanced) preparing students for O Level & beyond.",
  },
  {
    title: "Learning With Purpose (Islamic Curriculum)",
    desc: "In-house Islamic studies, Quranic & Arabic language, and progressive Al Qur'an memorization with moral ethics and Tarbiyah.",
  },
  {
    title: "The Four-Level Hifzul Quran Programme",
    desc: "Structured Hifz alongside core English, Math, Science, and Bangla, with 8 successful Hifz completions to date.",
  },
  {
    title: "Modern Facilities & Vibrant Clubs",
    desc: "Interactive digital classrooms, science & ICT labs, library, indoor playzone, 24/7 CCTV, and active student clubs.",
  },
  {
    title: "School Uniform & Islamic Adab",
    desc: "Seasonal uniform standards for boys and girls from Playgroup to O Level, plus specialized Hifz attire.",
  },
  {
    title: "9 Essential Guidelines for Guardians",
    desc: "Policies regarding admission, fees (1st–10th of month), meetings, school software IDs, punctuality, and conduct.",
  },
];

export default function ProspectusPage() {
  return (
    <div>
      <PageBanner
        title="School Prospectus"
        badge="Official Publication"
        subtitle="Download our comprehensive Prospectus 2026 detailing academic frameworks, Islamic curriculum, admission guidelines, and multi-campus network."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Prospectus PDF" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Main Download Hero Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Prospectus Cover Preview */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#171E45] via-[#202958] to-[#171E45] rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-orange-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                  Prospectus 2026
                </span>
                <div className="w-16 h-16 rounded-2xl bg-[#BF5700] mx-auto flex items-center justify-center shadow-md">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Official SIS Prospectus</h3>
                <p className="text-xs text-orange-200 italic font-semibold">
                  &ldquo;Shaping Bright Minds, Building Better Future&rdquo;
                </p>
                <div className="text-xs text-gray-300 space-y-1 pt-2">
                  <p>English Medium | Islamic Curriculum | Hifzul Quran</p>
                  <p className="font-semibold text-white">Playgroup to &apos;O&apos; Level</p>
                  <p className="text-[11px] text-gray-400">British Council Partner School</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <a
                  href="/assets/prospectus.pdf"
                  download="Prospectus-2026 SIS Final.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#FC800A] hover:bg-orange-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Prospectus (PDF)</span>
                </a>
                <p className="text-[10px] text-gray-400 mt-2">PDF Document • 4.0 MB</p>
              </div>
            </div>

            {/* Content Highlights */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Prospectus Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Inside the 2026 Prospectus
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Spectrum International School Prospectus provides families with complete transparency into our curriculum, pastoral care, four-level Hifz structure, uniform codes, and multi-campus network across Dhaka.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {prospectusSections.map((sec, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-1.5">
                    <h4 className="text-xs font-bold text-[#171E45] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8AB326] shrink-0" />
                      <span>{sec.title}</span>
                    </h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{sec.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/frontend/apply"
                  className="px-6 py-3 bg-[#BF5700] hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <span>Proceed to Online Application</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/frontend/admission-procedures"
                  className="px-6 py-3 border border-gray-300 hover:border-[#BF5700] text-gray-700 text-xs font-bold rounded-xl transition-all"
                >
                  View Admission Procedures
                </Link>
              </div>
            </div>
          </div>

          {/* Campuses Listed in Prospectus */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Institutional Reach
              </span>
              <h3 className="text-2xl font-black text-[#171E45] mt-1">
                Campuses Published in the 2026 Prospectus
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-[#FBF1E3]/50 rounded-2xl border border-[#EBE8E2]">
                <span className="text-xs font-bold text-[#BF5700] block mb-1">Academic Campus 01</span>
                <h4 className="text-base font-bold text-[#171E45]">Shantinagar Branch</h4>
                <p className="text-xs text-gray-600 mt-2">41/1, Shantinagar, Dhaka</p>
                <p className="text-xs text-[#BF5700] font-semibold mt-3">+88 01799-369685<br />+88 01730-369686</p>
              </div>

              <div className="p-6 bg-[#FBF1E3]/50 rounded-2xl border border-[#EBE8E2]">
                <span className="text-xs font-bold text-[#92278F] block mb-1">Academic Campus 02</span>
                <h4 className="text-base font-bold text-[#171E45]">Aftabnagar Branch</h4>
                <p className="text-xs text-gray-600 mt-2">House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka</p>
                <p className="text-xs text-[#92278F] font-semibold mt-3">+88 01329-763014<br />+88 01329-763015</p>
              </div>

              <div className="p-6 bg-[#FBF1E3]/50 rounded-2xl border border-[#EBE8E2]">
                <span className="text-xs font-bold text-[#8AB326] block mb-1">Hifzul Quran Campus</span>
                <h4 className="text-base font-bold text-[#171E45]">Residential Building</h4>
                <p className="text-xs text-gray-600 mt-2">41/1 (Bhaban-02), Shantinagar, Dhaka</p>
                <p className="text-xs text-[#8AB326] font-semibold mt-3">+88 01712-270559<br />+88 01818-314269</p>
              </div>

              <div className="p-6 bg-[#FBF1E3]/50 rounded-2xl border border-[#EBE8E2]">
                <span className="text-xs font-bold text-yellow-600 block mb-1">Proposed Permanent Campus</span>
                <h4 className="text-base font-bold text-[#171E45]">Savar Campus</h4>
                <p className="text-xs text-gray-600 mt-2">Vakurta (Near Amin Bazar), Savar</p>
                <p className="text-xs text-yellow-700 font-semibold mt-3">+88 01726-208154</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
