import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
              {shariaSupervisoryCommittee.map((member, i) => (
                <ReflectiveCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  badge="Shariah Board"
                  status="Supervisory"
                  statusColor="#8AB326"
                  idLabel="Shariah Protocol"
                  idValue={`SIS-SHAR-00${i + 1}`}
                  avatar={member.image}
                  theme="dark"
                  metalness={0.92}
                  roughness={0.28}
                  blurStrength={6}
                  shine={1.2}
                  glare={0.65}
                  width={310}
                  height={450}
                  radius={24}
                  className="shadow-2xl"
                />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {residentIslamicFaculty.map((sch, i) => (
                <ReflectiveCard
                  key={i}
                  name={sch.name}
                  role={sch.role}
                  badge="Islamic Scholar"
                  status="Resident"
                  statusColor="#BF5700"
                  idLabel="Faculty Roster"
                  idValue={`SIS-ISLAM-00${i + 1}`}
                  avatar={sch.image}
                  theme="dark"
                  metalness={0.9}
                  roughness={0.3}
                  blurStrength={6}
                  shine={1.2}
                  glare={0.6}
                  width={280}
                  height={440}
                  radius={22}
                  className="shadow-2xl"
                />
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
