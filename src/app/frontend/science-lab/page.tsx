import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { FlaskConical, Atom, Eye, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Science Laboratories | Spectrum International School",
  description: "Equipped Physics, Chemistry, and Biology laboratories supporting hands-on experimentation at SIS.",
};

export default function ScienceLabPage() {
  return (
    <div>
      <PageBanner
        title="Science Laboratories"
        badge="Hands-on Inquiry"
        subtitle="Fully equipped Physics, Chemistry, and Biology laboratories designed to turn theoretical knowledge into tangible discovery."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Science Lab" }]}
        bgImage={ASSETS.facilities.scienceLab}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Experimental Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Where Science Comes Alive Under Expert Guidance
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Science cannot be mastered through textbooks alone. At Spectrum International School, our laboratory suites provide every student with the apparatus, reagents, digital measuring devices, and microscope optics needed for empirical investigation.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Students test Newton&apos;s laws, conduct titration reactions, prepare biological specimens, and record systematic observations under the supervision of qualified lab demonstrators and instructors.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.scienceLab}
                alt="Science Lab at Spectrum"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Atom className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Physics Mechanics</h4>
              <p className="text-xs text-gray-600">Optics benches, vernier calipers, electric circuit boards, and wave apparatus.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <FlaskConical className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Chemistry Stations</h4>
              <p className="text-xs text-gray-600">Fume hoods, Bunsen burners, burettes, pipettes, and safe organic/inorganic reagents.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Eye className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Biology & Microscopy</h4>
              <p className="text-xs text-gray-600">High-resolution compound microscopes, human anatomical models, and botanical specimen mounts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
