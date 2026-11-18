import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Support Team | Spectrum International School",
  description: "Official published support staff, campus security, hygiene caregivers, and facilities team at Spectrum International School.",
};

const supportStaff = [
  { name: "Morshed Alam", role: "Jr. Officer", department: "Operations", image: ASSETS.people.teachersStaff },
  { name: "Saiful Islam Shipon", role: "Jr. Officer", department: "Operations", image: ASSETS.people.teachersStaff },
  { name: "Shahadat Hossain", role: "Support Staff", department: "Facilities", image: ASSETS.people.teachersStaff },
  { name: "Shayla Akter", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Md. Ismail", role: "Support Staff", department: "Facilities", image: ASSETS.people.teachersStaff },
  { name: "Monir Hossain", role: "Cook", department: "Dining & Catering", image: ASSETS.people.teachersStaff },
  { name: "Israfil Sujon", role: "Cook", department: "Dining & Catering", image: ASSETS.people.teachersStaff },
  { name: "Md. Azadul", role: "Support Staff", department: "Facilities", image: ASSETS.people.teachersStaff },
  { name: "Pear Ahammed", role: "Security", department: "Campus Security", image: ASSETS.people.teachersStaff },
  { name: "Sazzat Hossain", role: "Support Staff", department: "Facilities", image: ASSETS.people.teachersStaff },
  { name: "Tania Akter", role: "Cleaner", department: "Hygiene & Housekeeping", image: ASSETS.people.faculty },
  { name: "Afroza Akter", role: "Support Staff", department: "Pastoral Support", image: ASSETS.people.faculty },
  { name: "Sharmin Akter", role: "Support Staff", department: "Pastoral Support", image: ASSETS.people.faculty },
  { name: "Halima Begum", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Muhammad Mosarof Hossain", role: "Security", department: "Campus Security", image: ASSETS.people.teachersStaff },
  { name: "Mitali Akter", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Md. Monir Hossain", role: "Support Staff (Novel House)", department: "Novel House", image: ASSETS.people.teachersStaff },
  { name: "Bristy Akter", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Shohana Akter", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Md. Shafiqul", role: "Support Staff", department: "Facilities", image: ASSETS.people.teachersStaff },
  { name: "Bobi Begum", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Rita Akter", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Marjana Khan", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
  { name: "Arifa Chowdhury", role: "Support Staff", department: "Care & Hygiene", image: ASSETS.people.faculty },
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
              Official published directory of campus caregivers, security officers, and support staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-green-300 shadow-sm transition-all flex flex-col justify-between"
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
                  <span className="text-[10px] font-bold text-[#8AB326] uppercase tracking-wider bg-green-100 px-2 py-0.5 rounded">
                    {staff.department}
                  </span>
                  <h3 className="text-sm font-bold text-[#171E45] mt-2 line-clamp-1">{staff.name}</h3>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5 leading-snug">{staff.role}</p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#8AB326]" />
                  <span>Support Services</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
