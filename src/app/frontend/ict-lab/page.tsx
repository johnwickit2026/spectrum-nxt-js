import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Laptop, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "ICT & Computer Lab | Spectrum International School",
  description: "Advanced computing facilities, Python programming, web development, and digital literacy labs at SIS.",
};

export default function IctLabPage() {
  return (
    <div>
      <PageBanner
        title="ICT & Computer Laboratory"
        badge="Technology & Computing"
        subtitle="Empowering young learners with coding literacy, digital design, and robotics engineering in a networked environment."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "ICT Lab" }]}
        bgImage={ASSETS.facilities.ictLab}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Computing Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Modern Computing and Software Engineering
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The ICT Laboratory at Spectrum International School is fitted with high-performance desktop terminals connected to high-speed optical fiber network. Each terminal is configured with software for Python coding, Scratch visual programming, HTML/CSS web design, and graphic productivity tools.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Students prepare for Cambridge IGCSE / O Level Computer Science (0478) and Edexcel ICT (4IT1) with hands-on algorithm design, database management, and network architecture practicals.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.ictLab}
                alt="ICT Lab at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Laptop className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">1:1 Workstation Ratio</h4>
              <p className="text-xs text-gray-600">Every student has a dedicated computer terminal during lab sessions for maximal hands-on practice.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Cpu className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">STEM & Coding Clubs</h4>
              <p className="text-xs text-gray-600">Weekend robotics workshops, micro-controller programming, and app development competitions.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Firewall & Child Safety</h4>
              <p className="text-xs text-gray-600">Strict enterprise content filtering and safe browsing firewalls protecting young learners online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
