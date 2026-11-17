"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Which curriculum does Spectrum International School follow?",
    a: "SIS follows the Pearson Edexcel and Cambridge Assessment International Education curriculum framework from Play Group through O & A Levels. This is enriched with our specialized Islamic studies, Arabic phonetics, and Tahfeezul Quran program.",
  },
  {
    q: "What are the age criteria for Play Group, Nursery, and KG admission?",
    a: "Play Group students should be between 2.5 and 3.5 years old by July. Nursery applicants should be 3.5 to 4.5 years, and Kindergarten applicants 4.5 to 5.5 years. Detailed age tables can be viewed on our Academic Sessions page.",
  },
  {
    q: "How is the Tahfeezul Quran (Hifz) program structured?",
    a: "We have dedicated, segregated Girls and Boys Hifzul Quran wings led by certified Qaris. Students attend intensive morning Quran memorization and Tajweed sessions, followed by their core English-medium academic subjects so their general education continues smoothly.",
  },
  {
    q: "What are the hours for online fee payment?",
    a: "In accordance with banking and processing protocols, online fee payments are strictly active daily between 7:00 AM and 5:00 PM. Parents can use our online payment portal or reach the dedicated helplines at +880 1799-369685 / +880 1730-369686.",
  },
  {
    q: "Does the school provide financial aid or waivers?",
    a: "Yes. SIS offers merit-based academic waivers for stellar board exam results, sibling discounts, and need-based financial scholarships through the SIS Board of Trustees. Parents can apply via the Waiver form.",
  },
  {
    q: "Where is the main campus located?",
    a: "Our central campus is located at Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh. It features 24/7 security, elevator access, fully air-conditioned multimedia classrooms, and dedicated STEM/ICT laboratories.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <PageBanner
        title="Frequently Asked Questions"
        badge="Inquiries & Answers"
        subtitle="Find answers to common questions about admissions, Pearson Edexcel & Cambridge curriculum, fees, and the Hifz department."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "FAQ" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Clear Answers
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Everything You Need to Know
            </h2>
            <p className="text-xs text-gray-600 mt-2">
              If your question is not listed here, please feel free to reach out to our admission helpdesk.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm text-[#171E45] hover:text-[#BF5700] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#BF5700] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#BF5700]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#171E45] text-white p-8 rounded-2xl text-center space-y-3 mt-12">
            <h3 className="text-lg font-bold">Have More Questions?</h3>
            <p className="text-xs text-gray-300 max-w-md mx-auto">
              Our admission officers at Khadem Tower are ready to walk you through curriculum choices and student assessment.
            </p>
            <div className="pt-2">
              <Link
                href="/frontend/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#BF5700] text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition-colors"
              >
                <span>Contact Admissions Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
