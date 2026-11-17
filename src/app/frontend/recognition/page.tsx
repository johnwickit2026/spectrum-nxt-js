import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Recognition in Details | Spectrum International School",
  description: "Official affiliations with British Council, Pearson Edexcel, Cambridge Assessment, and academic accreditations.",
};

export default function RecognitionPage() {
  return (
    <div>
      <PageBanner
        title="Recognition in Details"
        badge="Accreditations & Affiliations"
        subtitle="Spectrum International School is an officially approved examination center and registered partner with leading global academic boards."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Recognition in Details" }]}
        bgImage={ASSETS.activities.recognition}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Main Hero Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Certified Global Standards
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] leading-tight">
                Benchmark International Qualifications Administered with Excellence
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spectrum International School maintains official affiliations with the British Council Bangladesh, Pearson Edexcel (UK), and Cambridge Assessment International Education. Our students sit for world-recognized O Level, IGCSE, and International A Level examinations under rigorous proctoring protocols.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center">
                <Image
                  src="/images/affiliation-logo.png"
                  alt="Accreditation Logos: British Council, Pearson Edexcel, Cambridge Assessment"
                  width={340}
                  height={90}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.activities.recognition}
                alt="Award ceremony and student recognition at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171E45]">Pearson Edexcel UK</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Registered examination center delivering Pearson Edexcel International Primary, Lower Secondary, IGCSE, and IAL curricula with modular assessment pathways.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Modular exam schedules</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Global High Achiever awards</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#92278F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171E45]">Cambridge Assessment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Instructional frameworks developed according to Cambridge standards, promoting deep subject understanding, critical analysis, and autonomous thinking.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Recognized by top global universities</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Comprehensive teacher guides</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#8AB326] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#171E45]">British Council Bangladesh</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Active member of the British Council Attached Center Network, participating in regular pedagogical seminars, student workshops, and secure exam sessions.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Certified invigilation & venues</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Continuous professional development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
