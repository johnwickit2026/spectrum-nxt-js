"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Play,
  HeartHandshake,
  GraduationCap,
  FlaskConical,
  Laptop,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { useGsapContext, gsap } from "@/lib/gsap";
import AdmissionPopup from "@/components/AdmissionPopup";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({
    students: "800+",
    teachers: "110+",
    campuses: "2",
    passRate: "100%",
  });

  useGsapContext(containerRef, () => {
    // Hero Entrance Sequence
    const heroTl = gsap.timeline();
    heroTl
      .from(".hero-badge", { opacity: 0, y: -20, duration: 0.6, ease: "power2.out" })
      .from(".hero-title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-cta", { opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.3")
      .from(".hero-card", { opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.2");

    // ScrollTrigger reveal for sections
    const reveals = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    reveals.forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Staggered Cards
    const cardGrids = gsap.utils.toArray<HTMLElement>(".gsap-stagger-grid");
    cardGrids.forEach((grid) => {
      const cards = grid.querySelectorAll(".gsap-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animated Statistics Counters
    const statCounters = gsap.utils.toArray<HTMLElement>(".stat-counter");
    statCounters.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.innerText = `${prefix}${Math.floor(obj.val)}${suffix}`;
        },
      });
    });
  });

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">
      {/* Admission Promotion Modal */}
      <AdmissionPopup />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#171E45] text-white">
        {/* Background Image Composition with Dark & Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.hero.banner1}
            alt="Spectrum International School Campus Activity"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171E45] via-[#171E45]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171E45] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BF5700]/90 text-orange-100 text-xs font-semibold backdrop-blur border border-orange-500/40">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Admissions Open for Session 2026–2027</span>
            </div>

            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Harmonizing <span className="text-[#FC800A]">Global Academic</span> Rigor with <span className="text-[#DD70DA]">Islamic Moral</span> Excellence
            </h1>

            <p className="hero-desc text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
              An internationally recognized English-medium institution in Shantinagar, Dhaka. Offering Pearson Edexcel and Cambridge qualifications integrated seamlessly with Tahfeezul Quran and holistic character building.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/frontend/apply"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white font-bold text-sm shadow-lg hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/frontend/prospectus"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur border border-white/20 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-orange-300" />
                <span>View Prospectus</span>
              </Link>

              <Link
                href="/frontend/aboutus"
                className="px-5 py-3.5 text-gray-300 hover:text-white font-medium text-sm transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-gray-700/60 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-[#FC800A]">800+</p>
                <p className="text-xs text-gray-300">Enrolled Students</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-[#DD70DA]">110+</p>
                <p className="text-xs text-gray-300">Qualified Educators</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-[#8AB326]">100%</p>
                <p className="text-xs text-gray-300">Pass Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Feature Showcase Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="hero-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF5700] flex items-center justify-center text-white shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dual Academic Pathway</h3>
                  <p className="text-xs text-gray-300">Pearson Edexcel & Cambridge International</p>
                </div>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Structured from Play Group to A-Levels, empowering students with critical thinking, advanced science experimentation, and mathematical mastery.
              </p>
            </div>

            <div className="hero-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#92278F] flex items-center justify-center text-white shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tahfeezul Quran & Tarbiyah</h3>
                  <p className="text-xs text-gray-300">Special Girls & Boys Hifz Sections</p>
                </div>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Full Quran memorization with certified Qaris alongside modern academic schooling, fostering strong spiritual character and moral leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & EDITORIAL OVERVIEW */}
      <section className="section-padding bg-white gsap-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Collage */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={ASSETS.academics.classroom1}
                  alt="Students engaged in interactive classroom at SIS"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#171E45]">Modern Learner-Centric Classrooms</h4>
                    <p className="text-xs text-gray-600">Multimedia-equipped, ventilated & child-friendly</p>
                  </div>
                  <span className="text-xs font-semibold text-[#BF5700] bg-orange-50 px-2.5 py-1 rounded-md">
                    Play – A Level
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden shadow-card">
                  <Image
                    src={ASSETS.facilities.ictLab}
                    alt="SIS Computer & ICT Lab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-xl overflow-hidden shadow-card">
                  <Image
                    src={ASSETS.facilities.scienceLab}
                    alt="SIS Science Investigation Laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-[#BF5700] text-xs font-bold uppercase tracking-wider">
                Welcome to Spectrum
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171E45] leading-tight">
                Where Young Minds Discover Purpose, Knowledge, and Character
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded with a visionary commitment to educational excellence, Spectrum International School (SIS) has evolved into one of Dhaka&apos;s most respected educational hubs. Situated at Khadem Tower, Shantinagar, SIS provides an exceptional standard of schooling for children from early years through high school.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#171E45]">Global Accreditations</h4>
                    <p className="text-xs text-gray-500">
                      Registered and recognized with Pearson Edexcel, Cambridge Assessment, and the British Council.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#171E45]">Holistic Tarbiyah & Ethics</h4>
                    <p className="text-xs text-gray-500">
                      Integrating authentic Islamic principles, Quranic Tajweed, and character formation with modern curricula.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8AB326] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#171E45]">Safe, 24/7 Monitored Campus</h4>
                    <p className="text-xs text-gray-500">
                      Equipped with high-definition CCTV, fire safety, lab protection, and dedicated pastoral caregivers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/frontend/aboutus"
                  className="px-6 py-3 bg-[#BF5700] hover:bg-[#a64c00] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <span>Explore SIS In Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/frontend/admission-procedures"
                  className="px-6 py-3 border border-gray-300 hover:border-[#BF5700] text-gray-700 hover:text-[#BF5700] text-xs font-semibold rounded-xl transition-all"
                >
                  Admission Procedures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION, MISSION & PHILOSOPHY */}
      <section className="section-padding bg-[#FBF1E3]/50 border-y border-[#EBE8E2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 gsap-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-2">
              Vision, Mission & Educational Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Our core beliefs inspire every lesson, project, and daily interaction at Spectrum International School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gsap-stagger-grid">
            {/* Vision */}
            <div className="gsap-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-[#BF5700]">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#BF5700] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#171E45] mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To nurture enlightened, ethically grounded global citizens equipped with international academic excellence, high moral character, and lifelong curiosity to serve humanity positively.
              </p>
            </div>

            {/* Mission */}
            <div className="gsap-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-[#92278F]">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#92278F] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#171E45] mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To deliver a balanced, rigorous British curriculum alongside profound Islamic values, empowering every learner to excel in analytical reasoning, linguistic mastery, and spiritual integrity.
              </p>
            </div>

            {/* Philosophy */}
            <div className="gsap-card bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-[#8AB326]">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#8AB326] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#171E45] mb-3">Our Philosophy</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every child is a unique amanah (trust). We cultivate their potential through empathy, active inquiry, play-infused foundational learning, and structured mentor-led guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC CURRICULUM */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Academic Pathways
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Structured Academic Continuum
              </h2>
            </div>
            <Link
              href="/frontend/curriculum"
              className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors mt-4 md:mt-0 flex items-center gap-1"
            >
              <span>Explore Complete Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-grid">
            {/* Early Years */}
            <div className="gsap-card bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2.5 py-0.5 rounded-full">
                  Play Group – KG
                </span>
                <h3 className="text-lg font-bold text-[#171E45] mt-3">Early Childhood Development</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Interactive phonics, motor skills, sensory play, storytelling, and foundational Islamic etiquette in a loving, warm environment.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium">
                Focus: Social skills, phonics, joyful discovery
              </div>
            </div>

            {/* Primary */}
            <div className="gsap-card bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#92278F] uppercase tracking-wider bg-purple-100 px-2.5 py-0.5 rounded-full">
                  Class I – V
                </span>
                <h3 className="text-lg font-bold text-[#171E45] mt-3">Junior Academic Foundations</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Core mastery in Mathematics, English Literature, Science inquiry, ICT basics, and Arabic linguistic comprehension.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium">
                Focus: Conceptual clarity, language immersion
              </div>
            </div>

            {/* Middle & O Level */}
            <div className="gsap-card bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#8AB326] uppercase tracking-wider bg-green-100 px-2.5 py-0.5 rounded-full">
                  Class VI – X (O Level)
                </span>
                <h3 className="text-lg font-bold text-[#171E45] mt-3">Pearson Edexcel & Cambridge</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Advanced Science (Physics, Chemistry, Biology), Further Pure Math, ICT, Accounting, and Business Studies preparation.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium">
                Focus: Board exam rigor, lab experimentation
              </div>
            </div>

            {/* A Level & Hifz */}
            <div className="gsap-card bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#171E45] uppercase tracking-wider bg-indigo-100 px-2.5 py-0.5 rounded-full">
                  A Levels & Tahfeez
                </span>
                <h3 className="text-lg font-bold text-[#171E45] mt-3">Senior College & Hifz Wing</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  University pathway preparation with in-depth subject specializations alongside our dedicated Tahfeezul Quran department.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] text-gray-500 font-medium">
                Focus: University entrance, Tajweed mastery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED FACILITIES */}
      <section className="section-padding bg-[#171E45] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14 gsap-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FC800A]">
              Infrastructure & Amenities
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              State-of-the-Art Learning Spaces
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Designed to ignite scientific inquiry, computational prowess, physical endurance, and literary exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-grid">
            {/* ICT Lab */}
            <div className="gsap-card bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#FC800A]/60 transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ASSETS.facilities.ictLab}
                  alt="Modern ICT Lab at Spectrum"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-bold mb-1">
                  <Laptop className="w-4 h-4" />
                  <span>Computing & Tech</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Modern ICT Laboratory</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  High-speed networked computing workstations, robotics toolkits, and software tools for student digital literacy.
                </p>
              </div>
            </div>

            {/* Science Lab */}
            <div className="gsap-card bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#DD70DA]/60 transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ASSETS.facilities.scienceLab}
                  alt="Science Laboratory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-purple-300 text-xs font-bold mb-1">
                  <FlaskConical className="w-4 h-4" />
                  <span>Hands-on Science</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Multi-Discipline Science Labs</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Fully equipped apparatus, safety fume hoods, and glassware for physics, chemistry, and biology experiments.
                </p>
              </div>
            </div>

            {/* Library */}
            <div className="gsap-card bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/60 transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ASSETS.facilities.library}
                  alt="Campus Library"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-green-400 text-xs font-bold mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Reading & Research</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Knowledge Resource Library</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Thousands of academic titles, encyclopedias, Islamic literature, periodicals, and quiet study alcoves.
                </p>
              </div>
            </div>

            {/* Sports & Play */}
            <div className="gsap-card bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/60 transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ASSETS.facilities.sportsClub}
                  alt="Sports & Activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold mb-1">
                  <Award className="w-4 h-4" />
                  <span>Athletics & Fitness</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Sports & Athletics Club</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Indoor gymnastics, table tennis, badminton, martial arts, and annual athletic championship meets.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/frontend/campus-facilities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#BF5700] hover:bg-orange-600 text-white text-xs font-bold rounded-full transition-all"
            >
              <span>View All Campus Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER & CEO MESSAGE */}
      <section className="section-padding bg-white gsap-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FBF1E3] rounded-3xl p-8 sm:p-12 border border-[#EBE8E2] shadow-card relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-orange-200/50 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-4">
                  <Image
                    src={ASSETS.people.founderCeo}
                    alt="Founder & CEO - Spectrum International School"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-extrabold text-[#171E45]">Dr. M. A. Rahman</h4>
                <p className="text-xs font-semibold text-[#BF5700]">Founder & Chief Executive Officer</p>
                <p className="text-[11px] text-gray-500 mt-1">Spectrum International School</p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                  Leadership Address
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] leading-snug">
                  &ldquo;Nurturing a Generation of Confident Thinkers Anchored in Unshakable Faith&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Welcome to Spectrum International School. Our commitment from day one has been to dissolve the false divide between international academic standard and Islamic moral values. Our students conquer Pearson Edexcel and Cambridge examinations with stellar results, while their hearts resonate with the timeless wisdom of the Holy Quran and ethical character.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  We look forward to welcoming your family into our community, where your child&apos;s dignity, intellect, and future are cherished every single day.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/frontend/ceo"
                    className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Full CEO Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/frontend/appointment-ceo"
                    className="text-xs font-semibold px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-[#BF5700] text-gray-700 hover:text-[#BF5700] transition-all"
                  >
                    Schedule Appointment with CEO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLAY & LEARN (EARLY YEARS FOCUS) */}
      <section className="section-padding bg-[#FBF1E3]/40 border-t border-[#EBE8E2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FC800A]">
                Foundational Years
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171E45] leading-tight">
                Play & Learn: Where Curiosity Blossoms
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                At Spectrum, our early childhood pedagogy is built around hands-on discovery. Children learn through imaginative play, tactile sensory stations, music-free rhythmic rhymes, phonics mastery, and nature exploration.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-sm font-bold text-[#171E45]">Montessori-Inspired</h4>
                  <p className="text-xs text-gray-500 mt-1">Tactile wooden apparatus for fine motor skill development.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-sm font-bold text-[#171E45]">Joyful Phonics</h4>
                  <p className="text-xs text-gray-500 mt-1">Multi-sensory English reading and conversational confidence.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/frontend/academic-sessions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#BF5700] text-white text-xs font-bold rounded-xl shadow hover:bg-orange-700 transition-all"
                >
                  <span>Explore Early Years Sessions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={ASSETS.activities.creativeArt}
                alt="Play & Learn early childhood activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST EVENTS & NOTICES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Campus Life
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Upcoming Events & Happenings
              </h2>
            </div>
            <Link
              href="/frontend/events"
              className="text-xs font-bold text-[#92278F] hover:text-[#BF5700] transition-colors mt-4 md:mt-0 flex items-center gap-1"
            >
              <span>View All Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-stagger-grid">
            {/* Event 1 */}
            <div className="gsap-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={ASSETS.activities.bookFestival}
                    alt="Book Festival"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#BF5700] text-white text-xs font-bold px-3 py-1 rounded-lg shadow">
                    Dec 05, 2026
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    <span>09:00 AM – 03:00 PM</span>
                  </div>
                  <h3 className="text-base font-bold text-[#171E45] hover:text-[#BF5700] transition-colors">
                    Annual Book Festival & Reading Culture Week
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    A vibrant week dedicated to cultivating literary curiosity, student book stalls, and storytelling competitions.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/frontend/events"
                  className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] flex items-center gap-1"
                >
                  <span>Event Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="gsap-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={ASSETS.activities.orientation}
                    alt="Orientation Program"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#92278F] text-white text-xs font-bold px-3 py-1 rounded-lg shadow">
                    Nov 28, 2026
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    <span>10:00 AM – 01:00 PM</span>
                  </div>
                  <h3 className="text-base font-bold text-[#171E45] hover:text-[#92278F] transition-colors">
                    Parent-Teacher Orientation Program 2026
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    Interactive dialogue between faculty and parents to align on curriculum milestones and pastoral care.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/frontend/events"
                  className="text-xs font-bold text-[#92278F] hover:text-[#BF5700] flex items-center gap-1"
                >
                  <span>Event Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="gsap-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={ASSETS.activities.hifzDepartment}
                    alt="Hifzul Quran Recitation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#8AB326] text-white text-xs font-bold px-3 py-1 rounded-lg shadow">
                    Dec 15, 2026
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-green-600" />
                    <span>09:30 AM – 12:30 PM</span>
                  </div>
                  <h3 className="text-base font-bold text-[#171E45] hover:text-green-700 transition-colors">
                    Girls Hifz Department Quran Recitation Celebration
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    Honoring our young Huffaz for exemplary dedication to Quran memorization and melodic Tajweed.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/frontend/events"
                  className="text-xs font-bold text-[#8AB326] hover:text-[#BF5700] flex items-center gap-1"
                >
                  <span>Event Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PHOTO GALLERY MOSAIC */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gsap-reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Visual Moments
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Life & Activities at Spectrum
              </h2>
            </div>
            <Link
              href="/frontend/photo-gallery"
              className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors mt-4 md:mt-0 flex items-center gap-1"
            >
              <span>Explore Full Photo Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gsap-stagger-grid">
            {ASSETS.gallery.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="gsap-card relative h-56 rounded-xl overflow-hidden shadow group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-orange-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="text-xs font-semibold leading-tight mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="section-padding bg-white gsap-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Parent Perspectives
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-2">
              Voices of Our School Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FBF1E3]/60 p-8 rounded-2xl border border-[#EBE8E2] shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                &ldquo;Finding a school in Dhaka that delivers authentic Cambridge O & A Level rigor without compromising our child&apos;s moral character felt impossible until we discovered Spectrum. The teachers are genuinely devoted.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <h4 className="text-sm font-bold text-[#171E45]">Engr. Mahmudul Hassan</h4>
                <p className="text-xs text-gray-500">Parent of Grade VII & IV Students</p>
              </div>
            </div>

            <div className="bg-[#FBF1E3]/60 p-8 rounded-2xl border border-[#EBE8E2] shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                &ldquo;Our daughter memorized 15 juz in the Girls Hifz Section while keeping an outstanding GPA in her standard English-medium subjects. The balanced scheduling is remarkable.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <h4 className="text-sm font-bold text-[#171E45]">Dr. Naila Parveen</h4>
                <p className="text-xs text-gray-500">Parent of Hifz & Class V Student</p>
              </div>
            </div>

            <div className="bg-[#FBF1E3]/60 p-8 rounded-2xl border border-[#EBE8E2] shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                &ldquo;The early years Play & Learn program gave our twin boys tremendous linguistic confidence and curiosity. The security, cleanliness, and communication from Khadem Tower campus are world-class.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <h4 className="text-sm font-bold text-[#171E45]">Tariqul Islam FCA</h4>
                <p className="text-xs text-gray-500">Parent of KG & Class II Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ANIMATED STATISTICS */}
      <section className="section-padding bg-[#171E45] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FC800A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 gsap-reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FC800A]">
              Impact & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Spectrum by the Numbers
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              A decade of academic excellence, ethical grounding, and institutional distinction in Shantinagar, Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FC800A]/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-[#FC800A]"
                data-target="800"
                data-suffix="+"
              >
                800+
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Active Students</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Play – A Level</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#DD70DA]/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-[#DD70DA]"
                data-target="110"
                data-suffix="+"
              >
                110+
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Expert Teachers</p>
              <p className="text-[10px] text-gray-400 mt-0.5">British Council Trained</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8AB326]/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-[#8AB326]"
                data-target="100"
                data-suffix="%"
              >
                100%
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Exam Pass Rate</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Edexcel & Cambridge</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-yellow-400"
                data-target="2"
                data-suffix=""
              >
                2
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Modern Campuses</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Khadem Tower, Dhaka</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-orange-400"
                data-target="12"
                data-suffix=":1"
              >
                12:1
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Student-Teacher Ratio</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Personalized Care</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-300/50 transition-all">
              <p
                className="stat-counter text-3xl sm:text-4xl font-black text-purple-300"
                data-target="150"
                data-suffix="+"
              >
                150+
              </p>
              <p className="text-xs text-gray-300 font-semibold mt-2">Huffaz Groomed</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Certified Tajweed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. RECOGNITION & PARTNERS */}
      <section className="py-12 bg-[#FBF1E3] border-y border-[#EBE8E2]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            Internationally Recognized & Affiliated With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200">
              <Image
                src="/images/affiliation-logo.png"
                alt="Affiliations: British Council, Pearson Edexcel, Cambridge"
                width={260}
                height={65}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 13. ADMISSION CALL TO ACTION */}
      <section className="section-padding bg-gradient-to-r from-[#BF5700] via-[#FC800A] to-[#BF5700] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur">
            Join the Spectrum Family
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Secure Your Child&apos;s Academic & Spiritual Future Today
          </h2>
          <p className="text-sm sm:text-base text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Admissions are currently underway for Play Group through Class VIII, Cambridge O/A Levels, and the Hifzul Quran Department. Contact our admissions desk or apply online.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/frontend/apply"
              className="px-8 py-4 bg-[#171E45] hover:bg-black text-white font-bold text-sm rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4 text-[#FC800A]" />
            </Link>

            <Link
              href="/frontend/contact"
              className="px-8 py-4 bg-white hover:bg-orange-50 text-[#BF5700] font-bold text-sm rounded-full shadow-lg transition-all"
            >
              Contact Admissions Desk
            </Link>
          </div>

          <div className="pt-4 text-xs text-orange-100">
            Helpline: +880 1799-369685 / +880 1730-369686 | Khadem Tower, 41/1 Shantinagar, Dhaka 1217
          </div>
        </div>
      </section>
    </div>
  );
}
