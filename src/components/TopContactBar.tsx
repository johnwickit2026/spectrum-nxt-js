import Link from "next/link";
import { Phone, Mail, Clock, Facebook, Youtube, Instagram, CreditCard } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="bg-[#BF5700] text-white text-xs py-2 px-4 border-b border-[#a84d00] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Contact Numbers & Email */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-orange-200" />
            <a href="tel:+8801799369685" className="hover:text-orange-200 transition-colors font-medium">
              +88 01799-369685
            </a>
            <span className="text-orange-300">|</span>
            <a href="tel:+8801730369686" className="hover:text-orange-200 transition-colors font-medium">
              +88 01730-369686
            </a>
            <span className="text-orange-300">|</span>
            <a href="tel:+8801329763014" className="hover:text-orange-200 transition-colors hidden lg:inline font-medium" title="Aftabnagar Branch">
              Aftabnagar: +88 01329-763014
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-orange-200" />
            <a href="mailto:spectrumintlschool@gmail.com" className="hover:text-orange-200 transition-colors">
              spectrumintlschool@gmail.com
            </a>
          </div>
        </div>

        {/* Payment Advisory & Social */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <div className="hidden md:flex items-center gap-1.5 text-orange-100 bg-[#a64c00] px-2.5 py-0.5 rounded-full font-medium">
            <Clock className="w-3.5 h-3.5 text-yellow-300" />
            <span>Online Payment: 7:00 AM – 5:00 PM</span>
          </div>

          <Link
            href="/frontend/online-payment"
            className="flex items-center gap-1 bg-white text-[#BF5700] hover:bg-orange-50 px-2 py-0.5 rounded font-semibold transition-all text-[11px]"
          >
            <CreditCard className="w-3 h-3" />
            Pay Fees
          </Link>

          <div className="flex items-center gap-2 pl-2 border-l border-orange-400/40">
            <a
              href="https://facebook.com/spectruminternationalschool.dhaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SIS Facebook"
              className="text-white hover:text-orange-200 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/sis.dhaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SIS Instagram"
              className="text-white hover:text-orange-200 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com/@SpectrumTVBD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spectrum TV BD YouTube"
              className="text-white hover:text-orange-200 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
