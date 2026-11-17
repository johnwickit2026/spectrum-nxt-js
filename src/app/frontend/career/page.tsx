"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Briefcase, Calendar, MapPin, Send, CheckCircle2, AlertCircle, X, ArrowRight } from "lucide-react";

const initialJobs = [
  {
    id: 1,
    title: "Cambridge O & A Level Physics Teacher",
    department: "Science Department",
    type: "Full Time",
    deadline: "Dec 30, 2026",
    requirements: "Master's or Bachelor's in Physics from a reputable university. Minimum 3 years teaching Cambridge IGCSE/A-Level syllabus. Excellent English communication skills.",
    responsibilities: "Conduct engaging classroom theory and hands-on laboratory sessions. Prepare students thoroughly for British Council examinations. Provide personalized academic mentorship.",
  },
  {
    id: 2,
    title: "Primary English & Literature Teacher",
    department: "Primary Section",
    type: "Full Time",
    deadline: "Dec 25, 2026",
    requirements: "BA/MA in English Literature or Linguistics. Prior experience with early childhood phonics, interactive storytelling, and language immersion.",
    responsibilities: "Deliver creative phonics and reading programs. Encourage expressive writing, public speaking, and confidence in young learners.",
  },
  {
    id: 3,
    title: "ICT & Robotics Coordinator",
    department: "Technology Department",
    type: "Full Time",
    deadline: "Dec 31, 2026",
    requirements: "B.Sc in Computer Science or Software Engineering. Proficiency in Python, Scratch, web development basics, and lab maintenance.",
    responsibilities: "Guide students through digital literacy, coding, and STEM robotics clubs. Maintain computer lab hardware and network readiness.",
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    applicant_name: "",
    email: "",
    phone: "",
    linkedin: "",
    cover_note: "",
    website_hp: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.applicant_name,
          email: formData.email,
          phone: formData.phone,
          subject: `Job Application: ${selectedJob?.title} (${formData.applicant_name})`,
          message: `Applicant for ${selectedJob?.title}.\nLinkedIn: ${formData.linkedin}\nCover Note:\n${formData.cover_note}`,
          website_hp: formData.website_hp,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit application.");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div>
      <PageBanner
        title="Careers at Spectrum"
        badge="Join Our Faculty"
        subtitle="Be part of an inspiring community of educators, mentors, and innovators shaping future leaders at Spectrum International School."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Career" }]}
        bgImage={ASSETS.people.teachersStaff}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Open Vacancies
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Shape the Future of Education
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              We offer competitive compensation, health benefits, teacher training programs, and an intellectually vibrant work environment.
            </p>
          </div>

          <div className="space-y-6">
            {initialJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Deadline: {job.deadline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#171E45]">{job.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{job.responsibilities}</p>

                  <div className="text-xs text-gray-500 pt-1">
                    <strong>Requirements:</strong> {job.requirements}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setStatus("idle");
                    }}
                    className="w-full md:w-auto px-6 py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider">
                {selectedJob.department}
              </span>
              <h3 className="text-lg font-bold text-[#171E45] mt-1">
                Apply for: {selectedJob.title}
              </h3>
            </div>

            {status === "success" ? (
              <div className="p-6 bg-green-50 rounded-2xl text-center space-y-2 border border-green-200">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="text-sm font-bold text-green-800">Application Received</h4>
                <p className="text-xs text-green-700">
                  Thank you for applying. Our HR desk will review your profile and contact shortlisted candidates for interviews.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-3 px-4 py-1.5 bg-green-700 text-white text-xs font-semibold rounded-lg"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3 text-xs">
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
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs">{errorMessage}</div>
                )}

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahfuzur Rahman"
                    value={formData.applicant_name}
                    onChange={(e) => setFormData({ ...formData, applicant_name: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">LinkedIn Profile or CV Drive Link</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/... or Google Drive link"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Brief Cover Note / Experience Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your teaching experience, degrees, and availability..."
                    value={formData.cover_note}
                    onChange={(e) => setFormData({ ...formData, cover_note: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "loading" ? "Submitting..." : "Submit Application"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
