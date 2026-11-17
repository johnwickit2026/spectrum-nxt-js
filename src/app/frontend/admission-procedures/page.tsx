import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { CheckCircle2, FileCheck, ArrowRight, UserCheck, CreditCard, Sparkles } from "lucide-react";

export const metadata = {
  title: "Admission Procedures | Spectrum International School",
  description: "Step-by-step admission process, required documents, assessment guidelines, and registration at SIS.",
};

const steps = [
  {
    num: "01",
    title: "Inquiry & Campus Tour",
    desc: "Parents visit Khadem Tower campus or contact our admission counselors (+880 1799-369685) to discuss grade availability, curriculum options, and schedule a walk-through.",
  },
  {
    num: "02",
    title: "Application Submission",
    desc: "Complete the online application form via our portal or collect a printed admission kit from the admission office. Submit necessary documents and applicant details.",
  },
  {
    num: "03",
    title: "Friendly Readiness Assessment",
    desc: "For Play Group – KG, a warm interactive play session to observe motor and communication skills. For Class I onwards, a brief diagnostic assessment in English & Math.",
  },
  {
    num: "04",
    title: "Admission Offer & Fee Payment",
    desc: "Upon successful assessment, the admission offer letter is issued. Parents complete the registration and admission fee payment (between 7:00 AM – 5:00 PM).",
  },
  {
    num: "05",
    title: "Orientation & Student Induction",
    desc: "Students receive class section allocations, booklists, and uniform instructions, followed by our Welcome Orientation Program.",
  },
];

const requiredDocs = [
  "Attested copy of the applicant's Birth Certificate (Online Digital Copy).",
  "4 recent passport-size colored photographs of the student.",
  "2 passport-size colored photographs of each parent / legal guardian.",
  "Photocopy of Parents' National ID (NID) or Passport.",
  "Previous school's Report Card / Transcript (for Class I and above).",
  "Transfer Certificate (TC) from the previous institution (original to be submitted before term starts).",
  "Medical vaccination record or special health notification (if any).",
];

export default function AdmissionProceduresPage() {
  return (
    <div>
      <PageBanner
        title="Admission Procedures"
        badge="Enrolling at Spectrum"
        subtitle="A step-by-step roadmap to enrolling your child at Spectrum International School."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Admission Procedures" }]}
        bgImage={ASSETS.academics.classroom2}
      />

      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Steps */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                5-Step Admission Journey
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                How to Apply for Admission
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Designed to be seamless, supportive, and transparent for parents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:border-orange-300 transition-all"
                >
                  <div>
                    <span className="text-3xl font-black text-[#BF5700]/30 block mb-2">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-[#171E45] mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="bg-[#FBF1E3] rounded-3xl p-8 sm:p-10 border border-[#EBE8E2]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Document Checklist
              </span>
              <h3 className="text-2xl font-extrabold text-[#171E45] mt-1 mb-4">
                Documents Required for Admission
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-6 leading-relaxed">
                Please prepare the following documents upon application submission:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requiredDocs.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="bg-white p-3.5 rounded-xl border border-gray-200/80 text-xs text-gray-800 flex items-start gap-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8AB326] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="text-center pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/frontend/apply"
              className="px-8 py-3.5 bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white font-bold text-xs rounded-full shadow-lg hover:shadow-glow transition-all flex items-center gap-2"
            >
              <span>Get Started / Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/frontend/prospectus"
              className="px-8 py-3.5 bg-white border border-gray-300 hover:border-[#BF5700] text-gray-700 hover:text-[#BF5700] font-bold text-xs rounded-full shadow-sm transition-all"
            >
              Download Prospectus (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
