import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Users, Award, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Professional Staff Members | Spectrum International School",
  description: "Excellence in educational governance, counseling, and school operations at Spectrum International School.",
};

export default function ProfessionalStaffPage() {
  return (
    <div>
      <PageBanner
        title="Professional Staff Members"
        badge="Institutional Standards"
        subtitle="Highly trained educators, caring counselors, and skilled administrators upholding professionalism at SIS."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Professional Staff Members" }]}
        bgImage={ASSETS.people.teachersStaff}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Integrity & Competence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                A United Team Dedicated to Student Success
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Recruited through competitive selection procedures, our educators and administrative officers embody integrity, patience, and subject mastery.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Every staff member undergoes background screening, child safeguarding training, and regular pedagogical upskilling in coordination with the British Council.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.people.teachersStaff}
                alt="Professional staff members at Spectrum"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
