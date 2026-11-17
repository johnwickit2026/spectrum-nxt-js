import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Support Team | Spectrum International School",
  description: "Campus security, hygiene caregivers, maintenance, and logistics team at Spectrum International School.",
};

const supportStaff = [
  {
    name: "Kamal Hossain",
    role: "Campus Facilities & Logistics Manager",
    department: "Logistics & Maintenance",
    image: ASSETS.people.teachersStaff,
    note: "Oversees building readiness, generator backup, air filtration, and event logistics.",
  },
  {
    name: "Abdur Rashid",
    role: "Chief Security Officer",
    department: "Campus Security",
    image: ASSETS.people.founderCeo,
    note: "Managing 24/7 CCTV surveillance, gate checkpoints, visitor logs, and student dismissal safety.",
  },
  {
    name: "Salma Begum",
    role: "Senior Childcare & Hygiene Supervisor",
    department: "Pastoral Support",
    image: ASSETS.people.faculty,
    note: "Ensuring sanitization, first-aid assistance, and gentle care for Play Group and Nursery learners.",
  },
  {
    name: "Delwar Hossain",
    role: "Transport & Dispatch Supervisor",
    department: "Transportation",
    image: ASSETS.people.teachersStaff,
    note: "Coordinating school van fleet, route timing, and driver safety certifications.",
  },
];

export default function SupportTeamPage() {
  return (
    <div>
      <PageBanner
        title="Support Team"
        badge="Care & Safety"
        subtitle="The essential team working tirelessly behind the scenes to maintain campus security, pristine hygiene, and logistical comfort."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Support Team" }]}
        bgImage={ASSETS.campus.corridor}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
              Everyday Heroes
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Safety, Logistics & Facility Care
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Providing a spotless, secure, and nurturing campus environment where children thrive every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, i) => (
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
                  <span className="text-[10px] font-bold text-[#8AB326] uppercase tracking-wider bg-green-100 px-2 py-0.5 rounded">
                    {staff.department}
                  </span>
                  <h3 className="text-base font-bold text-[#171E45] mt-2">{staff.name}</h3>
                  <p className="text-xs font-semibold text-gray-700">{staff.role}</p>
                  <p className="text-[11px] text-gray-600 mt-3 leading-relaxed">{staff.note}</p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#8AB326]" />
                  <span>Pastoral Care Team</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
