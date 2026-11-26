import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Laptop, Cpu, ShieldCheck, CheckCircle2, ArrowRight, Code, Terminal, Network } from "lucide-react";

export const metadata = {
  title: "Modern Computer Lab | Lab Facilities | Spectrum International School",
  description: "Advanced computing facilities, Python programming, robotics prototyping, and Cambridge computer science labs at SIS.",
};

export default function ComputerLabPage() {
  return (
    <div>
      <PageBanner
        title="Modern Computer Lab"
        badge="Lab Facilities"
        subtitle="Empowering young learners with coding literacy, robotics prototyping, and Cambridge Computer Science practicals in a gigabit networked environment."
        breadcrumbs={[
          { label: "Lab Facilities", href: "/frontend/campus-facilities" },
          { label: "Computer Lab" }
        ]}
        bgImage={ASSETS.facilities.ictLab}
      />

      <div className="section-padding bg-white min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5" />
                Lab Facilities Sub-Category
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                High-Performance ICT &amp; Coding Workstations
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Computer Laboratory at Spectrum International School is configured with modern networked desktop terminals connected via redundant high-speed optical fiber. Each workstation includes software environments for Python programming, Scratch visual coding, web engineering, database architecture, and robotics micro-controller development.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Students prepare for Cambridge IGCSE / O Level Computer Science (0478) and Edexcel International GCSE ICT (4IT1) through rigorous algorithmic problem solving, binary logic exercises, and hands-on software development.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/frontend/science-lab"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#92278F] hover:underline"
                >
                  <span>Explore Science Laboratories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative h-80 rounded-3xl overflow-hidden shadow-card border border-gray-100">
              <Image
                src={ASSETS.facilities.ictLab}
                alt="Modern Computer Lab at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#BF5700] text-white flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#171E45]">Coding &amp; Software Design</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Python, Scratch, HTML5/CSS3, and SQL database engines taught by certified computer engineers.
              </p>
            </div>

            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#92278F] text-white flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#171E45]">Robotics &amp; Microcontrollers</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sensor circuits, Arduino micro-controllers, and automated prototyping kits for our STEM innovations.
              </p>
            </div>

            <div className="p-6 bg-[#FBF1E3] rounded-2xl border border-[#EBE8E2] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#8AB326] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#171E45]">Safe Cyber Citizenship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enterprise firewall filtering, child-safe browsing rules, and ethical AI and internet usage guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
