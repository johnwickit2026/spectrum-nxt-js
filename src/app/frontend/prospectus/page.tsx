import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Download, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "School Prospectus (PDF) | Spectrum International School",
  description: "Download the official Spectrum International School prospectus covering curriculum, faculty, facilities, and fees.",
};

export default function ProspectusPage() {
  return (
    <div>
      <PageBanner
        title="School Prospectus"
        badge="Official Publication"
        subtitle="Download our comprehensive prospectus detailing academic frameworks, admission requirements, fee structures, and campus life."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Prospectus PDF" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Prospectus Cover Preview */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#171E45] to-[#262E5F] rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-orange-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  Academic Year 2026–2027
                </span>
                <div className="w-16 h-16 rounded-2xl bg-[#BF5700] mx-auto flex items-center justify-center shadow-md">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black">Official SIS Prospectus</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Spectrum International School<br />
                  Khadem Tower, 41/1 Shantinagar, Dhaka
                </p>
              </div>

              <div className="pt-6 border-t border-white/20">
                <a
                  href="/assets/prospectus.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#FC800A] hover:bg-orange-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Prospectus (PDF)</span>
                </a>
              </div>
            </div>

            {/* Content Highlights */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Everything in One Document
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Inside the Spectrum Prospectus
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The SIS Prospectus provides prospective parents with clear, unembellished answers to guide one of the most critical decisions in your family&apos;s life.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#171E45]">Detailed Grade-Wise Curriculum</h4>
                    <p className="text-xs text-gray-600">Syllabi for Play Group through Cambridge A Levels & Tahfeezul Quran.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#171E45]">Fee Schedule & Transparent Accounts</h4>
                    <p className="text-xs text-gray-600">Admission fees, session charges, monthly tuition, and payment policies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#171E45]">Age Eligibility & Entrance Assessments</h4>
                    <p className="text-xs text-gray-600">Clear cut-off dates and friendly readiness assessment guidelines.</p>
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  );
}
