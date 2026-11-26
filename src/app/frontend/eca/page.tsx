import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Compass, MapPin, Sparkles, ArrowRight, Camera, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Extra-Curricular Activities (ECA) | Spectrum International School",
  description: "Explore ECA opportunities at Spectrum International School: Annual Educational Study Tours and Academic Field Trips.",
};

export default function EcaPage() {
  return (
    <div>
      <PageBanner
        title="Extra-Curricular Activities (ECA)"
        badge="Holistic Development"
        subtitle="Broadening horizons through structured educational travel, hands-on field observation, and cultural excursions."
        breadcrumbs={[
          { label: "School Facilities", href: "/frontend/campus-facilities" },
          { label: "ECA" }
        ]}
        bgImage={ASSETS.activities.studyTour}
      />

      <div className="section-padding bg-gray-50 min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              ECA Programs
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Study Tours &amp; Field Trips
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Our extra-curricular activity framework balances academic inquiry with experiential exploration of nature, science, history, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Study Tour Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col justify-between group">
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <Image
                  src={ASSETS.activities.studyTour}
                  alt="Annual Educational Study Tour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#BF5700] text-white text-xs font-bold px-3 py-1 rounded-xl shadow">
                  Annual Excursion
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors">
                    Annual Educational Study Tours
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Immersive multi-day and full-day expeditions to historical landmarks, research institutes, eco-parks, and archaeological heritage sites across Bangladesh.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Lalbagh Fort, Sonargaon, and Ahsan Manzil historical studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Bangabandhu Military Museum and National Science Museum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Eco-reserve nature appreciation and environmental journaling</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/frontend/study-tour"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    <span>View Study Tour Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Field Trip Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col justify-between group">
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <Image
                  src={ASSETS.campus.building}
                  alt="Academic Field Trips"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#92278F] text-white text-xs font-bold px-3 py-1 rounded-xl shadow">
                  Term Excursions
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#171E45] group-hover:text-[#92278F] transition-colors">
                    Hands-On Academic Field Trips
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Targeted single-day grade-level excursions taking classroom topics into living laboratories, planetariums, botanical gardens, and printing presses.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Botanical Garden plant morphology and specimen collecting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>National Planetarium space observation &amp; astronomy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Supervised safety with registered nurse and faculty preceptors</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/frontend/field-trip"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#92278F] hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    <span>View Field Trip Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
