import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Trophy, Activity, Heart, Award } from "lucide-react";

export const metadata = {
  title: "Sports & Athletics Club | Spectrum International School",
  description: "Cultivating athletic stamina, martial arts, teamwork, and championship spirit at Spectrum International School.",
};

export default function SportsClubPage() {
  return (
    <div>
      <PageBanner
        title="Sports & Athletics Club"
        badge="Physical Fitness & Vitality"
        subtitle="Cultivating discipline, stamina, ethical sportsmanship, and teamwork through structured indoor and outdoor athletic programs."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Sports Club" }]}
        bgImage={ASSETS.facilities.sportsClub}
      />

      <div className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Vigorous Living
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Building Champions of Character on the Playing Field
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Physical education is an indispensable component of holistic development at Spectrum. Our sports instructors guide learners through agility drills, cardiovascular stamina, martial arts, table tennis, badminton, and track athletics.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our Annual Sports & Athletics Meet is a highlight on the school calendar, featuring colorful house march-pasts, relay races, karate demonstrations, and trophy ceremonies.
              </p>
            </div>
            <div className="md:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.facilities.sportsClub}
                alt="Annual Sports Meet at SIS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Trophy className="w-8 h-8 text-[#BF5700]" />
              <h4 className="text-base font-bold text-[#171E45]">Competitive Leagues</h4>
              <p className="text-xs text-gray-600">Inter-house tournaments in badminton, table tennis, basketball, and athletics.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Activity className="w-8 h-8 text-[#92278F]" />
              <h4 className="text-base font-bold text-[#171E45]">Martial Arts & Defense</h4>
              <p className="text-xs text-gray-600">Certified karate instruction teaching mental focus, respect, and self-defense discipline.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <Heart className="w-8 h-8 text-[#8AB326]" />
              <h4 className="text-base font-bold text-[#171E45]">Health & Nutrition</h4>
              <p className="text-xs text-gray-600">Regular fitness screenings, posture assessments, and healthy lifestyle guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
