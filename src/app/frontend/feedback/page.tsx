"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { MessageSquare, User, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Academic Quality",
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
      const res = await fetch("/api/feedback.php", {
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
          category: "Academic Quality",
          message: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit feedback.");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div>
      <PageBanner
        title="School Feedback & Suggestions"
        badge="Community Voice"
        subtitle="We value the opinions, constructive feedback, and suggestions of parents and community members."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Feedback" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
                Continuous Improvement
              </span>
              <h2 className="text-2xl font-extrabold text-[#171E45] mt-1">
                Share Your Feedback
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                All feedback is reviewed weekly by the Academic Council and Management Committee.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-bold text-green-800">Feedback Submitted</h3>
                <p className="text-xs text-green-700 leading-relaxed">
                  Thank you for helping us elevate the educational quality and student experience at Spectrum International School.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2 bg-green-700 text-white font-bold text-xs rounded-xl shadow hover:bg-green-800 transition-colors"
                >
                  Send Another Feedback
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
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sabrina Akhter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#92278F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#92278F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+880 17XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#92278F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#92278F]"
                  >
                    <option value="Academic Quality">Academic Quality & Teaching</option>
                    <option value="Campus Facilities">Campus Facilities & Safety</option>
                    <option value="Hifzul Quran Wing">Hifzul Quran Wing</option>
                    <option value="Fee & Accounts">Fee Payment & Accounts</option>
                    <option value="General Suggestion">General Suggestion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Detailed Feedback *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Share your thoughts, suggestions, or comments here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#92278F]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-[#92278F] hover:bg-purple-800 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "loading" ? "Submitting..." : "Submit Feedback"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
