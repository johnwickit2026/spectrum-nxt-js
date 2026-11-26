import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
import { ASSETS } from "@/lib/assets";
import { Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Advisor Committee | Spectrum International School",
  description: "Senior academic and educational advisory committee of Spectrum International School.",
};

const advisors = [
  {
    name: "Sharmin Akter Eva",
    role: "Vice Principal & Academic Head",
    bio: "Guiding pedagogical benchmarks, Cambridge curriculum alignment, continuous teacher training, and academic quality assurance.",
    image: ASSETS.people.faculty,
  },
  {
    name: "Shaykh Mahmudul Hasan",
    role: "Scholar & Head of Arabic",
    bio: "Directing Arabic language acquisition frameworks, Islamic curriculum standards, and moral development (Tarbiyah).",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Md. Ataullah",
    role: "Teacher- Curriculum and Lang.",
    bio: "Advising on English and mother-tongue language integration, phonics progression, and Cambridge curriculum assessment.",
    image: ASSETS.people.teachersStaff,
  },
];

export default function AdvisorPage() {
  return (
    <div>
      <PageBanner
        title="Advisor Committee"
        badge="External Counsel"
        subtitle="Eminent scholars and academic advisors counseling Spectrum International School on global curricula and institutional growth."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Advisor Committee" }]}
        bgImage={ASSETS.campus.corridor}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Academic Counsel
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Distinguished Advisory Council
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Ensuring our teaching methods and curriculum remain at the vanguard of modern education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {advisors.map((adv, i) => (
              <ReflectiveCard
                key={i}
                name={adv.name}
                role={adv.role}
                badge="Advisory Council"
                status="Distinguished"
                statusColor="#92278F"
                idLabel="Advisory Seal"
                idValue={`SIS-ADV-00${i + 1}`}
                avatar={adv.image}
                theme="dark"
                metalness={0.9}
                roughness={0.3}
                blurStrength={6}
                shine={1.2}
                glare={0.6}
                width={320}
                height={460}
                radius={24}
                className="shadow-2xl"
              />
            ))}
          </div>

          {/* Published Committee Framework Notice */}
          <div className="mt-12 p-6 bg-purple-50/70 border border-purple-200/80 rounded-2xl text-xs text-purple-950 leading-relaxed space-y-2">
            <p className="font-bold flex items-center gap-2 text-purple-900">
              <span className="w-2 h-2 rounded-full bg-[#92278F] inline-block"></span>
              Official Published Roster Information
            </p>
            <p>
              The school’s general committee page describes advisory, executive, Sharia, curriculum, and academic-stage structures without naming committee members or assigning named stage leaders. Academic and advisory leads are presented here from the official published faculty and academic leadership roster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
