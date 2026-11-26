import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Clock, Phone, CreditCard, ShieldCheck, AlertCircle, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Online Payment | Spectrum International School",
  description: "Guidelines and portal for online fee payment. Active daily window: 7:00 AM – 5:00 PM. Helplines: +880 1799-369685 / +880 1730-369686.",
};

export default function OnlinePaymentPage() {
  return (
    <div>
      <PageBanner
        title="Online Fee Payment"
        badge="Payment Procedures"
        subtitle="Secure online fee payment instructions, operating window, student verification, and dedicated support helplines."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Online Payment" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Critical Timing Alert Banner */}
          <div className="bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white p-6 sm:p-8 rounded-3xl shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur">
                <Clock className="w-3.5 h-3.5 text-yellow-300" />
                <span>Active Daily Payment Window</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">7:00 AM to 5:00 PM Only</h3>
              <p className="text-xs text-orange-100 max-w-lg leading-relaxed">
                In adherence to banking and reconciliation guidelines, our online payment channel processes transactions strictly between 7:00 AM and 5:00 PM daily. Transactions attempted outside this window will not be processed.
              </p>
            </div>

            <a
              href="https://www.eximusedu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-[#BF5700] hover:bg-orange-50 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0"
            >
              <CreditCard className="w-4 h-4" />
              <span>Proceed to Pay Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Payment Helplines Card */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Dedicated Support
            </span>
            <h3 className="text-xl font-extrabold text-[#171E45] mt-1 mb-4">
              Payment & Accounts Helplines
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              If you experience any difficulties while paying or need assistance locating your Student ID invoice, our accounts desks are available during office hours:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF5700] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500">Helpline 1 (Accounts Desk)</p>
                  <a href="tel:+8801799369685" className="text-base font-black text-[#BF5700] hover:underline">
                    +880 1799-369685
                  </a>
                  <p className="text-[11px] text-gray-400">Available: 8:00 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#92278F] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500">Helpline 2 (Finance Officer)</p>
                  <a href="tel:+8801730369686" className="text-base font-black text-[#92278F] hover:underline">
                    +880 1730-369686
                  </a>
                  <p className="text-[11px] text-gray-400">Available: 8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Pay Guide */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 space-y-6">
            <h3 className="text-lg font-bold text-[#171E45]">Step-by-Step Payment Instructions</h3>
            <ol className="space-y-3 text-xs sm:text-sm text-gray-700 list-decimal list-inside leading-relaxed">
              <li>Open the Eximus Education payment portal via the <strong>Pay Now</strong> button above.</li>
              <li>Enter your unique <strong>Student ID</strong> (provided on the student admission slip or ID card).</li>
              <li>Verify the student&apos;s name, grade, and current month invoice balance.</li>
              <li>Select your preferred payment channel: bKash, Nagad, Rocket, Visa, Mastercard, or Citytouch Net Banking.</li>
              <li>Complete OTP verification and download the digital receipt for your records.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
