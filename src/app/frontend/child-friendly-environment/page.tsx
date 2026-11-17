import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Child Friendly Environment | Spectrum International School",
  description: "Ensuring an emotionally supportive, physically safe, and loving environment for every student at SIS.",
};

export default function ChildFriendlyPage() {
  return (
    <div>
      <PageBanner
        title="Child Friendly Environment"
        badge="School Ethos"
        subtitle="Creating a physically secure, emotionally nurturing, and inspiring atmosphere where students learn without fear."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Child Friendly Environment" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Care & Pastoral Safety
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                A Nurturing Second Home for Every Learner
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                At Spectrum International School, we consider emotional well-being to be the foundation of intellectual achievement. When children feel secure, respected, and heard, their curiosity naturally expands.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our classrooms are designed with soft ergonomics, ample natural and gentle lighting, centralized air cooling, and child-safe fixtures. Teachers adopt positive reinforcement rather than punitive discipline, ensuring every student looks forward to school each morning.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.academics.classroom2}
                alt="Child friendly classroom at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">24/7 Monitored Safety</h4>
              <p className="text-xs text-gray-600">Continuous CCTV supervision across all corridors, classrooms, entryways, and staircases.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Heart className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Zero-Tolerance Bullying</h4>
              <p className="text-xs text-gray-600">Active anti-bullying policies, empathy training, and pastoral counseling for all age groups.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Sparkles className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Hygienic Facilities</h4>
              <p className="text-xs text-gray-600">Spotless washrooms, clean purified drinking water systems, and regular sanitization cycles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
