import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck, BookOpen } from "lucide-react";

export const metadata = {
  title: "Sharia Committee | Spectrum International School",
  description: "Islamic scholars and Shariah Supervisory Committee overseeing moral curriculum, Tahfeezul Quran, and ethical campus life.",
};

const scholars = [
  {
    name: "Mufti Shamsuddin Zia",
    role: "Chairman, Shariah Supervisory Committee",
    bio: "Eminent Islamic scholar providing Shariah oversight, moral guidance, and Islamic curriculum direction for Spectrum International School.",
    image: ASSETS.activities.hifzDepartment,
  },
  {
    name: "Shaykh Mahmudul Hasan",
    role: "Scholar & Head of Arabic",
    bio: "Distinguished Islamic scholar directing Arabic language pedagogy, Quranic comprehension, and Islamic foundational studies.",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Mahmudul Hasan",
    role: "Lead Teacher - Al Quran & Religious Dept & Preceptor - Hifz",
    bio: "Senior Quran preceptor leading the Tahfeezul Quran department, Tajweed recitation standards, and daily Tarbiyah mentoring.",
    image: ASSETS.people.faculty,
  },
  {
    name: "Zakir Bin Mostak Azhari",
    role: "Lead Teacher - Al Quran & Religious Department",
    bio: "Al-Azhar trained scholar guiding Quranic recitation, Islamic studies syllabus, and spiritual development across grades.",
    image: ASSETS.activities.hifzDepartment,
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
              Spiritual & Ethical Governance
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Sharia Advisory Board
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Ensuring all religious, moral, and cultural instructions align faithfully with the Quran and authentic Sunnah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholars.map((sch, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-36 h-36 mx-auto rounded-xl overflow-hidden shadow-md mb-4 border-2 border-white">
                    <Image
                      src={sch.image}
                      alt={sch.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#171E45]">{sch.name}</h3>
                  <p className="text-xs font-bold text-[#8AB326] mt-1">{sch.role}</p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">{sch.bio}</p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8AB326]" />
                  <span>Certified Islamic Jurist / Qari</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
