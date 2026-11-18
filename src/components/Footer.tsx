import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, ExternalLink, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171E45] text-white pt-16 pb-8 border-t-4 border-[#FC800A]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700/60">
          {/* Col 1: School Identity & Address */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block shadow-md">
              <Image
                src="/images/logo.png"
                alt="Spectrum International School"
                width={190}
                height={45}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Spectrum International School is an esteemed English-medium institution established in 2020, combining Pearson Edexcel and Cambridge curriculum rigor with Islamic moral values and Hifzul Quran.
            </p>
            <p className="text-[#FC800A] text-xs font-semibold italic">
              &ldquo;Shaping Bright Minds, Building Better Future&rdquo;
            </p>
            <div className="pt-1 space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FC800A] shrink-0 mt-0.5" />
                <span><strong>Campus 01:</strong> 41/1, Shantinagar, Dhaka</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FC800A] shrink-0 mt-0.5" />
                <span><strong>Campus 02:</strong> House 28, Main Rd, Block-D, Sec-2, Aftabnagar, Dhaka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FC800A] shrink-0" />
                <div className="flex flex-col">
                  <span>+88 01799-369685 / +88 01730-369686</span>
                  <span className="text-gray-400">Aftabnagar: +88 01329-763014 / 15</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FC800A] shrink-0" />
                <a href="mailto:spectrumintlschool@gmail.com" className="hover:text-orange-300 transition-colors">
                  spectrumintlschool@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Admissions & Online Payment */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC800A] border-l-2 border-[#FC800A] pl-2.5">
              Admissions & Payments
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/frontend/apply" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Get Started / Apply Online</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/admission-procedures" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Admission Procedures & Criteria</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/academic-sessions" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Academic Sessions & Age Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/prospectus" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Download School Prospectus (PDF)</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/waiver" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Waiver & Financial Aid</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/online-payment" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FC800A]" />
                  <span>Online Fee Payment Procedures</span>
                </Link>
              </li>
            </ul>

            <div className="bg-[#1f2757] p-3 rounded-lg border border-indigo-900/50 mt-3 text-[11px] text-gray-300">
              <div className="flex items-center gap-1.5 text-orange-300 font-semibold mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Online Payment Daily Window</span>
              </div>
              <p>Strictly active between <strong>7:00 AM – 5:00 PM</strong> daily. Use registered student ID.</p>
            </div>
          </div>

          {/* Col 3: Academic Facilities */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#92278F] text-purple-300 border-l-2 border-[#92278F] pl-2.5">
              School Facilities
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/frontend/curriculum" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Academic Curriculum (Edexcel & Cambridge)</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/campus-facilities" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Campus Facilities & Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/library" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Modern Academic Library</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/ict-lab" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>ICT & Computer Laboratory</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/science-lab" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Science Laboratories (Physics, Chem, Bio)</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/sports-club" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Sports Club & Physical Fitness</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/language-club" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>English & Arabic Language Club</span>
                </Link>
              </li>
              <li>
                <Link href="/frontend/study-tour" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span>Study Tours & Educational Excursions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Affiliations & Accreditations */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-400 border-l-2 border-[#8AB326] pl-2.5">
              Accreditation & Portals
            </h3>
            <p className="text-xs text-gray-300">
              Approved examination center and certified instructional partner:
            </p>
            <div className="bg-white p-3 rounded-lg shadow inline-block">
              <Image
                src="/images/affiliation-logo.png"
                alt="Affiliations: British Council, Pearson Edexcel, Cambridge Assessment"
                width={200}
                height={55}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#8AB326]" />
                <span>Pearson Edexcel Attached Center</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#8AB326]" />
                <span>Cambridge Curriculum Standards</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#8AB326]" />
                <span>British Council Partner School</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://eximuseducation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-orange-300 hover:text-white transition-colors"
              >
                <span>Eximus Education Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Campuses & Social Hub */}
        <div className="py-8 border-b border-gray-700/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-300">
          <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/50">
            <span className="text-[#FC800A] font-bold block mb-1">Academic Campus 01</span>
            <p className="font-semibold text-white">Shantinagar Branch</p>
            <p className="text-gray-400 mt-1">41/1, Shantinagar, Dhaka</p>
            <p className="text-orange-200 mt-2 font-mono text-[11px]">+88 01799-369685 | +88 01730-369686</p>
          </div>

          <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/50">
            <span className="text-[#DD70DA] font-bold block mb-1">Academic Campus 02</span>
            <p className="font-semibold text-white">Aftabnagar Branch</p>
            <p className="text-gray-400 mt-1">House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka</p>
            <p className="text-orange-200 mt-2 font-mono text-[11px]">+88 01329-763014 | +88 01329-763015</p>
          </div>

          <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/50">
            <span className="text-[#8AB326] font-bold block mb-1">Hifzul Quran Campus</span>
            <p className="font-semibold text-white">Residential Building</p>
            <p className="text-gray-400 mt-1">41/1 (Bhaban-02), Shantinagar, Dhaka</p>
            <p className="text-orange-200 mt-2 font-mono text-[11px]">+88 01712-270559 | +88 01818-314269</p>
          </div>

          <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/50">
            <span className="text-yellow-400 font-bold block mb-1">Proposed Permanent Campus</span>
            <p className="font-semibold text-white">Savar Campus</p>
            <p className="text-gray-400 mt-1">Vakurta (Near Amin Bazar), Savar</p>
            <p className="text-orange-200 mt-2 font-mono text-[11px]">+88 01726-208154</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Spectrum International School (SIS). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/spectruminternationalschool.dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Facebook className="w-3.5 h-3.5 text-[#FC800A]" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/sis.dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DD70DA]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com/@SpectrumTVBD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>Spectrum TV BD</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/frontend/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/frontend/career" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/frontend/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/frontend/notices" className="hover:text-white transition-colors">Notices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
