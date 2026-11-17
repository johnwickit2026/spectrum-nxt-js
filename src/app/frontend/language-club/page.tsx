import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Globe, Mic, BookOpen } from "lucide-react";

export const metadata = {
  title: "Language Club | Spectrum International School",
  description: "Debate, public speaking, creative writing, and Arabic linguistics at Spectrum Language Club.",
};

export default function LanguageClubPage() {
  return (
    <div>
      <PageBanner
        title="English & Arabic Language Club"
        badge="Linguistic Mastery"
        subtitle="Cultivating persuasive eloquence, parliamentary debate, creative writing, and classical Arabic phonetics."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Language Club" }]}
        bgImage={ASSETS.activities.fieldTrip}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Eloquence & Expression
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Empowering Voices with Confidence and Clarity
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Spectrum Language Club provides a supportive platform where learners conquer stage fright, refine their English articulation, and engage in competitive inter-school debating circuits.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                In parallel, our Arabic language wing introduces students to modern standard Arabic vocabulary, sentence structures, and classical Quranic linguistic beauty.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.activities.fieldTrip}
                alt="Language Club members at Spectrum"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Mic className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Parliamentary Debate</h4>
              <p className="text-xs text-gray-600">Training in critical logic, rebuttal strategies, and poise before audience assemblies.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <BookOpen className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Creative Writing & Poetry</h4>
              <p className="text-xs text-gray-600">Publishing student anthologies, short stories, essays, and campus journals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Globe className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Arabic Linguistics</h4>
              <p className="text-xs text-gray-600">Grammar fundamentals (Nahw & Sarf) unlocking deep understanding of the Quran.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
