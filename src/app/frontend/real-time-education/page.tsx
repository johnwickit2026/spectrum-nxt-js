import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Laptop, Cpu, Globe } from "lucide-react";

export const metadata = {
  title: "Real-Time Education | Spectrum International School",
  description: "Integrating modern STEM, digital literacy, and adaptive learning methodologies at SIS.",
};

export default function RealTimeEducationPage() {
  return (
    <div>
      <PageBanner
        title="Real-Time Education"
        badge="Modern Pedagogy"
        subtitle="Empowering learners with digital tools, interactive STEM inquiries, and modern computational skillsets."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Real-Time Education" }]}
        bgImage={ASSETS.facilities.ictLab}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                21st Century Skills
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Dynamic, Applied Learning for Tomorrow&apos;s World
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Education cannot remain anchored to rote memorization. At Spectrum International School, real-time education means connecting classroom theory with living reality.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                From hands-on robotics workshops and Python coding in primary grades to modular Pearson Edexcel science labs, our students analyze data, test hypotheses, and create technological solutions.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.ictLab}
                alt="Real-time ICT and technology education"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Laptop className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Digital Literacy</h4>
              <p className="text-xs text-gray-600">Comprehensive curriculum covering programming, safe internet usage, and digital presentation.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Cpu className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Robotics & STEM</h4>
              <p className="text-xs text-gray-600">Hands-on electronics, microcontrollers, and logic circuit design clubs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Globe className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Global Exposure</h4>
              <p className="text-xs text-gray-600">Participating in international math olympiads, spelling bees, and science fairs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
