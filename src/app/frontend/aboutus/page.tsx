import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { CheckCircle2, Award, Users, BookOpen, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "SIS In Brief | Spectrum International School",
  description: "Learn about Spectrum International School's background, educational legacy, vision, mission, and accreditation.",
};

export default function AboutUsPage() {
  return (
    <div>
      <PageBanner
        title="SIS In Brief"
        badge="About Spectrum"
        subtitle="An overview of Spectrum International School's educational philosophy, institutional history, and commitment to holistic excellence."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "SIS In Brief" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Main Story & History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Institutional Profile
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] leading-tight">
                Pioneering English-Medium Education with Moral & Spiritual Integrity
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spectrum International School (SIS) was established with a clear mandate: to offer Bangladeshi families an internationally competitive English-medium education without severing ties with moral ethics and Islamic principles.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Located centrally at Khadem Tower, 41/1 Shantinagar, Dhaka, SIS operates with state-of-the-art multimedia classrooms, specialized STEM laboratories, modern computer facilities, and an enriched library. The school conducts classes from Play Group through Cambridge A Levels, alongside an integrated Tahfeezul Quran department for both boys and girls.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#FBF1E3] rounded-xl border border-[#EBE8E2]">
                  <p className="text-2xl font-black text-[#BF5700]">800+</p>
                  <p className="text-xs text-gray-600 font-medium">Students Enrolled</p>
                </div>
                <div className="p-4 bg-[#FBF1E3] rounded-xl border border-[#EBE8E2]">
                  <p className="text-2xl font-black text-[#92278F]">110+</p>
                  <p className="text-xs text-gray-600 font-medium">Qualified Educators</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-96 sm:h-[460px] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.hero.banner1}
                alt="Spectrum International School Campus Gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Pillars of SIS */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Core Pillars
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                The Spectrum Advantage
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#BF5700] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#171E45]">Pearson & Cambridge Standard</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rigorous syllabus delivery tailored for outstanding performance in international O & A Level exams overseen by the British Council.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-[#92278F] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#171E45]">Tahfeezul Quran & Tarbiyah</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A structured Quran memorization wing with certified scholars, ensuring daily religious practice, good manners, and moral ethics.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-[#8AB326] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#171E45]">Child-Friendly Campus</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Central air-conditioning, CCTV monitoring, clean sanitized washrooms, and strict safety protocols providing total peace of mind for parents.
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="bg-[#171E45] text-white p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-xl font-bold">Discover Spectrum for Your Child</h4>
              <p className="text-xs text-gray-300">Schedule a campus visit or review our admission procedures.</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/frontend/admission-procedures"
                className="px-5 py-2.5 bg-[#BF5700] text-white font-bold text-xs rounded-xl shadow hover:bg-orange-600 transition-colors"
              >
                Admission Guide
              </Link>
              <Link
                href="/frontend/contact"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
