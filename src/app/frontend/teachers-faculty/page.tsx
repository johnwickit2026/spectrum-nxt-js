import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { GraduationCap, Award, BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Teachers & Faculty | Spectrum International School",
  description: "Experienced teachers and Cambridge/Edexcel subject specialists at Spectrum International School.",
};

export default function TeachersFacultyPage() {
  return (
    <div>
      <PageBanner
        title="Teachers & Faculty"
        badge="Inspiring Mentors"
        subtitle="Our 110+ certified educators bring subject passion, empathetic mentoring, and pedagogical excellence into every classroom."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Teachers & Faculty" }]}
        bgImage={ASSETS.people.faculty}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Exemplary Mentorship
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Educating Minds, Nurturing Hearts
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Great schools are built by inspiring teachers. At Spectrum, our faculty members hold advanced degrees in their respective disciplines from top national and international universities.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                With a low student-to-teacher ratio (average 1:15), every child receives individual attention, customized remediation, and enrichment opportunities.
              </p>
              <div className="pt-2">
                <Link
                  href="/frontend/academic-team"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#BF5700] hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow transition-colors"
                >
                  <span>Explore Academic Team Directory (70+ Faculty)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.people.faculty}
                alt="Teachers and faculty members at SIS"
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
