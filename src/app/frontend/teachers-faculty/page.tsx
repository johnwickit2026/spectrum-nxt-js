"use client";

import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
import { ASSETS } from "@/lib/assets";
import { GraduationCap, Award, BookOpen, ArrowRight, Sparkles } from "lucide-react";

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
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
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
                  <span>Explore Complete Academic Team Directory (70+ Faculty)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 flex justify-center py-4">
              <ReflectiveCard
                name="Sharmin Akter Eva"
                role="Vice Principal & Academic Head"
                badge="Academic Head"
                status="Active"
                statusColor="#22c55e"
                idLabel="Faculty Leadership ID"
                idValue="SIS-LEAD-001"
                avatar={ASSETS.people.faculty}
                theme="dark"
                metalness={0.95}
                roughness={0.25}
                blurStrength={6}
                shine={1.25}
                glare={0.65}
                width={320}
                height={460}
                radius={24}
                className="shadow-2xl"
              />
            </div>
          </div>

          {/* Featured Faculty Credentials Section */}
          <div className="border-t border-gray-100 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Faculty Roster Credentials
              </span>
              <h3 className="text-2xl font-extrabold text-[#171E45] mt-1">
                Featured Lead Educators
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Interactive reflective ID badges honoring SIS stage preceptors and subject coordinators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <ReflectiveCard
                name="Sharmin Akter Eva"
                role="Vice Principal & Academic Head"
                badge="Leadership"
                status="Active"
                statusColor="#22c55e"
                idLabel="Faculty Credential"
                idValue="SIS-FAC-001"
                avatar={ASSETS.people.faculty}
                theme="dark"
                metalness={0.9}
                roughness={0.3}
                width={300}
                height={450}
                radius={22}
                className="shadow-xl"
              />

              <ReflectiveCard
                name="Shaykh Mahmudul Hasan"
                role="Scholar & Head of Arabic"
                badge="Quran & Arabic"
                status="Active"
                statusColor="#8AB326"
                idLabel="Faculty Credential"
                idValue="SIS-FAC-004"
                avatar={ASSETS.people.founderCeo}
                theme="dark"
                metalness={0.9}
                roughness={0.3}
                width={300}
                height={450}
                radius={22}
                className="shadow-xl"
              />

              <ReflectiveCard
                name="Sumaiya Binta Shahid"
                role="Lead Teacher, Pre- Section"
                badge="Lead Teacher"
                status="Active"
                statusColor="#BF5700"
                idLabel="Faculty Credential"
                idValue="SIS-FAC-006"
                avatar={ASSETS.people.faculty}
                theme="dark"
                metalness={0.9}
                roughness={0.3}
                width={300}
                height={450}
                radius={22}
                className="shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
