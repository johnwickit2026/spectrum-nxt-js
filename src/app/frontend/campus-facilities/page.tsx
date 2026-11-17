import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Building2, Laptop, FlaskConical, BookOpen, Trophy, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "School Campus Facilities | Spectrum International School",
  description: "Explore the modern facilities, science and ICT labs, library, and sports clubs at Spectrum International School.",
};

const facilities = [
  {
    title: "Multimedia Classrooms",
    desc: "Acoustically insulated, centrally air-conditioned rooms fitted with interactive projectors and ergonomic student desks.",
    icon: Building2,
    href: "/frontend/campus-facilities",
    image: ASSETS.academics.classroom1,
  },
  {
    title: "ICT & Computing Laboratory",
    desc: "Networked high-performance workstations, broadband connectivity, robotics equipment, and coding software.",
    icon: Laptop,
    href: "/frontend/ict-lab",
    image: ASSETS.facilities.ictLab,
  },
  {
    title: "Multi-Disciplinary Science Labs",
    desc: "Dedicated apparatus, digital balances, microscopes, and chemical fume chambers for Physics, Chemistry, and Biology.",
    icon: FlaskConical,
    href: "/frontend/science-lab",
    image: ASSETS.facilities.scienceLab,
  },
  {
    title: "Comprehensive Library",
    desc: "An extensive collection of British curriculum textbooks, reference encyclopedias, Islamic studies, and periodicals.",
    icon: BookOpen,
    href: "/frontend/library",
    image: ASSETS.facilities.library,
  },
  {
    title: "Sports & Athletics Club",
    desc: "Indoor sports facilities, table tennis, badminton, martial arts training, and annual track & field competitions.",
    icon: Trophy,
    href: "/frontend/sports-club",
    image: ASSETS.facilities.sportsClub,
  },
  {
    title: "English & Arabic Language Club",
    desc: "Fostering articulation, competitive public debate, creative writing, and classical Arabic linguistic comprehension.",
    icon: Globe,
    href: "/frontend/language-club",
    image: ASSETS.activities.fieldTrip,
  },
];

export default function CampusFacilitiesPage() {
  return (
    <div>
      <PageBanner
        title="School Campus Facilities"
        badge="State-of-the-Art Infrastructure"
        subtitle="Designed to cultivate intellectual curiosity, physical vigor, and scientific experimentation in a secure environment."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Campus Facilities" }]}
        bgImage={ASSETS.campus.facilities}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Khadem Tower Campus
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Purpose-Built Learning Environments
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Every space at SIS is engineered to provide safety, hygiene, multimedia engagement, and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">{fac.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={fac.href}
                      className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
