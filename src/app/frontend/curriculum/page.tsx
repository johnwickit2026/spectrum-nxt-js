import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { BookOpen, CheckCircle2, Award, GraduationCap, ShieldCheck, ArrowRight, HeartHandshake, Sparkles, BookMarked } from "lucide-react";

export const metadata = {
  title: "Academic & Islamic Curriculum | Spectrum International School",
  description: "Pearson Edexcel and Cambridge International curriculum pathways, In-House Islamic Curriculum, and 4-Level Hifzul Quran Programme.",
};

const pearsonLevels = [
  {
    stage: "iPrimary",
    ages: "Ages 3–11",
    scope: "Includes Early Years & Primary Foundation",
    subjects: "Covers 11 subjects",
    accent: "border-[#BF5700]",
    badgeBg: "bg-orange-100 text-[#BF5700]",
  },
  {
    stage: "iLowerSecondary",
    ages: "Ages 11–14",
    scope: "Lower Secondary Analytical Framework",
    subjects: "Covers 11 subjects",
    accent: "border-[#92278F]",
    badgeBg: "bg-purple-100 text-[#92278F]",
  },
  {
    stage: "International GCSE (9–1)",
    ages: "Ages 14–16",
    scope: "Comprehensive Board Examination",
    subjects: "Available for 37 subjects",
    accent: "border-[#8AB326]",
    badgeBg: "bg-green-100 text-[#8AB326]",
  },
  {
    stage: "International AS / A Level",
    ages: "Ages 16–19",
    scope: "Pre-University Specialization",
    subjects: "Available for 21 subjects",
    accent: "border-[#171E45]",
    badgeBg: "bg-indigo-100 text-[#171E45]",
  },
];

const cambridgeLevels = [
  {
    stage: "Cambridge Primary",
    ages: "5 to 11 years old",
    desc: "A broad and balanced curriculum covering 10 subjects including English, Mathematics, and Science. Combines classroom and external assessments.",
    subjects: "10 Subjects (inc. English, Math, Science)",
  },
  {
    stage: "Cambridge Lower Secondary",
    ages: "11 to 14 years old",
    desc: "Seamless progression developing critical thinking and inquiry skills with classroom and external assessments.",
    subjects: "10 Subjects (inc. English, Math, Science)",
  },
  {
    stage: "Cambridge Upper Secondary",
    ages: "14 to 16 years old",
    desc: "Wide choice of subjects at Cambridge IGCSE (70+ subjects) and Cambridge O Level, leading to Cambridge ICE Certificate.",
    subjects: "Cambridge IGCSE (70+ subjects) & O Level",
  },
  {
    stage: "Cambridge Advanced",
    ages: "16 to 19 years old",
    desc: "Preparation for university entrance with Cambridge International AS & A Level (55+ subjects), Cambridge AICE Diploma, and Cambridge IPQ.",
    subjects: "AS & A Level (55+ subjects) & AICE Diploma",
  },
];

const hifzLevels = [
  {
    level: "Level-I",
    memorization: "Memorise Para 1–10, with regular revision and accurate recitation.",
    academic: "Grade II–III equivalent",
  },
  {
    level: "Level-II",
    memorization: "Memorise Para 11–20, while revising previously memorised portions.",
    academic: "Grade III–IV equivalent",
  },
  {
    level: "Level-III",
    memorization: "Memorise Para 21–30, with continued revision to strengthen retention.",
    academic: "Grade IV–V equivalent",
  },
  {
    level: "Level-IV",
    memorization: "Revise the Qur’an and complete Shunani (full recitation from memory).",
    academic: "Grade V–VI equivalent",
  },
];

export default function CurriculumPage() {
  return (
    <div>
      <PageBanner
        title="Academic & Islamic Curriculum"
        badge="Dual Excellence Framework"
        subtitle="A balanced continuum combining Pearson Edexcel, Cambridge International benchmarks, and our structured Islamic & 4-Level Hifzul Quran curriculum."
        breadcrumbs={[{ label: "School Facilities", href: "/frontend/campus-facilities" }, { label: "Academic Curriculum" }]}
        bgImage={ASSETS.academics.classroom1}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {/* Section 1: Overview */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              British Education Pathways
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45]">
              Pearson & Cambridge International Curriculum
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Spectrum we use Pearson and Cambridge to provide our students with a British education. For our students to learn more effectively and advance in their lives, we offer top-notch credentials, assessments, digital content, and learning opportunities. For teachers and students everywhere in the world, these pathways offer a dependable educational experience complete with top-notch resources and support services.
            </p>
          </div>

          {/* Section 2: Pearson iProgress Pathway */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">Pearson Framework</span>
                <h3 className="text-2xl font-black text-[#171E45]">Pearson iProgress Continuum</h3>
              </div>
              <span className="text-xs text-gray-500 font-medium">Ages 3 to 19 Academic Credentials</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pearsonLevels.map((lvl, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-50 rounded-2xl p-6 border-t-4 ${lvl.accent} border-x border-b border-gray-200 shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${lvl.badgeBg} inline-block mb-3`}>
                      {lvl.ages}
                    </span>
                    <h4 className="text-lg font-bold text-[#171E45]">{lvl.stage}</h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{lvl.scope}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 mt-4 text-xs font-semibold text-[#171E45]">
                    {lvl.subjects}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Cambridge Pathway */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">Cambridge Framework</span>
                <h3 className="text-2xl font-black text-[#171E45]">The Cambridge Pathway</h3>
              </div>
              <span className="text-xs text-gray-500 font-medium">Ages 5 to 19 Seamless Educational Journey</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              The Cambridge Pathway offers a seamless educational journey for students aged 5 to 19, from Primary to Secondary and Pre-University levels. Its flexible, internationally recognized curriculum allows students to start or continue their education across different countries. The standardized syllabus and assessment ensure fairness, validity, and reliability, with qualifications recognized by universities worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cambridgeLevels.map((cb, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-card transition-all"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-[#92278F] inline-block mb-3">
                      {cb.ages}
                    </span>
                    <h4 className="text-base font-bold text-[#171E45]">{cb.stage}</h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{cb.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-4 text-xs font-semibold text-[#92278F]">
                    {cb.subjects}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Learning with Purpose & Islamic Curriculum */}
          <div className="bg-[#FBF1E3] rounded-3xl p-8 sm:p-12 border border-[#EBE8E2] space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Character & Faith Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45]">
                Learning With Purpose: In-House Islamic Curriculum
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                At Spectrum International School, we believe education should shape both the mind and character. Our in-house curriculum complements academic learning with faith, moral values and practical guidance, helping students grow into thoughtful and responsible individuals.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Through Qur’anic learning and everyday practice, students develop honesty, kindness, respect, self-discipline and accountability. They learn to understand their responsibilities towards Allah, their families and the wider community, and to reflect these values in their choices and behaviour. Our aim is to nurture students who pursue knowledge with purpose and use their abilities to benefit others.
              </p>
            </div>

            {/* A. Al Qur'an Progression */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#171E45] flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-[#BF5700]" />
                <span>A. Al Qur&apos;an Progressive Stages</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-[#BF5700] uppercase tracking-wider block">
                    Playgroup – KG II
                  </span>
                  <h4 className="text-base font-bold text-[#171E45]">Elementary Nurani</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Recognise Arabic letters, read letters, vowel marks and joined words; develop correct pronunciation and early Tajweed skills; learn short surahs, daily duas & Qur’anic manners.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-[#92278F] uppercase tracking-wider block">
                    Grade I – II
                  </span>
                  <h4 className="text-base font-bold text-[#171E45]">Pre-Hifz Preparation: Nazera</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Complete Nazera with meaning through age-appropriate explanations; develop fluent recitation with Tajweed and Makharij; memorise selected important surahs and strengthen revision habits.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-[#8AB326] uppercase tracking-wider block">
                    Grade III – O Level
                  </span>
                  <h4 className="text-base font-bold text-[#171E45]">Continued Qur&apos;anic Learning</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Learn further important surahs and passages with meaning; strengthen Tajweed and understanding; apply Qur&apos;anic teachings and work towards 5–10 para memorisation with regular revision.
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-[#BF5700]">
                    Goal: At least 5 para with meaning before O Level, progressing towards 10.
                  </div>
                </div>
              </div>
            </div>

            {/* B & C: Language & Islamic Studies */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">Part B</span>
                <h4 className="text-base font-bold text-[#171E45]">Qur&apos;anic and Arabic Language</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Develop reading, writing, vocabulary & sentence understanding to build the foundational ability to directly understand the Holy Qur&apos;an.
                </p>
              </div>

              <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">Part C</span>
                <h4 className="text-base font-bold text-[#171E45]">Comprehensive Islamic Studies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Iman & Aqa&apos;id</p>
                    <p className="text-[11px] text-gray-600 mt-1">Articles of faith, Allah&apos;s names and attributes, revelation, Prophethood and the Hereafter.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Seerah & History</p>
                    <p className="text-[11px] text-gray-600 mt-1">The Prophet&apos;s life and character, other Prophets, Sahabah and Islamic history.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Worship & Fiqh</p>
                    <p className="text-[11px] text-gray-600 mt-1">Purification, Wudu, Salah, fasting, Zakah, Hajj and halal living.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Moral Development</p>
                    <p className="text-[11px] text-gray-600 mt-1">Honesty, kindness, patience, gratitude, modesty, respect and responsibility.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Hadith & Duas</p>
                    <p className="text-[11px] text-gray-600 mt-1">Selected teachings and supplications with meaning and practical daily application.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="font-bold text-[#171E45]">Responsible Living</p>
                    <p className="text-[11px] text-gray-600 mt-1">Social manners, valuing time, responsible digital behaviour and fair dealings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: The Four-Level Hifzul Quran Programme */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8AB326]">
                Tahfeezul Quran
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                The Four-Level Hifz Programme
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Eligible students enter four levels of Hifz with continued core academic learning (English, Mathematics, Science, and Bangla).
              </p>
            </div>

            {/* Pathways Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-bold text-[#BF5700] uppercase tracking-wider">Pathway 01</span>
                <h4 className="text-lg font-bold text-[#171E45] mt-1">General Academic Pathway</h4>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Continue regular academic studies alongside the Islamic Curriculum and the 5–10 para memorisation programme.
                </p>
              </div>

              <div className="p-6 bg-[#171E45] text-white rounded-2xl shadow-sm">
                <span className="text-xs font-bold text-[#FC800A] uppercase tracking-wider">Pathway 02</span>
                <h4 className="text-lg font-bold text-white mt-1">Hifzul Quran Pathway</h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Eligible students enter the Four Levels of Hifz with continued core academic lessons, progressing to full Quran memorization.
                </p>
              </div>
            </div>

            {/* 4 Levels Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#171E45] text-white">
                  <tr>
                    <th className="p-4 font-bold">Level</th>
                    <th className="p-4 font-bold">Qur&apos;an Memorisation & Revision</th>
                    <th className="p-4 font-bold">Academic Lessons Equivalent</th>
                    <th className="p-4 font-bold">Core Academic Subjects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {hifzLevels.map((lvl, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/40 transition-colors">
                      <td className="p-4 font-bold text-[#BF5700] whitespace-nowrap">{lvl.level}</td>
                      <td className="p-4 font-medium text-gray-800">{lvl.memorization}</td>
                      <td className="p-4 font-semibold text-[#171E45] whitespace-nowrap">{lvl.academic}</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">English, Mathematics, Science, Bangla</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Returning to Academic Pathway Note */}
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-200 text-xs text-gray-800 leading-relaxed flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#BF5700] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#171E45] mb-1">Returning to the Academic Pathway</h4>
                <p>
                  After completing Level IV, students must sit and qualify in an academic assessment before returning to the regular academic track. Assessment results determine appropriate class placement, after which students continue towards O Level.
                </p>
              </div>
            </div>

            {/* Milestone Card */}
            <div className="p-8 bg-gradient-to-br from-[#171E45] via-[#202958] to-[#171E45] text-white rounded-3xl shadow-xl max-w-4xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FC800A]">
                A Blessed Milestone in Hifz
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Our Successful Hafez</h3>
              <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Alhamdulillah, within a short span of our journey, <strong>eight students</strong> of Spectrum International School have completed Hifz, each becoming a Hafiz of the Holy Qur’an. This blessed achievement strengthens our commitment to nurturing a generation devoted to the Qur’an alongside modern education. As more students advance towards completing Hifz, we remain dedicated to this noble work, In Shaa Allah.
              </p>
              <p className="font-serif italic text-sm text-orange-200 pt-2">
                &ldquo;And recite the Qur’an with tarteel.&rdquo; — (Al Muzammil: Verse 04)
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-[#171E45] text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Ready to Start Your Child&apos;s Academic Journey?</h3>
              <p className="text-xs text-gray-300">Download the complete prospectus or submit an admission application online.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/frontend/apply"
                className="px-6 py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/frontend/prospectus"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-all"
              >
                Download Prospectus (PDF)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
