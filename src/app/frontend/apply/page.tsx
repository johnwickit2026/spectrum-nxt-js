"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { ExternalLink, Send, CheckCircle2, AlertCircle, Phone, Sparkles } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    student_name: "",
    gender: "Male",
    dob: "",
    applying_grade: "Play Group",
    academic_session: "June to June Regular Session",
    preferred_campus: "Academic Campus 01 (Shantinagar Branch)",
    parent_name: "",
    email: "",
    phone: "",
    current_school: "",
    hifz_interest: "No",
    address: "",
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
        body: JSON.stringify({
          name: formData.parent_name,
          email: formData.email,
          phone: formData.phone,
          subject: `Admission Application: ${formData.student_name} (${formData.applying_grade})`,
          message: `Applicant: ${formData.student_name}, Gender: ${formData.gender}, DOB: ${formData.dob}, Campus: ${formData.preferred_campus}, Grade: ${formData.applying_grade}, Prior School: ${formData.current_school}, Hifz Interest: ${formData.hifz_interest}, Address: ${formData.address}`,
          website_hp: formData.website_hp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit admission application.");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div>
      <PageBanner
        title="Get Started / Apply Online"
        badge="Online Admissions"
        subtitle="Submit an initial online application for admission to Spectrum International School for Academic Session 2026–2027."
        breadcrumbs={[{ label: "Admission", href: "/frontend/admission-procedures" }, { label: "Apply Online" }]}
        bgImage={ASSETS.hero.banner1}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Eximus Education Portal Banner */}
          <div className="bg-[#171E45] text-white p-6 sm:p-8 rounded-3xl shadow-card border border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full">
                Eximus Education Portal
              </span>
              <h3 className="text-lg sm:text-xl font-bold">Official Online Admission Portal</h3>
              <p className="text-xs text-gray-300">
                You may also complete the formal digital enrollment form directly through our central Eximus Education portal.
              </p>
            </div>
            <a
              href="https://www.eximusedu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FC800A] hover:bg-orange-500 text-white font-bold text-xs rounded-xl shadow transition-all shrink-0"
            >
              <span>Open Eximus Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Online Application Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
                Quick Application Form
              </span>
              <h2 className="text-2xl font-extrabold text-[#171E45] mt-1">
                Student Admission Application
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                Fill in the details below. Our admissions desk will review the submission and contact you to schedule the readiness session.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-bold text-green-800">Application Submitted Successfully</h3>
                <p className="text-xs text-green-700 leading-relaxed max-w-md mx-auto">
                  Thank you for applying to Spectrum International School. Our admissions officer will contact you within 24 to 48 hours to confirm the assessment date.
                </p>
                <div className="pt-2 text-xs text-gray-600">
                  For immediate queries: +88 01799-369685 / +88 01730-369686 / +88 01329-763014 | spectrumintlschool@gmail.com
                </div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rayan Ahmed"
                      value={formData.student_name}
                      onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Academic Session Cycle *</label>
                    <select
                      value={formData.academic_session}
                      onChange={(e) => setFormData({ ...formData, academic_session: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    >
                      <option value="June to June Regular Session">June Session (June to June)</option>
                      <option value="January to January Session">January Session (Jan to Jan)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Campus Branch *</label>
                    <select
                      value={formData.preferred_campus}
                      onChange={(e) => setFormData({ ...formData, preferred_campus: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    >
                      <option value="Academic Campus 01 (Shantinagar Branch)">Campus 01: Shantinagar Branch</option>
                      <option value="Academic Campus 02 (Aftabnagar Branch)">Campus 02: Aftabnagar Branch</option>
                      <option value="Hifzul Quran Campus (Residential Building, Shantinagar)">Hifzul Quran Campus (Shantinagar)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Grade Applying For *</label>
                    <select
                      value={formData.applying_grade}
                      onChange={(e) => setFormData({ ...formData, applying_grade: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    >
                      <option value="Play Group">Play Group</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Kindergarten (KG)">Kindergarten (KG)</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="O Level (Class IX)">O Level (Class IX)</option>
                      <option value="O Level (Class X)">O Level (Class X)</option>
                      <option value="A Level (Class XI)">A Level (Class XI)</option>
                      <option value="A Level (Class XII)">A Level (Class XII)</option>
                      <option value="Tahfeezul Quran (Boys)">Tahfeezul Quran (Boys)</option>
                      <option value="Tahfeezul Quran (Girls)">Tahfeezul Quran (Girls)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Tahfeezul Quran Interest?</label>
                    <select
                      value={formData.hifz_interest}
                      onChange={(e) => setFormData({ ...formData, hifz_interest: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    >
                      <option value="No">No - General Cambridge Curriculum Only</option>
                      <option value="Yes - Full Hifz">Yes - Full Tahfeezul Quran Wing</option>
                      <option value="Yes - Part-Time Tajweed">Yes - Part-Time Quranic Tajweed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Parent's name"
                      value={formData.parent_name}
                      onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Parent Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Phone *</label>
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
                  <label className="block text-xs font-bold text-gray-700 mb-1">Residential Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shantinagar, Malibagh, Kakrail, Bailey Road, Dhaka"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white text-xs font-bold shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "loading" ? "Submitting Application..." : "Submit Admission Application"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
