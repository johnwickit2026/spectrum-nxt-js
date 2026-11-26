import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { 
  Users, 
  Sparkles, 
  Globe, 
  Trophy, 
  Cpu, 
  Microscope, 
  BookOpen, 
  Palette, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Club Facilities & Co-Curricular Societies | Spectrum International School",
  description: "Explore student societies and clubs at SIS including Sports, Language, Computer, Science, Reading, and Cultural clubs.",
};

const clubs = [
  {
    id: "sports-club",
    title: "Sports Club & Physical Fitness",
    tagline: "Athletic Excellence, Karate & Team Spirit",
    description: "Comprehensive athletic programs including martial arts (Karate), football, badminton, table tennis, gymnastics, and annual sports tournaments.",
    image: ASSETS.facilities.sportsClub,
    icon: Trophy,
    color: "#BF5700",
    href: "/frontend/sports-club",
    features: ["Inter-House Football & Cricket", "Shotokan Karate Martial Arts", "Badminton & Table Tennis", "Annual Track & Field Meets"]
  },
  {
    id: "language-club",
    title: "Language Club (English & Arabic)",
    tagline: "Eloquence, Parliamentary Debate & Tajweed",
    description: "Fosters public speaking, creative composition, Spelling Bee championship preparation, and classical Quranic Arabic pronunciation.",
    image: ASSETS.activities.bookFestival,
    icon: Globe,
    color: "#92278F",
    href: "/frontend/language-club",
    features: ["British Council Spelling Bee Preparation", "Inter-School Parliamentary Debate", "Classical Arabic Makharij & Tajweed", "Creative Writing Anthologies"]
  },
  {
    id: "computer-club",
    title: "ICT & Robotics Innovation Club",
    tagline: "Computational Thinking, Coding & AI",
    description: "Empowers students with coding fundamentals in Python and Scratch, sensor robotics, digital graphics design, and ethical cyber citizenship.",
    image: ASSETS.facilities.ictLab,
    icon: Cpu,
    color: "#0284c7",
    href: "/frontend/computer-lab",
    features: ["Python & Scratch Visual Programming", "Arduino Microcontroller Robotics", "Web Design & UI/UX Foundations", "National IT Olympiad Mentorship"]
  },
  {
    id: "science-club",
    title: "Science Exploration & STEM Club",
    tagline: "Tactile Experiments & Discovery",
    description: "Engages young scientists in hands-on chemistry investigations, renewable energy models, biology microscopics, and annual science fairs.",
    image: ASSETS.facilities.scienceLab,
    icon: Microscope,
    color: "#16a34a",
    href: "/frontend/science-lab",
    features: ["Laboratory Science Fair Projects", "Solar & Hydro Energy Prototyping", "Environmental Conservation Research", "National Science Olympiad Coaching"]
  },
  {
    id: "reading-club",
    title: "Literary Reading & Book Circle",
    tagline: "Cultivating Deep Inquiry & Thought",
    description: "Dedicated to nurturing lifelong reading passions, author study circles, book review debates, and our annual campus Book Fair celebrations.",
    image: ASSETS.facilities.library,
    icon: BookOpen,
    color: "#d97706",
    href: "/frontend/library",
    features: ["Weekly Guided Reading Circles", "Author Dialogue Sessions", "Annual SIS Book Fair Participation", "Young Writers Guild"]
  },
  {
    id: "cultural-club",
    title: "Cultural & Islamic Heritage Club",
    tagline: "Islamic Nasheeds, Art & Tarbiyah",
    description: "Inspires creative artistic expression through Islamic nasheeds, Arabic calligraphy, traditional stage presentations, and Bengali heritage celebrations like Pitha Utshob.",
    image: ASSETS.activities.hifzDepartment,
    icon: Palette,
    color: "#8AB326",
    href: "/frontend/events",
    features: ["Islamic Nasheed & Recitation Choir", "Classical Arabic Calligraphy Art", "Pitha Utshob Heritage Celebrations", "Community Service & Charity Drives"]
  }
];

export default function ClubFacilitiesPage() {
  return (
    <div>
      <PageBanner
        title="Club Facilities & Societies"
        badge="Co-Curricular Engagement"
        subtitle="Empowering students beyond the classroom with leadership, athletics, linguistic eloquence, STEM inquiry, and cultural enrichment."
        breadcrumbs={[
          { label: "School Facilities", href: "/frontend/campus-facilities" },
          { label: "Club Facilities" }
        ]}
        bgImage={ASSETS.facilities.sportsClub}
      />

      <div className="section-padding bg-gray-50 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Student Societies
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Active Clubs Under Our Facilities
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Every student from Primary to A-Levels participates in certified co-curricular clubs fostering teamwork, sportsmanship, and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={club.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <Image
                      src={club.image}
                      alt={club.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div 
                      className="absolute top-3 left-3 text-white p-2.5 rounded-xl shadow-md"
                      style={{ backgroundColor: club.color }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {club.tagline}
                      </span>
                      <h3 className="text-lg font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors">
                        {club.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {club.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-1.5">
                      <p className="text-[11px] font-bold text-gray-700 mb-1">Key Activities:</p>
                      {club.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href={club.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors"
                      >
                        <span>Learn More &amp; Schedule</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
