import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Building2, Laptop, FlaskConical, BookOpen, Trophy, Globe, ArrowRight, ShieldCheck, Gamepad2, Users, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "School Campus Facilities & Clubs | Spectrum International School",
  description: "Explore the modern facilities, clubs, playzones, and extracurricular activities at Spectrum International School.",
};

const schoolFacilities = [
  {
    title: "Interactive Digital Classrooms",
    desc: "Acoustically sound, ventilated rooms fitted with interactive projectors, smart digital displays, and ergonomic student seating.",
    icon: Building2,
    href: "/frontend/campus-facilities",
    image: ASSETS.academics.classroom1,
  },
  {
    title: "Lab Facilities (Science & STEM)",
    desc: "Multi-disciplinary laboratories equipped with specialized apparatus, digital balances, and safety gear for Physics, Chemistry, and Biology.",
    icon: FlaskConical,
    href: "/frontend/science-lab",
    image: ASSETS.facilities.scienceLab,
  },
  {
    title: "ICT & Computer Laboratories",
    desc: "Networked high-performance workstations, high-speed broadband connectivity, robotics equipment, and coding software.",
    icon: Laptop,
    href: "/frontend/ict-lab",
    image: ASSETS.facilities.ictLab,
  },
  {
    title: "Comprehensive Library",
    desc: "An enriched collection of British curriculum textbooks, reference encyclopedias, Islamic literature, and quiet reading alcoves.",
    icon: BookOpen,
    href: "/frontend/library",
    image: ASSETS.facilities.library,
  },
  {
    title: "Indoor Playzone",
    desc: "A vibrant, child-safe indoor arena equipped with soft-play apparatus, sensory materials, and Montessori motor-skill toys.",
    icon: Gamepad2,
    href: "/frontend/child-friendly-environment",
    image: ASSETS.activities.creativeArt,
  },
  {
    title: "Sports Facilities",
    desc: "Indoor sports arena, table tennis, badminton, karate training facilities, and venues for athletic practice.",
    icon: Trophy,
    href: "/frontend/sports-club",
    image: ASSETS.facilities.sportsClub,
  },
  {
    title: "24/7 CCTV Surveillance",
    desc: "Complete campus-wide security with HD CCTV monitoring, secure entrance gates, fire prevention, and dedicated caregivers.",
    icon: ShieldCheck,
    href: "/frontend/child-friendly-environment",
    image: ASSETS.campus.building,
  },
  {
    title: "Dedicated Club Facilities",
    desc: "Specialized activity rooms fostering teamwork, cultural expressions, scientific inventions, and language debates.",
    icon: Users,
    href: "/frontend/campus-facilities",
    image: ASSETS.activities.fieldTrip,
  },
];

const clubActivities = [
  {
    name: "Language Club (English & Arabic)",
    focus: "Public speaking, spelling bee prep, debate tournaments, creative writing, and classical Arabic comprehension.",
    tag: "Communication",
  },
  {
    name: "Computer Clubs",
    focus: "Coding basics, computational thinking, robotics tinkering, digital media, and safe internet ethics.",
    tag: "Technology",
  },
  {
    name: "Science Clubs",
    focus: "Hands-on experiments, scientific investigation, environmental studies, and preparation for annual Science Fairs.",
    tag: "Innovation",
  },
  {
    name: "Reading Club",
    focus: "Literary book circles, reading milestones, story analysis, and annual Book Fair celebrations.",
    tag: "Literature",
  },
  {
    name: "Cultural Club",
    focus: "Islamic nasheed recitation, calligraphy art, stage presentation, and community service initiatives.",
    tag: "Arts & Culture",
  },
];

const extracurricularEvents = [
  "5th Anniversary Celebration 2025",
  "Karate Learning Sessions",
  "Spelling Bee Competition 2026",
  "Annual Sports Day 2026",
  "Science Fair 2026",
  "Pearson & British Council Celebration",
  "Indoor Sports Tournaments",
  "Naseeha Sessions & Spiritual Reminders",
  "Health Check-up Camp 2026",
];

export default function CampusFacilitiesPage() {
  return (
    <div>
      <PageBanner
        title="School Campus Facilities & Clubs"
        badge="State-of-the-Art Infrastructure"
        subtitle="Designed to cultivate intellectual curiosity, physical vigor, scientific experimentation, and ethical character."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Campus Facilities" }]}
        bgImage={ASSETS.campus.facilities}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {/* Section 1: Facilities */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Modern Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                School Facilities
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Every space at Spectrum International School is engineered to provide safety, hygiene, digital engagement, and academic excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schoolFacilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden">
                        <Image
                          src={fac.image}
                          alt={fac.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors">
                          {fac.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed">{fac.desc}</p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
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

          {/* Section 2: Club Activities */}
          <div className="border-t border-gray-100 pt-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Co-Curricular Engagement
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Club Activities
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Nurturing diverse student talents and leadership skills beyond textbook learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubActivities.map((club, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBF1E3]/50 p-6 rounded-2xl border border-[#EBE8E2] shadow-sm space-y-3"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#92278F]/10 text-[#92278F] inline-block">
                    {club.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#171E45]">{club.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{club.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Extracurricular Activities from Prospectus */}
          <div className="bg-[#171E45] text-white rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FC800A]">
                Beyond the Classroom
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Extracurricular Activities & Major Events
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Highlights from our annual student activity calendar designed to build sportsmanship, intellectual rivalry, physical fitness, and community spirit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {extracurricularEvents.map((evt, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 text-xs text-gray-100 flex items-center gap-3"
                >
                  <Sparkles className="w-4 h-4 text-[#FC800A] shrink-0" />
                  <span className="font-semibold">{evt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
