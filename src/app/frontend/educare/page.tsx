import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Spectrum EduCare | Spectrum Projects",
  description: "Comprehensive early development, daycare, after-school care, and holistic child grooming at Spectrum EduCare.",
};

export default function EduCarePage() {
  return (
    <div>
      <PageBanner
        title="Spectrum EduCare"
        badge="Flagship Initiative"
        subtitle="A premier early development, daycare, and after-school enrichment initiative supporting working parents and young children."
        breadcrumbs={[{ label: "Our Projects", href: "/frontend/educare" }, { label: "Spectrum EduCare" }]}
        bgImage={ASSETS.facilities.playAndLearn}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Early Childhood & Daycare
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Loving Care and Guided Growth for Little Ones
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spectrum EduCare was established to provide parents with a trusted sanctuary where infants, toddlers, and young primary students receive professional pastoral care, nutritious meals, structured naps, and guided developmental play.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our certified caregivers and early childhood educators maintain age-appropriate sensory toys, language games, and reading corners that smoothly transition children into formal schooling.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.playAndLearn}
                alt="Spectrum EduCare Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Heart className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Loving Attention</h4>
              <p className="text-xs text-gray-600">High caregiver-to-child ratio ensuring prompt care, hygiene assistance, and gentle emotional support.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Sparkles className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">After-School Enrichment</h4>
              <p className="text-xs text-gray-600">Homework supervision, creative craft workshops, and reading clubs for primary students.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Safe & Sanitized</h4>
              <p className="text-xs text-gray-600">Non-toxic furniture, monitored CCTV access, temperature checks, and hygienic dining zones.</p>
            </div>
          </div>

          <div className="bg-[#171E45] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold">Enroll in Spectrum EduCare</h4>
              <p className="text-xs text-gray-300">Flexible full-day, half-day, and after-school packages available.</p>
            </div>
            <Link
              href="/frontend/contact"
              className="px-6 py-2.5 bg-[#BF5700] hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all"
            >
              Contact EduCare Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
