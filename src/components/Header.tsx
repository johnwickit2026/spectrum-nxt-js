"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight, ExternalLink } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navGroups = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      dropdown: [
        { label: "SIS In Brief", href: "/frontend/aboutus" },
        { label: "Founder & CEO", href: "/frontend/ceo" },
        { label: "Management Committee", href: "/frontend/management" },
        { label: "Advisor Committee", href: "/frontend/advisor" },
        { label: "Sharia Committee", href: "/frontend/sharia" },
        { label: "Academic Head", href: "/frontend/head" },
        { label: "Academic Team", href: "/frontend/academic-team" },
        { label: "Non Academic Team", href: "/frontend/non-academic-team" },
        { label: "Support Team", href: "/frontend/support-team" },
        { label: "Recognition in Details", href: "/frontend/recognition" },
        { label: "School Notices", href: "/frontend/notices" },
        { label: "Appointment with CEO", href: "/frontend/appointment-ceo" },
        { label: "School Feedback", href: "/frontend/feedback" },
        { label: "Frequently Asked Questions", href: "/frontend/faq" },
        { label: "Contact Us", href: "/frontend/contact" },
      ],
    },
    {
      name: "Our Projects",
      dropdown: [
        { label: "Spectrum EduCare", href: "/frontend/educare" },
        { label: "Senior Citizen Care Home", href: "/frontend/senior-care" },
        {
          label: "School of Integrated Thoughts",
          href: "https://integratedthoughts.netlify.app",
          isExternal: true,
        },
      ],
    },
    {
      name: "School Facilities",
      dropdown: [
        { label: "Academic Curriculum", href: "/frontend/curriculum" },
        { label: "Campus Facilities", href: "/frontend/campus-facilities" },
        { label: "Modern Library", href: "/frontend/library" },
        { label: "ICT & Computer Lab", href: "/frontend/ict-lab" },
        { label: "Science Laboratories", href: "/frontend/science-lab" },
        { label: "Sports & Athletics Club", href: "/frontend/sports-club" },
        { label: "Language Club", href: "/frontend/language-club" },
        { label: "Study Tour & Field Trip", href: "/frontend/study-tour" },
      ],
    },
    {
      name: "Admission",
      dropdown: [
        { label: "Prospectus Overview & PDF", href: "/frontend/prospectus" },
        { label: "Academic Sessions", href: "/frontend/academic-sessions" },
        { label: "Admission Procedures", href: "/frontend/admission-procedures" },
        { label: "Get Started / Apply Online", href: "/frontend/apply" },
        { label: "Online Payment Guide", href: "/frontend/online-payment" },
        { label: "Waiver & Financial Aid", href: "/frontend/waiver" },
        {
          label: "Eximus Admission Form",
          href: "https://eximuseducation.com",
          isExternal: true,
        },
      ],
    },
    {
      name: "Media & Publication",
      dropdown: [
        { label: "Blogs & Articles", href: "/frontend/blogs" },
        { label: "Photo Gallery", href: "/frontend/photo-gallery" },
        { label: "Video Gallery", href: "/frontend/video-gallery" },
        { label: "Events & Calendar", href: "/frontend/events" },
        { label: "Career at SIS", href: "/frontend/career" },
      ],
    },
    {
      name: "Login",
      dropdown: [
        {
          label: "Management Login",
          href: "https://eximuseducation.com/login",
          isExternal: true,
        },
        {
          label: "Teachers & Employee Login",
          href: "https://eximuseducation.com/login",
          isExternal: true,
        },
        {
          label: "Student Portal Login",
          href: "https://eximuseducation.com/login",
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo and Affiliations */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-44 md:w-56 h-12 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Spectrum International School Logo"
              width={220}
              height={50}
              priority
              style={{ width: "auto", height: "auto" }}
              className="object-contain max-h-12"
            />
          </div>
          <div className="hidden lg:block border-l border-gray-200 pl-3">
            <Image
              src="/images/affiliation-logo.png"
              alt="Affiliations: British Council, Pearson Edexcel, Cambridge"
              width={110}
              height={36}
              style={{ width: "auto", height: "auto" }}
              className="object-contain max-h-9 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navGroups.map((group) => {
            if (!group.dropdown) {
              return (
                <Link
                  key={group.name}
                  href={group.href}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#FC800A] transition-colors rounded-md"
                >
                  {group.name}
                </Link>
              );
            }

            return (
              <div
                key={group.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(group.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 group-hover:text-[#FC800A] transition-colors rounded-md"
                >
                  {group.name}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-[#FC800A]" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                    activeDropdown === group.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 max-h-[80vh] overflow-y-auto">
                    {group.dropdown.map((subItem) => {
                      if (subItem.isExternal) {
                        return (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-[#BF5700] rounded-lg transition-colors group/item"
                          >
                            <span>{subItem.label}</span>
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover/item:text-[#BF5700]" />
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-[#BF5700] rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/frontend/apply"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white text-xs font-bold shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Apply Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#BF5700] transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white z-50 overflow-y-auto px-4 py-6 border-t border-gray-100 flex flex-col justify-between shadow-2xl">
          <div className="space-y-4">
            {navGroups.map((group) => (
              <div key={group.name} className="border-b border-gray-100 pb-2">
                {group.dropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 text-base font-semibold text-gray-800 cursor-pointer list-none">
                      {group.name}
                      <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 py-2 space-y-2 bg-gray-50/70 rounded-lg mt-1">
                      {group.dropdown.map((subItem) =>
                        subItem.isExternal ? (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 text-sm text-gray-600 hover:text-[#BF5700]"
                          >
                            <span>{subItem.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                          </a>
                        ) : (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-sm text-gray-600 hover:text-[#BF5700]"
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={group.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-semibold text-gray-800 hover:text-[#BF5700]"
                  >
                    {group.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <Link
              href="/frontend/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#BF5700] text-white font-bold rounded-xl shadow"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-gray-500 mt-4">
              Khadem Tower, 41/1 Shantinagar, Dhaka 1217
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
