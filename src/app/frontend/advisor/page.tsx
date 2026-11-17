import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Advisor Committee | Spectrum International School",
  description: "Senior academic and educational advisory committee of Spectrum International School.",
};

const advisors = [
  {
    name: "Dr. Tahmina Begum",
    role: "Senior Education Advisor & Pedagogy Specialist",
    bio: "Former University Professor and curriculum consultant advising on international pedagogical benchmarks, teacher training, and cognitive development.",
    image: ASSETS.people.faculty,
  },
  {
    name: "Prof. Dr. Anisur Rahman",
    role: "STEM Curriculum Consultant",
    bio: "Renowned scientist and educator guiding the integration of experimental science inquiry, STEM robotics, and physics laboratories.",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Syed Kamrul Ahsan",
    role: "Senior Educational Policy Advisor",
    bio: "Career educationist with three decades of experience in Cambridge International curricula and secondary education standards in Bangladesh.",
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((adv, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-36 h-36 mx-auto rounded-xl overflow-hidden shadow-md mb-4 border-2 border-white">
                    <Image
                      src={adv.image}
                      alt={adv.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#171E45]">{adv.name}</h3>
                  <p className="text-xs font-bold text-[#92278F] mt-1">{adv.role}</p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">{adv.bio}</p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#92278F]" />
                  <span>Academic Consultant</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
