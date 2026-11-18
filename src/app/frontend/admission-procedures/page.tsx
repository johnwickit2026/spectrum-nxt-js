import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { CheckCircle2, FileCheck, ArrowRight, UserCheck, CreditCard, Sparkles, ShieldAlert, Shirt } from "lucide-react";

export const metadata = {
  title: "Admission Procedures & Guidelines | Spectrum International School",
  description: "Step-by-step admission process, required documents, school uniform, and 9 essential guidelines for guardians and students.",
};

const steps = [
  {
    num: "01",
    title: "Inquiry & Campus Selection",
    desc: "Parents choose a campus branch (Campus 01: Shantinagar or Campus 02: Aftabnagar) or Hifz Campus, consult admissions counselors, and schedule a walk-through.",
  },
  {
    num: "02",
    title: "Application Submission",
    desc: "Complete the online application or submit the paper application kit along with student birth certificate, photos, and previous school records.",
  },
  {
    num: "03",
    title: "Age & Readiness Assessment",
    desc: "No admission assessment is required for Playgroup or Nursery. Applicants from KG to O Level must take an admission assessment.",
  },
  {
    num: "04",
    title: "Admission Offer & Official Fees",
    desc: "Upon qualification, the formal offer letter is issued. Tuition fees must be paid through the school’s authorised payment channels (receipts retained).",
  },
  {
    num: "05",
    title: "Uniform & Student Induction",
    desc: "Students receive section allocation, booklists, official uniform guide, and software portal login credentials followed by the Welcome Orientation.",
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

const essentialGuidelines = [
  {
    num: "1",
    title: "Admission Requirements",
    desc: "Admission is subject to the appropriate age for the intended class. No admission assessment is required for Playgroup or Nursery. Applicants from KG to O Level must take an admission assessment.",
  },
  {
    num: "2",
    title: "Tuition Fees & Payments",
    desc: "Tuition fees must be paid between the 1st and 10th of the current month through the school’s authorised payment channels. Guardians should retain official receipts for all payments.",
  },
  {
    num: "3",
    title: "Attendance at Meetings",
    desc: "Guardians must attend parent–teacher meetings and other meetings called by the school authority to discuss their child’s progress, wellbeing and school matters.",
  },
  {
    num: "4",
    title: "School Software & Notices",
    desc: "Each student will receive a school software user ID and password. Guardians and students must check the software regularly for attendance, homework, results, fee information and official notices. Login credentials must be kept confidential.",
  },
  {
    num: "5",
    title: "Attire & Respectful Conduct",
    desc: "Guardians are expected to wear modest, appropriate attire when visiting the campus and maintain courteous behaviour. Teachers, supporting staff & all other employees must be treated with dignity & respect.",
  },
  {
    num: "6",
    title: "Punctuality & Attendance",
    desc: "Students must arrive on time and attend school regularly. Guardians should inform the school promptly of absences and follow the prescribed leave procedure.",
  },
  {
    num: "7",
    title: "Financial Dealings",
    desc: "Financial transactions with teachers or other employees outside the school’s authorised channels are strictly prohibited. All school-related payments must follow official procedures.",
  },
  {
    num: "8",
    title: "Student Conduct & Responsibilities",
    desc: "Students must follow teachers’ instructions, complete assigned work and treat others respectfully. Bullying, abusive language, physical aggression and damage to school property are prohibited.",
  },
  {
    num: "9",
    title: "Contact Details & Health Information",
    desc: "Guardians must keep their contact details and emergency numbers updated and inform the school of any medical condition or allergy relevant to their child’s care.",
  },
];

export default function AdmissionProceduresPage() {
  return (
    <div>
      <PageBanner
        title="Admission Procedures"
        badge="Enrolling at Spectrum"
        subtitle="A step-by-step roadmap to enrolling your child at Spectrum International School, complete with uniform codes and institutional guidelines."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Admission Procedures" }]}
        bgImage={ASSETS.academics.classroom2}
      />

      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* Section 1: 5 Steps */}
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

          {/* Section 2: School Uniform & Appearance */}
          <div className="border-t border-gray-100 pt-16 space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Islamic Adab & Etiquette
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                School Uniform & Appearance
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The Prophet (SAW) taught us to keep ourselves clean, presentable, and well-groomed, and to dress modestly. These practices are part of Islamic Adab (etiquette). Therefore, we instill these values in our students from an early age. All clothing and personal items must be labeled with the student&apos;s name, phone number, or class.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Boys Uniform */}
              <div className="bg-[#FBF1E3]/60 rounded-2xl p-6 border border-[#EBE8E2] space-y-4">
                <span className="text-xs font-bold text-[#BF5700] uppercase tracking-wider block">
                  Boys (Playgroup – &apos;O&apos; Level)
                </span>
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Summer Season</p>
                    <p>Shirt, Pant, Belt (Black), Shoes (Black), Prayer Hat (SIS Tupi)</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Winter Season</p>
                    <p>SIS Blazer with regular school uniform</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Boys Hifz</p>
                    <p>SIS Panjabi Set, SIS Tupi</p>
                  </div>
                </div>
              </div>

              {/* Girls Uniform */}
              <div className="bg-[#FBF1E3]/60 rounded-2xl p-6 border border-[#EBE8E2] space-y-4">
                <span className="text-xs font-bold text-[#92278F] uppercase tracking-wider block">
                  Girls (Playgroup – &apos;O&apos; Level)
                </span>
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Summer Season</p>
                    <p>Frock, Full Sleeve Dress, Salwar, Shoes (Black), Socks (Black), SIS Hijab</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Winter Season</p>
                    <p>SIS Blazer with regular school uniform</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <p className="font-bold text-[#171E45] mb-1">Girls Hifz</p>
                    <p>SIS Borkha, Body Cover Hijab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Essential Guidelines for Guardians & Students */}
          <div className="border-t border-gray-100 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Rules & Responsibilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                Essential Guidelines for Guardians & Students
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Official institutional policies extracted directly from the Spectrum Prospectus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {essentialGuidelines.map((item) => (
                <div
                  key={item.num}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-card transition-all"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#BF5700] flex items-center justify-center font-bold text-xs mb-3">
                      {item.num}
                    </div>
                    <h4 className="text-sm font-bold text-[#171E45] mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Required Documents Checklist */}
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
