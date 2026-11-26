import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { CheckCircle2, Award, Users, BookOpen, ShieldCheck, HeartHandshake, ArrowRight, Compass, Sparkles, Building2, MapPin, Quote } from "lucide-react";

export const metadata = {
  title: "SIS In Brief | Spectrum International School",
  description: "Learn about Spectrum International School's background, educational legacy, vision, mission, philosophy, and campuses.",
};

const whyChoosePoints = [
  {
    title: "International Academic Pathways",
    desc: "Cambridge and Pearson Edexcel curricula preparing students for future opportunities.",
  },
  {
    title: "Education Rooted in Faith",
    desc: "A unique integration of Qur’anic learning, Islamic values, and modern education.",
  },
  {
    title: "Hifz Alongside Academics",
    desc: "A structured Hifzul Qur’an programme with continued academic learning and eight successful Hifz completions.",
  },
  {
    title: "Inspiring Learning Spaces",
    desc: "Interactive classrooms, modern laboratories, library facilities, and technology-enhanced learning.",
  },
  {
    title: "Beyond the Classroom",
    desc: "Sports, science fairs, language clubs, creative activities, and opportunities to explore individual talents.",
  },
  {
    title: "Growing Together",
    desc: "Dedicated teachers, character development, and active parent involvement in every child’s learning journey.",
  },
];

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
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {/* Main Story & History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Institutional Profile • Established 2020
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] leading-tight">
                Shaping Bright Minds, Building Better Future
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Established in 2020, Spectrum International School offers quality English-medium education through the Pearson Edexcel and Cambridge curricula, preparing students for O Level qualifications and future progression to A Level.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Alongside academic excellence, the school integrates an Islamic curriculum, including Hifzul Qur’an, nurturing students with strong moral values, Islamic principles, and a commitment to practicing their faith. Our balanced educational approach focuses on developing knowledge, character, confidence, and essential life skills.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Through a supportive learning environment and a commitment to holistic education, the school strives to develop academically accomplished, spiritually grounded, and responsible individuals who contribute positively to society.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-[#FBF1E3] rounded-xl border border-[#EBE8E2] text-center">
                  <p className="text-2xl font-black text-[#BF5700]">2020</p>
                  <p className="text-[11px] text-gray-600 font-medium mt-0.5">Established</p>
                </div>
                <div className="p-3.5 bg-[#FBF1E3] rounded-xl border border-[#EBE8E2] text-center">
                  <p className="text-2xl font-black text-[#92278F]">8</p>
                  <p className="text-[11px] text-gray-600 font-medium mt-0.5">Completed Hifz</p>
                </div>
                <div className="p-3.5 bg-[#FBF1E3] rounded-xl border border-[#EBE8E2] text-center">
                  <p className="text-2xl font-black text-[#8AB326]">4</p>
                  <p className="text-[11px] text-gray-600 font-medium mt-0.5">Campuses / Sites</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.hero.banner1}
                alt="Spectrum International School Campus Gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Philosophy, Mission & Vision from Prospectus */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Our Guiding Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Philosophy, Mission & Vision
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Philosophy */}
              <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[#8AB326] border-x border-b border-gray-100 space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-[#8AB326] flex items-center justify-center mb-4">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171E45] mb-2">Our Philosophy</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    With a comprehensive blend of Islamic, academic, cultural, psychological, social, physical, and health requirements, Spectrum aims to promote and maintain the growth of positive, well-rounded Muslim children.
                  </p>
                </div>
                <div className="text-[11px] text-gray-400 font-medium pt-2 border-t border-gray-200">
                  Focus: Well-rounded development of mind and character
                </div>
              </div>

              {/* Mission */}
              <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[#92278F] border-x border-b border-gray-100 space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#92278F] flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171E45] mb-2">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We are committed to fostering both ethical and educational excellence, believing that strong moral values and academic achievement are essential for shaping future leaders who contribute positively to society.
                  </p>
                </div>
                <div className="text-[11px] text-gray-400 font-medium pt-2 border-t border-gray-200">
                  Focus: Ethical grounding and academic achievement
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[#BF5700] border-x border-b border-gray-100 space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center mb-4">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171E45] mb-2">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Our vision is to nurture a generation grounded in faith, knowledge and noble character, prepared to excel in life, serve humanity and contribute to the betterment of our country while fulfilling their responsibilities to Allah.
                  </p>
                </div>
                <div className="text-[11px] text-gray-400 font-medium pt-2 border-t border-gray-200">
                  Focus: Faith, knowledge, noble character & societal impact
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Spectrum Section & Hadith */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Key Distinctions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Why Choose Spectrum?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePoints.map((pt, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#BF5700] flex items-center justify-center font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-[#171E45] mb-2">{pt.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hadith Banner */}
            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#171E45] to-[#262E5F] text-white rounded-2xl shadow-md text-center max-w-3xl mx-auto relative overflow-hidden">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-white/10 pointer-events-none" />
              <p className="font-serif italic text-base sm:text-lg text-orange-200 leading-relaxed">
                &ldquo;Whoever follows a path to seek knowledge therein, Allah will make easy for him a path to Paradise.&rdquo;
              </p>
              <p className="text-xs text-gray-300 mt-2 font-medium">
                — Sahih Muslim, Hadith No. 2699
              </p>
            </div>
          </div>

          {/* Campuses Network */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Our Campuses
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Serving Students Across Dhaka
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/80">
                <span className="text-xs font-bold text-[#BF5700] block mb-1">Academic Campus 01</span>
                <h4 className="text-base font-bold text-[#171E45]">Shantinagar Branch</h4>
                <p className="text-xs text-gray-600 mt-2">41/1, Shantinagar, Dhaka</p>
                <p className="text-xs text-[#BF5700] font-semibold mt-3">+88 01799-369685<br />+88 01730-369686</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/80">
                <span className="text-xs font-bold text-[#92278F] block mb-1">Academic Campus 02</span>
                <h4 className="text-base font-bold text-[#171E45]">Aftabnagar Branch</h4>
                <p className="text-xs text-gray-600 mt-2">House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka</p>
                <p className="text-xs text-[#92278F] font-semibold mt-3">+88 01329-763014<br />+88 01329-763015</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/80">
                <span className="text-xs font-bold text-[#8AB326] block mb-1">Hifzul Quran Campus</span>
                <h4 className="text-base font-bold text-[#171E45]">Residential Building</h4>
                <p className="text-xs text-gray-600 mt-2">41/1 (Bhaban-02), Shantinagar, Dhaka</p>
                <p className="text-xs text-[#8AB326] font-semibold mt-3">+88 01712-270559<br />+88 01818-314269</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200/80">
                <span className="text-xs font-bold text-yellow-600 block mb-1">Proposed Permanent Campus</span>
                <h4 className="text-base font-bold text-[#171E45]">Savar Campus</h4>
                <p className="text-xs text-gray-600 mt-2">Vakurta (Near Amin Bazar), Savar</p>
                <p className="text-xs text-yellow-700 font-semibold mt-3">+88 01726-208154</p>
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
                href="/frontend/prospectus"
                className="px-5 py-2.5 bg-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/20 transition-colors"
              >
                Prospectus PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
