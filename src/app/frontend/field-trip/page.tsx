import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Compass, MapPin, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Camera } from "lucide-react";

export const metadata = {
  title: "Academic Field Trips | ECA | Spectrum International School",
  description: "Hands-on grade-level field trips complementing Cambridge classroom theory with real-world observation.",
};

export default function FieldTripPage() {
  return (
    <div>
      <PageBanner
        title="Academic Field Trips"
        badge="ECA (Extra-Curricular)"
        subtitle="Hands-on grade-level excursions taking learning outside textbooks to botanical research centers, planetariums, and archaeological museums."
        breadcrumbs={[
          { label: "School Facilities", href: "/frontend/campus-facilities" },
          { label: "ECA", href: "/frontend/eca" },
          { label: "Field Trip" }
        ]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Experiential Science &amp; Nature Exploration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Targeted Field Trips Aligned with Cambridge Syllabus
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Field trips at Spectrum International School are structured learning journeys where classroom concepts meet real-world observation. Grade levels embark on supervised day trips to scientific observatories, botanical gardens, wildlife conservation sanctuaries, and printing presses.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Students collect leaf specimens for biology portfolios, observe astronomical telescopes, examine geological rock formations, and document architectural heritage, translating abstract theory into memorable first-hand knowledge.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/frontend/study-tour"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#92278F] hover:underline"
                >
                  <span>Explore Annual Study Tours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/frontend/photo-gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#BF5700]"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Excursion Photos</span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative h-80 rounded-3xl overflow-hidden shadow-card border border-gray-100">
              <Image
                src={ASSETS.activities.studyTour}
                alt="Field trip by Spectrum International School students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <h3 className="text-sm font-bold text-[#171E45] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#BF5700]" />
                <span>Curated Destinations</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                National Planetarium, Mirpur Botanical Garden, Bangabandhu Military Museum, and Bangladesh National Zoo.
              </p>
            </div>

            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <h3 className="text-sm font-bold text-[#171E45] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#92278F]" />
                <span>Health &amp; Transit Safety</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every field trip bus is accompanied by registered teacher preceptors, first-aid nurses, and security logistics personnel.
              </p>
            </div>

            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <h3 className="text-sm font-bold text-[#171E45] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8AB326]" />
                <span>Academic Worksheets</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Learners complete guided field journals, scientific drawings, and post-trip group presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
