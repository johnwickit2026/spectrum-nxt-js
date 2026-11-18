import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Management Committee | Spectrum International School",
  description: "Governing Board and Management Committee of Spectrum International School.",
};

const committeeMembers = [
  {
    name: "Nur Ahammed Khokan",
    role: "Founder & CEO",
    bio: "Founding visionary driving institutional growth, holistic educational standards, and progressive academic governance for SIS.",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Sharmin Akter Eva",
    role: "Vice Principal & Academic Head",
    bio: "Academic head overseeing curriculum implementation, teaching standards, Cambridge program benchmarks, and student mentorship.",
    image: ASSETS.people.faculty,
  },
  {
    name: "Shah Alamgir",
    role: "Director of Finance",
    bio: "Directing financial planning, fiscal management, institutional resources, and long-term infrastructure investments.",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Tanbir Md. Ali Foysal",
    role: "Head of Admin",
    bio: "Leading campus operations, administrative services, institutional coordination, and regulatory compliance.",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md. Ayub",
    role: "Head of Business Development",
    bio: "Managing institutional partnerships, strategic outreach, and community engagement for Spectrum International School.",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Fakhrul Hossain Aman",
    role: "Senior Executive Officer (Admission and Admin Coordinator)",
    bio: "Coordinating student enrollment, parent admissions guidance, and institutional administration workflows.",
    image: ASSETS.people.faculty,
  },
];

export default function ManagementPage() {
  return (
    <div>
      <PageBanner
        title="Management Committee"
        badge="Governance & Leadership"
        subtitle="The dedicated governing body ensuring administrative integrity, campus safety, and long-term educational sustainability."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Management Committee" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Strategic Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Governing Board of Trustees
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Our management committee ensures institutional adherence to legal, ethical, and high educational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.map((member, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-300 shadow-sm transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-36 h-36 mx-auto rounded-xl overflow-hidden shadow-md mb-4 border-2 border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#171E45]">{member.name}</h3>
                  <p className="text-xs font-bold text-[#BF5700] mt-1">{member.role}</p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8AB326]" />
                  <span>Verified SIS Trustee</span>
                </div>
              </div>
            ))}
          </div>

          {/* Published Committee Frameworks */}
          <div className="mt-16 border-t border-gray-100 pt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Institutional Architecture
              </span>
              <h3 className="text-2xl font-extrabold text-[#171E45] mt-1">
                School Governance Structures
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                As described in the official Spectrum International School committee framework:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <span className="text-xs font-bold text-[#BF5700] uppercase tracking-wider">Executive Structure</span>
                <h4 className="text-base font-bold text-[#171E45]">Executive &amp; Management Body</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Directs strategic capital allocation, facility development, admissions oversight, and organizational policies.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <span className="text-xs font-bold text-[#92278F] uppercase tracking-wider">Advisory Structure</span>
                <h4 className="text-base font-bold text-[#171E45]">Academic &amp; Advisory Council</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Provides high-level pedagogical counsel, Cambridge syllabus alignment, and continuous faculty development benchmarks.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <span className="text-xs font-bold text-[#8AB326] uppercase tracking-wider">Shariah Structure</span>
                <h4 className="text-base font-bold text-[#171E45]">Shariah Supervisory Board</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Chaired by Mufti Shamsuddin Zia, providing religious verification for Tarbiyah, Tahfeezul Quran, and ethical campus life.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                <span className="text-xs font-bold text-[#BF5700] uppercase tracking-wider">Curriculum Body</span>
                <h4 className="text-base font-bold text-[#171E45]">Curriculum Development Committee</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Continuously audits Pearson Edexcel and Cambridge IGCSE learning materials, diagnostic assessments, and supplementary texts.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2 sm:col-span-2 lg:col-span-2">
                <span className="text-xs font-bold text-[#92278F] uppercase tracking-wider">Academic Stages</span>
                <h4 className="text-base font-bold text-[#171E45]">Stage Leaders &amp; Preceptor Framework</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Operational academic leadership spanning Pre-School, Key Stage 1 (Grades I-II), Key Stage 2 (Grades III-V), Middle School, and Senior Cambridge O/A-Levels sections.
                </p>
              </div>
            </div>
          </div>

          {/* Published Roster Reference Notice */}
          <div className="mt-12 p-6 bg-orange-50/70 border border-orange-200/80 rounded-2xl text-xs text-orange-950 leading-relaxed space-y-2">
            <p className="font-bold flex items-center gap-2 text-orange-900">
              <span className="w-2 h-2 rounded-full bg-[#BF5700] inline-block"></span>
              Official Published Roster Information
            </p>
            <p>
              The school’s general committee page describes advisory, executive, Sharia, curriculum, and academic-stage structures without naming committee members or assigning named stage leaders. Executive leadership members are reproduced in accordance with published messages and administrative directories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
