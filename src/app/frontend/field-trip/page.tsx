import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { MapPin, Compass, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Field Trips | Spectrum International School",
  description: "Hands-on nature discovery, scientific excursions, and field trips for Spectrum International School students.",
};

export default function FieldTripPage() {
  return (
    <div>
      <PageBanner
        title="Field Trips"
        badge="Outdoor Investigation"
        subtitle="Practical field trips reinforcing environmental biology, botanical research, and community service."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Field Trip" }]}
        bgImage={ASSETS.activities.fieldTrip}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Active Exploration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Direct Contact with Nature and Scientific Realities
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Field trips at Spectrum give learners the opportunity to collect plant and water specimens, observe ecological food webs firsthand, and visit research institutes.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Every trip adheres to comprehensive risk assessments, parent permissions, and strict chaperone-to-student ratios.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.activities.fieldTrip}
                alt="Field trip activity"
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
