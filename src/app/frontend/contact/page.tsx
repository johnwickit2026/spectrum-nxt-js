"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Building2, Facebook, Instagram, Youtube, Globe, Linkedin, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    website_hp: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit message.");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        badge="Get In Touch"
        subtitle="We invite you to reach out, visit our campuses across Dhaka, or connect with our admissions counselors."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Contact Us" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Campus Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#BF5700] border-x border-b border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#BF5700] uppercase tracking-wider block mb-1">
                  Academic Campus 01
                </span>
                <h3 className="text-lg font-bold text-[#171E45]">Shantinagar Branch</h3>
                <p className="text-xs text-gray-600 mt-2">41/1, Shantinagar, Dhaka</p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4 text-xs">
                <p className="text-gray-500 font-medium">Contact Numbers:</p>
                <p className="font-semibold text-[#BF5700] mt-0.5">+88 01799-369685</p>
                <p className="font-semibold text-[#BF5700]">+88 01730-369686</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#92278F] border-x border-b border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#92278F] uppercase tracking-wider block mb-1">
                  Academic Campus 02
                </span>
                <h3 className="text-lg font-bold text-[#171E45]">Aftabnagar Branch</h3>
                <p className="text-xs text-gray-600 mt-2">House 28, Main Road, Block-D, Sector-2, Aftabnagar, Dhaka</p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4 text-xs">
                <p className="text-gray-500 font-medium">Contact Numbers:</p>
                <p className="font-semibold text-[#92278F] mt-0.5">+88 01329-763014</p>
                <p className="font-semibold text-[#92278F]">+88 01329-763015</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#8AB326] border-x border-b border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#8AB326] uppercase tracking-wider block mb-1">
                  Hifzul Quran Campus
                </span>
                <h3 className="text-lg font-bold text-[#171E45]">Residential Building</h3>
                <p className="text-xs text-gray-600 mt-2">41/1 (Bhaban-02), Shantinagar, Dhaka</p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4 text-xs">
                <p className="text-gray-500 font-medium">Contact Numbers:</p>
                <p className="font-semibold text-[#8AB326] mt-0.5">+88 01712-270559</p>
                <p className="font-semibold text-[#8AB326]">+88 01818-314269</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500 border-x border-b border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-yellow-600 uppercase tracking-wider block mb-1">
                  Proposed Permanent Campus
                </span>
                <h3 className="text-lg font-bold text-[#171E45]">Savar Campus</h3>
                <p className="text-xs text-gray-600 mt-2">Vakurta (Near Amin Bazar), Savar</p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4 text-xs">
                <p className="text-gray-500 font-medium">Contact Number:</p>
                <p className="font-semibold text-yellow-700 mt-0.5">+88 01726-208154</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#171E45] text-white rounded-3xl p-8 sm:p-10 shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FC800A]">
                    Central Administration
                  </span>
                  <h3 className="text-2xl font-black mt-1">Spectrum International School</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    &ldquo;Shaping Bright Minds, Building Better Future&rdquo;
                  </p>
                </div>

                <div className="space-y-4 text-xs text-gray-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Shantinagar Campus (Campus 01)</p>
                      <p className="text-gray-300">41/1, Shantinagar, Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Hotline & Admissions Desk</p>
                      <p className="text-gray-300">+88 01799-369685 / +88 01730-369686</p>
                      <p className="text-gray-300">Aftabnagar: +88 01329-763014 / +88 01329-763015</p>
                      <p className="text-gray-300">Hifz Campus: +88 01712-270559 / +88 01818-314269</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Official Email & Web</p>
                      <a href="mailto:spectrumintlschool@gmail.com" className="text-orange-300 hover:underline block">
                        spectrumintlschool@gmail.com
                      </a>
                      <a href="https://www.spectrumintlschool.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline block mt-0.5">
                        www.spectrumintlschool.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Visiting & Office Hours</p>
                      <p className="text-gray-300">Saturday – Thursday: 8:00 AM – 4:00 PM</p>
                      <p className="text-orange-300 font-semibold mt-1">Online Fee Payment: 7:00 AM – 5:00 PM daily</p>
                    </div>
                  </div>
                </div>

                {/* Social Links Box */}
                <div className="pt-4 border-t border-gray-700 space-y-2">
                  <p className="text-xs font-bold text-orange-200">Connect On Social Channels</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <a
                      href="https://facebook.com/spectruminternationalschool.dhaka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Facebook className="w-3.5 h-3.5 text-[#FC800A]" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com/sis.dhaka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#DD70DA]" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/school/spectrum-international-school-bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://youtube.com/@SpectrumTVBD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5 text-red-400" />
                      <span>Spectrum TV</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Container - Bigger and responsive */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-200 h-80 sm:h-96 bg-gray-200 relative group">
                <iframe
                  title="Spectrum International School Shantinagar Campus Location"
                  src="https://maps.google.com/maps?q=41/1+Shantinagar,+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/maps?q=41/1+Shantinagar,+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-[#171E45]/90 hover:bg-[#171E45] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 backdrop-blur-sm transition-all"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3 text-[#FC800A]" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                    Inquiry Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171E45] mt-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-gray-600 mt-2">
                    Have an inquiry regarding admissions, syllabus, or campus facilities? Send us a message and our reception will respond promptly.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                    <h3 className="text-lg font-bold text-green-800">Message Sent Successfully</h3>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Thank you for contacting Spectrum International School. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-5 py-2 bg-green-700 text-white font-bold text-xs rounded-xl shadow hover:bg-green-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="website_hp"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+880 17XX-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                      >
                        <option value="Admission Inquiry - Shantinagar Branch">Admission Inquiry - Shantinagar Branch</option>
                        <option value="Admission Inquiry - Aftabnagar Branch">Admission Inquiry - Aftabnagar Branch</option>
                        <option value="Hifzul Quran Program (Residential Campus)">Hifzul Quran Program (Residential Campus)</option>
                        <option value="Cambridge O/A Level Details">Cambridge O/A Level Details</option>
                        <option value="Tuition Fee & Accounts">Tuition Fee & Accounts</option>
                        <option value="Campus Visit Request">Campus Visit Request</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Write your questions or message in detail..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white text-xs font-bold shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
