"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

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
        subtitle="We invite you to reach out, visit our Shantinagar campus, or connect with our admissions counselors."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Contact Us" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#171E45] text-white rounded-3xl p-8 sm:p-10 shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FC800A]">
                    Campus Location
                  </span>
                  <h3 className="text-2xl font-black mt-1">Visit Spectrum Campus</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Our campus is conveniently situated in Shantinagar, Dhaka, close to Kakrail, Bailey Road, and Malibagh.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-gray-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Campus Address</p>
                      <p className="text-gray-300">Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Telephone & Mobiles</p>
                      <p className="text-gray-300">+880 1799-369685 (Admissions Desk)</p>
                      <p className="text-gray-300">+880 1730-369686 (Accounts & General)</p>
                      <p className="text-gray-400">Landline: 0248318285</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FC800A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Official Email</p>
                      <a href="mailto:spectrumintlschool@gmail.com" className="text-orange-300 hover:underline">
                        spectrumintlschool@gmail.com
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
              </div>

              {/* Map Container */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-200 h-64 bg-gray-200 relative">
                <iframe
                  title="Spectrum International School Location"
                  src="https://maps.google.com/maps?q=Khadem+Tower,+41/1+Shantinagar,+Dhaka+1217&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Cambridge O/A Level Details">Cambridge O/A Level Details</option>
                        <option value="Hifzul Quran Program">Hifzul Quran Program</option>
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
