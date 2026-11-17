import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Smile, Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "Committed to Fun-Filled Education | Spectrum International School",
  description: "Fostering joy, active engagement, and creative curiosity in everyday learning at Spectrum International School.",
};

export default function FunEducationPage() {
  return (
    <div>
      <PageBanner
        title="Committed to Fun-Filled Education"
        badge="Joyful Discovery"
        subtitle="Infusing wonder, hands-on experimentation, interactive games, and artistic exploration into every grade."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Committed to Fun-Filled Education" }]}
        bgImage={ASSETS.facilities.playAndLearn}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Joyful Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Learning That Stirs the Imagination
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                When learning is enjoyable, discipline and retention follow effortlessly. Spectrum incorporates role play, educational board games, science challenges, interactive storytelling, and creative festivals into the core routine.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our learners discover that mathematics is a captivating puzzle, science is an adventure of inquiry, and literature is a gateway to diverse cultures and empathy.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.playAndLearn}
                alt="Joyful play and learning at Spectrum"
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
