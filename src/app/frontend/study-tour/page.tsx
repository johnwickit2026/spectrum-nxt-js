import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Compass, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Study Tour | Spectrum International School",
  description: "Educational excursions, historical tours, and national heritage discovery journeys at SIS.",
};

export default function StudyTourPage() {
  return (
    <div>
      <PageBanner
        title="Study Tours & Excursions"
        badge="Experiential Learning"
        subtitle="Broadening student horizons through structured visits to national monuments, science museums, and historical landmarks."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Study Tour" }]}
        bgImage={ASSETS.activities.studyTour}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Learning Beyond Walls
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Connecting Academic Theory with the Living World
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spectrum organizes annual and term study tours designed to reinforce topics taught in history, geography, environmental science, and social studies.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Accompanied by faculty and medical personnel, students have explored Lalbagh Fort, the National Museum, Bangabandhu Military Museum, scenic eco-parks, and botanical reserves.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.activities.studyTour}
                alt="Study tour excursion by Spectrum students"
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
