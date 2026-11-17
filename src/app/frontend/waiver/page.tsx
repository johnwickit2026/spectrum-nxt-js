import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Award, HeartHandshake, Sparkles, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Waiver & Financial Aid | Spectrum International School",
  description: "Merit scholarships, sibling tuition waivers, and financial aid opportunities at Spectrum International School.",
};

const waiverPrograms = [
  {
    title: "Merit-Based Academic Scholarships",
    desc: "Up to 50% to 100% tuition waiver awarded to high-achieving candidates in Cambridge O Level and IGCSE board examinations enrolling in SIS A Levels.",
    icon: Award,
    eligibility: "Minimum 5+ 'A*' grades in O Levels or equivalent standardized results.",
  },
  {
    title: "Sibling Tuition Concession",
    desc: "To support families with multiple enrolled children, SIS provides a 25% waiver on monthly tuition for the second sibling and a 50% waiver for the third sibling.",
    icon: Users,
    eligibility: "Applicable as long as siblings study concurrently at SIS.",
  },
  {
    title: "Tahfeezul Quran Excellence Waiver",
    desc: "Special scholarships for students who have memorized 10+ Juz or completed the full Quran with verified Tajweed sanad.",
    icon: Sparkles,
    eligibility: "Interview and oral recitation assessment with the Sharia Board.",
  },
  {
    title: "Need-Based Financial Assistance",
    desc: "The Spectrum Board of Trustees operates a dedicated benevolence fund assisting families facing sudden bereavement, medical hardship, or financial distress.",
    icon: HeartHandshake,
    eligibility: "Subject to annual documentation review and committee approval.",
  },
];

export default function WaiverPage() {
  return (
    <div>
      <PageBanner
        title="Waiver & Financial Aid"
        badge="Scholarship Opportunities"
        subtitle="Empowering talented, hardworking learners through merit recognition, sibling concessions, and need-based financial aid."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Waiver" }]}
        bgImage={ASSETS.activities.recognition}
      />

      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Empowering Potential
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Scholarships & Concessions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              We believe financial constraints should never stand between a promising child and a world-class education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waiverPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-orange-300 transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#171E45]">{prog.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
                    <div className="pt-2 text-xs text-gray-700 bg-white p-3 rounded-xl border border-gray-200">
                      <strong>Eligibility:</strong> {prog.eligibility}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#171E45] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold">Apply for a Scholarship</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              Submit your prior transcripts, academic certificates, and waiver application to the principal&apos;s office during admission enrollment.
            </p>
            <div className="pt-2">
              <Link
                href="/frontend/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-full shadow-lg transition-all"
              >
                <span>Contact Scholarship Committee</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
