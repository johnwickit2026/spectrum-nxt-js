import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Heart, ShieldCheck, Sun, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Senior Citizen Care Home | Spectrum Projects",
  description: "Dignified elderly care, medical monitoring, companionship, and serene residential facilities by Spectrum.",
};

export default function SeniorCarePage() {
  return (
    <div>
      <PageBanner
        title="Senior Citizen Care Home"
        badge="Community Welfare Project"
        subtitle="A compassionate residential care and companionship initiative dedicated to honoring and serving our elders with dignity."
        breadcrumbs={[{ label: "Our Projects", href: "/frontend/senior-care" }, { label: "Senior Citizen Care Home" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Dignity & Compassion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Honoring the Wisdom and Serenity of Our Elders
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                As part of Spectrum&apos;s broader social welfare vision, the Senior Citizen Care Home provides a peaceful, medically supervised, and socially active haven for elderly citizens.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Equipped with trained nurses, healthy customized dietary planning, spiritual prayer halls, reading libraries, and green garden spaces, our seniors enjoy respectful companionship and full medical attention.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.hero.banner1}
                alt="Senior Citizen Care Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">24/7 Nursing & Vitals</h4>
              <p className="text-xs text-gray-600">Round-the-clock registered nursing staff, doctor visits, and emergency medical tie-ups.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Heart className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Nutritious Dietary Plans</h4>
              <p className="text-xs text-gray-600">Freshly prepared diabetic-friendly, low-sodium meals tailored to each resident&apos;s health needs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Sun className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Spiritual & Social Peace</h4>
              <p className="text-xs text-gray-600">Congregational prayer halls, Quran recitation circles, and landscaped recreational spaces.</p>
            </div>
          </div>

          <div className="bg-[#171E45] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold">Inquire About Admissions & Support</h4>
              <p className="text-xs text-gray-300">Learn about short-term recuperation or full residential stays.</p>
            </div>
            <Link
              href="/frontend/contact"
              className="px-6 py-2.5 bg-[#8AB326] hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-all"
            >
              Contact Care Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
