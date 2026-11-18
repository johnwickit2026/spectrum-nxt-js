import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Mail, Phone, Quote, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Founder & CEO | Spectrum International School",
  description: "Message and vision from Nur Ahammed Khokan, Founder & CEO of Spectrum International School.",
};

export default function CeoPage() {
  return (
    <div>
      <PageBanner
        title="Founder & CEO"
        badge="School Leadership"
        subtitle="Nur Ahammed Khokan on the founding vision, progressive pedagogy, and values shaping Spectrum International School."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Founder & CEO" }]}
        bgImage={ASSETS.hero.banner2}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Profile Card */}
            <div className="md:col-span-5 bg-[#FBF1E3] rounded-2xl p-6 border border-[#EBE8E2] text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={ASSETS.people.founderCeo}
                  alt="Nur Ahammed Khokan, Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#171E45]">Nur Ahammed Khokan</h3>
                <p className="text-xs font-bold text-[#BF5700] uppercase tracking-wider mt-1">Founder & CEO</p>
                <p className="text-xs text-gray-600 mt-2">Spectrum International School & EduCare Group</p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 text-xs text-left space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-3.5 h-3.5 text-[#BF5700]" />
                  <span>spectrumintlschool@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-3.5 h-3.5 text-[#BF5700]" />
                  <span>+880 1799-369685</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/frontend/appointment-ceo"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with CEO</span>
                </Link>
              </div>
            </div>

            {/* Address & Narrative */}
            <div className="md:col-span-7 space-y-6">
              <div className="border-l-4 border-[#BF5700] pl-4 italic text-sm text-gray-700 bg-orange-50/50 py-3 rounded-r-lg">
                &ldquo;True leadership in education is measured not merely by grades on an exam sheet, but by the integrity, empathy, and resilience our graduates bring into the world.&rdquo;
              </div>

              <h2 className="text-2xl font-black text-[#171E45]">
                Welcome from the Founder & Chief Executive Officer
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                Bismillahir Rahmanir Raheem.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                It gives me immense honor to welcome prospective parents, students, and educators to Spectrum International School. When we laid the cornerstone of Spectrum, we were guided by a conviction that has only deepened with time: Bangladeshi children deserve the finest British curriculum instruction without having to surrender their cultural identity, mother tongue, or Islamic faith.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Over the years, our campus in Shantinagar has blossomed into an energetic center of learning. Our students engage in inquiry-driven science, computational robotics, creative arts, and sports meets, while their days begin with the recitation of the Holy Quran and gratitude to the Almighty.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe in an open-door policy. As parents, you are our co-educators. We invite you to walk our halls, observe our teachers in action, and experience firsthand what makes Spectrum International School a home for the heart and mind.
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                <div>
                  <p className="font-serif italic font-bold text-lg text-[#171E45]">Nur Ahammed Khokan</p>
                  <p className="text-xs text-gray-500">Founder & CEO, Spectrum International School</p>
                </div>
                <Link
                  href="/frontend/appointment-ceo"
                  className="text-xs font-bold text-[#BF5700] hover:underline flex items-center gap-1"
                >
                  <span>Request Meeting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
