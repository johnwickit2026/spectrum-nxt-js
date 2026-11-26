import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {supportStaff.map((staff, i) => (
              <ReflectiveCard
                key={i}
                name={staff.name}
                role={staff.role}
                badge={staff.department}
                status="Support"
                statusColor="#8AB326"
                idLabel="Campus Staff ID"
                idValue={`SIS-SUP-${String(i + 1).padStart(3, "0")}`}
                avatar={staff.image}
                theme="dark"
                metalness={0.9}
                roughness={0.3}
                blurStrength={6}
                shine={1.2}
                glare={0.6}
                width={290}
                height={440}
                radius={22}
                className="shadow-2xl"
              />
            ))}
          </div>

          {/* Published Roster Reference Notice */}
          <div className="mt-12 p-6 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs text-emerald-950 leading-relaxed space-y-2">
            <p className="font-bold flex items-center gap-2 text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-[#8AB326] inline-block"></span>
              Official Published Roster Information
            </p>
            <p>
              This directory reproduces the official 24 support staff members published on the Spectrum International School Support Team directory.
            </p>
            <p className="text-[11px] text-emerald-800/90">
              Note: The school&apos;s published records also list an Afroza Akter under the Teachers directory as Teacher; published titles and names are preserved as officially listed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
