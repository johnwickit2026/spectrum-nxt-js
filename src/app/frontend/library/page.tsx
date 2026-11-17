import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { BookOpen, Search, Compass, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "School Library | Spectrum International School",
  description: "Knowledge resource center, British curriculum reference texts, Islamic literature, and peaceful reading halls.",
};

export default function LibraryPage() {
  return (
    <div>
      <PageBanner
        title="Modern School Library"
        badge="Resource Center"
        subtitle="A tranquil haven of learning housing thousands of curriculum titles, reference works, classical literature, and Islamic encyclopedias."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Library" }]}
        bgImage={ASSETS.facilities.library}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Curated Collection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Fostering an Enduring Love for Reading and Research
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Spectrum International School library is centrally cataloged and managed by professional librarians. It accommodates students from early primary through senior A-Level scholars.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                The collection features extensive Pearson Edexcel and Cambridge coursebooks, past paper compendiums, world history, scientific journals, classic English fiction, and authentic Islamic scholarship in both English and Bengali.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.library}
                alt="Modern Library at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <BookOpen className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">5,000+ Printed Titles</h4>
              <p className="text-xs text-gray-600">Continuously updated fiction, non-fiction, STEM encyclopedias, and past paper archives.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Search className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Quiet Research Alcoves</h4>
              <p className="text-xs text-gray-600">Individual study pods designed for deep concentration and exam preparation.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Compass className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Guided Reading Clubs</h4>
              <p className="text-xs text-gray-600">Weekly library periods for primary students with book reviews and storytelling sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
