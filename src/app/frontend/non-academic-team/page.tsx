import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Mail, Phone, Briefcase } from "lucide-react";

export const metadata = {
  title: "Non Academic Team | Spectrum International School",
  description: "Administrative, admissions, accounts, and operational team members at Spectrum International School.",
};

const nonAcademicStaff = [
  {
    name: "Tariq Hasan",
    role: "Chief Finance & Accounts Officer",
    department: "Finance & Accounts",
    phone: "+880 1730-369686",
    email: "accounts@spectrumintlschool.com",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Mohammad Saiful Islam",
    role: "Admissions & Public Relations Officer",
    department: "Admissions Desk",
    phone: "+880 1799-369685",
    email: "admissions@spectrumintlschool.com",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Farzana Yasmin",
    role: "Executive Secretary to CEO",
    department: "Secretariat",
    phone: "+880 1799-369685",
    email: "ceo.office@spectrumintlschool.com",
    image: ASSETS.people.faculty,
  },
  {
    name: "Jamil Chowdhury",
    role: "IT & Systems Administrator",
    department: "IT Infrastructure & Portals",
    phone: "0248318285",
    email: "it@spectrumintlschool.com",
    image: ASSETS.people.teachersStaff,
  },
];

export default function NonAcademicTeamPage() {
  return (
    <div>
      <PageBanner
        title="Non Academic Team"
        badge="Administration & Desk"
        subtitle="The dedicated professionals driving admissions, accounts, communications, and digital services."
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
              Ensuring seamless parent interactions, timely notice delivery, and fiscal transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonAcademicStaff.map((staff, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-sm mb-4">
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
                  <h3 className="text-base font-bold text-[#171E45] mt-2">{staff.name}</h3>
                  <p className="text-xs font-semibold text-gray-700">{staff.role}</p>

                  <div className="mt-4 pt-3 border-t border-gray-200/60 text-[11px] text-gray-600 space-y-1">
                    <p className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#BF5700]" />
                      <span>{staff.phone}</span>
                    </p>
                    <p className="flex items-center gap-1.5 truncate">
                      <Mail className="w-3 h-3 text-[#BF5700]" />
                      <span className="truncate">{staff.email}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/60 mt-3 text-[11px] text-gray-500 flex items-center gap-1.5">
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
