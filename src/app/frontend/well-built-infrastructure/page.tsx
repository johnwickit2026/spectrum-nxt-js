import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Building2, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Well-Built Infrastructure | Spectrum International School",
  description: "Modern campus facilities, air-conditioned rooms, elevator access, and lab infrastructure at Khadem Tower, SIS.",
};

export default function InfrastructurePage() {
  return (
    <div>
      <PageBanner
        title="Well-Built Infrastructure"
        badge="Campus & Facilities"
        subtitle="Modern architecture, high-standard safety equipment, and well-designed learning spaces at Khadem Tower, Shantinagar."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Well-Built Infrastructure" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Modern Architectural Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Engineered for Comfort, Focus, and Safety
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spectrum International School occupies prominent floors in Khadem Tower, Shantinagar. Our infrastructure is purposefully engineered to eliminate urban distractions, providing an oasis of clean, focused learning.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Featuring full generator power backup, central climate control, specialized physics/chemistry/biology lab stations, high-speed fiber internet, and dedicated cafeteria areas, every detail promotes academic focus.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.campus.corridor}
                alt="Well built campus corridor at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Building2 className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Spacious Classrooms</h4>
              <p className="text-xs text-gray-600">Acoustically treated, air-conditioned rooms equipped with smart projectors and sound systems.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Zap className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Continuous Power</h4>
              <p className="text-xs text-gray-600">Heavy-duty automatic diesel generator ensuring unhindered lab sessions and exams.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Fire & Structural Safety</h4>
              <p className="text-xs text-gray-600">Certified fire alarms, multiple emergency exit routes, fire extinguishers, and drill protocols.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
