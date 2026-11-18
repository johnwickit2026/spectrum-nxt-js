import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck, BookOpen, UserCheck } from "lucide-react";

export const metadata = {
  title: "Sharia Committee | Spectrum International School",
  description: "Islamic scholars and Shariah Supervisory Committee overseeing moral curriculum, Tahfeezul Quran, and ethical campus life.",
};

const shariaSupervisoryCommittee = [
  {
    name: "Mufti Shamsuddin Zia",
    role: "Chairman, Shariah Supervisory Committee",
    bio: "Eminent Islamic scholar presiding over Shariah oversight, Islamic moral curriculum authenticity, and spiritual guidance for SIS.",
    image: ASSETS.activities.hifzDepartment,
    isNamed: true,
  },
  {
    name: "Member Two",
    role: "Member, Shariah Supervisory Committee",
    bio: "Shariah Supervisory Committee member reviewing Islamic ethics, campus Tarbiyah, and institutional alignment with authentic Islamic guidelines.",
    image: ASSETS.activities.hifzDepartment,
    isNamed: false,
  },
  {
    name: "Member Three",
    role: "Member, Shariah Supervisory Committee",
    bio: "Shariah Supervisory Committee member counseling on Quranic memorization milestones, Islamic character formation, and Halal campus practices.",
    image: ASSETS.facilities.library,
    isNamed: false,
  },
];

const residentIslamicFaculty = [
  {
    name: "Shaykh Mahmudul Hasan",
    role: "Scholar & Head of Arabic",
    bio: "Distinguished scholar directing Arabic language pedagogy, Quranic comprehension, and Islamic foundational studies.",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Mahmudul Hasan",
    role: "Lead Teacher- Al Quran and Religious Department & Preceptor- Hifz",
    bio: "Senior Quran preceptor leading the Tahfeezul Quran department, Tajweed recitation standards, and daily Tarbiyah mentoring.",
    image: ASSETS.people.faculty,
  },
  {
    name: "Zakir Bin Mostak Azhari",
    role: "Lead Teacher- Al Quran and Religious Department",
    bio: "Al-Azhar trained scholar guiding Quranic recitation, Islamic studies syllabus, and spiritual development across grades.",
    image: ASSETS.activities.hifzDepartment,
  },
  {
    name: "Ashraf Uddin Munna",
    role: "Lead Teacher- Al Quran And Religious Department, Key Stage- 1",
    bio: "Lead educator guiding early foundational Quranic recitation, Tajweed, and character education for Key Stage 1 learners.",
    image: ASSETS.people.teachersStaff,
  },
];

export default function ShariaPage() {
  return (
    <div>
      <PageBanner
        title="Sharia Committee"
        badge="Moral & Spiritual Oversight"
        subtitle="Islamic scholars guiding our Tarbiyah frameworks, Tahfeezul Quran syllabus, and ethical school conduct."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Sharia Committee" }]}
        bgImage={ASSETS.activities.hifzDepartment}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Official Shariah Supervisory Committee */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Supervisory Governance
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Shariah Supervisory Committee
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Official published Shariah governance body overseeing religious and moral compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {shariaSupervisoryCommittee.map((member, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm text-center flex flex-col justify-between hover:border-green-300 transition-all"
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
                    <h3 className="text-lg font-bold text-[#171E45]">{member.name}</h3>
                    <p className="text-xs font-bold text-[#8AB326] mt-1">{member.role}</p>
                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8AB326]" />
                    <span>Shariah Supervisory Committee</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resident Islamic Faculty & Scholars */}
          <div className="border-t border-gray-100 pt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Academic Instruction & Tarbiyah
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Resident Islamic Scholars & Quran Faculty
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Senior scholars and lead religious educators managing daily Quranic recitation, Hifz, and Arabic departments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {residentIslamicFaculty.map((sch, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm text-center flex flex-col justify-between hover:border-orange-300 transition-all"
                >
                  <div>
                    <div className="relative w-32 h-32 mx-auto rounded-xl overflow-hidden shadow-sm mb-4 border-2 border-white">
                      <Image
                        src={sch.image}
                        alt={sch.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-[#171E45] line-clamp-1">{sch.name}</h4>
                    <p className="text-[11px] font-bold text-[#BF5700] mt-1 leading-snug">{sch.role}</p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{sch.bio}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#92278F]" />
                    <span>Resident Islamic Scholar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Published Roster Reference Notice */}
          <div className="p-6 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs text-emerald-950 leading-relaxed space-y-2">
            <p className="font-bold flex items-center gap-2 text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-[#8AB326] inline-block"></span>
              Official Published Roster Information
            </p>
            <p>
              On the official Spectrum International School public website, the Shariah Supervisory Committee roster publishes Chairman Mufti Shamsuddin Zia along with “Member Two” and “Member Three” (without individual personal names).
            </p>
            <p className="text-[11px] text-emerald-800/90">
              The school’s general committee page also describes advisory, executive, Sharia, curriculum, and academic-stage structures as part of its comprehensive governance framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
