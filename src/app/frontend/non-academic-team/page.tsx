import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Mail, Phone, Briefcase } from "lucide-react";

export const metadata = {
  title: "Non Academic Team | Spectrum International School",
  description: "Official published non-academic, administrative, and operations staff directory of Spectrum International School.",
};

const nonAcademicStaff = [
  {
    name: "Nur Ahammed",
    role: "CEO & Founder",
    department: "Executive Leadership",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Sharmin Akter Eva",
    role: "Vice-Principal",
    department: "Academic Leadership",
    image: ASSETS.people.faculty,
  },
  {
    name: "Shah Alamgir",
    role: "Director of Finance",
    department: "Finance & Accounts",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Tanbir Md. Ali Foysal",
    role: "Head of Admin",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md. Ayub",
    role: "Head of Business Development",
    department: "Institutional Development",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Fakhrul Hossain Aman",
    role: "Senior Executive Officer (Admission & Admin Coordinator)",
    department: "Admissions & Admin",
    image: ASSETS.people.faculty,
  },
  {
    name: "G.M. Arafat Uddin",
    role: "Assistant Manager",
    department: "Operations",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md. Hadaitullah",
    role: "Assistant Manager",
    department: "Operations",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md. Samir Uddin",
    role: "Assistant Manager",
    department: "Operations",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Mohammed Saiful Abedin",
    role: "Senior IT Officer",
    department: "IT Infrastructure",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Rahat Rahman",
    role: "Admin & IT Officer",
    department: "Administration & IT",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md Nazim Uddin Noman",
    role: "Admission Officer",
    department: "Admissions Desk",
    image: ASSETS.people.faculty,
  },
  {
    name: "Mir Mosharof Hossen",
    role: "Accounts Officer",
    department: "Finance & Accounts",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Abdur Razzak Pappu",
    role: "Officer",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Mohammed Kaizer Siddiquee",
    role: "Security In charge",
    department: "Campus Safety & Security",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Aminul Islam Chowdhury",
    role: "Executive",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md. Abeer-Ul Islam",
    role: "Executive",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Al-Amin Chowdhury",
    role: "Executive",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Md Abdullah Al Masud",
    role: "Executive",
    department: "Administration",
    image: ASSETS.people.teachersStaff,
  },
];

export default function NonAcademicTeamPage() {
  return (
    <div>
      <PageBanner
        title="Non Academic Team"
        badge="Administration & Desk"
        subtitle="The dedicated professionals driving admissions, accounts, communications, and institutional services."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Non Academic Team" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Administrative Backbone
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Operations & Administration
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Official published directory of non-academic and administrative team members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nonAcademicStaff.map((staff, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-purple-300 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-sm mb-4 border border-gray-200/50">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#92278F] uppercase tracking-wider bg-purple-100 px-2 py-0.5 rounded">
                    {staff.department}
                  </span>
                  <h3 className="text-sm font-bold text-[#171E45] mt-2 line-clamp-1">{staff.name}</h3>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5 leading-snug">{staff.role}</p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#BF5700]" />
                  <span>Administrative Staff</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
