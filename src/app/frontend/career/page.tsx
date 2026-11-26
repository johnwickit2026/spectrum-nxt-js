"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  ArrowRight, 
  Search, 
  Upload, 
  FileText, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { fetchCareers, submitJobApplication } from "@/lib/api";
import { CareerItem } from "@/types";

const fallbackJobs: CareerItem[] = [
  {
    id: 1,
    title: "Cambridge O & A Level Physics Teacher",
    department: "Science Department",
    job_type: "Full Time",
    deadline: "2026-12-30",
    requirements: "Master's or Bachelor's in Physics from a reputable university. Minimum 3 years teaching Cambridge IGCSE/A-Level syllabus. Excellent English communication skills.",
    responsibilities: "Conduct engaging classroom theory and hands-on laboratory sessions. Prepare students thoroughly for British Council examinations. Provide personalized academic mentorship.",
    is_active: 1
  },
  {
    id: 2,
    title: "Primary English & Literature Teacher",
    department: "Primary Section",
    job_type: "Full Time",
    deadline: "2026-12-25",
    requirements: "BA/MA in English Literature or Linguistics. Prior experience with early childhood phonics, interactive storytelling, and language immersion.",
    responsibilities: "Deliver creative phonics and reading programs. Encourage expressive writing, public speaking, and confidence in young learners.",
    is_active: 1
  },
  {
    id: 3,
    title: "ICT & Robotics Coordinator",
    department: "Technology Department",
    job_type: "Full Time",
    deadline: "2026-12-31",
    requirements: "B.Sc in Computer Science or Software Engineering. Proficiency in Python, Scratch, web development basics, and lab maintenance.",
    responsibilities: "Guide students through digital literacy, coding, and STEM robotics clubs. Maintain computer lab hardware and network readiness.",
    is_active: 1
  },
  {
    id: 4,
    title: "Hifzul Quran & Tajweed Preceptor (Girls Section)",
    department: "Islamic Studies & Hifz",
    job_type: "Full Time",
    deadline: "2026-12-31",
    requirements: "Certified Qariyah, Sanad in Riwayah Hafs, Kamil in Islamic Studies. Passionate about female child moral Tarbiyah.",
    responsibilities: "Supervise daily Sabaq and Manzil revision, evaluate melodic Tajweed, and guide girls' character development.",
    is_active: 1
  }
];

export default function CareerPage() {
  const [jobs, setJobs] = useState<CareerItem[]>(fallbackJobs);
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);

  // Application form states
  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchCareers().then((data) => {
      if (data && data.length > 0) {
        setJobs(data);
      }
    });
  }, []);

  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.department)))];

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.requirements.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");
    if (!file) return;

    const allowed = ["pdf", "doc", "docx"];
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !allowed.includes(ext)) {
      setFileError("Invalid format. Only PDF, DOC, and DOCX files are permitted.");
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("File too large. Maximum allowed size is 5MB.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setStatus("loading");
    setStatusMessage("");

    const fd = new FormData();
    fd.append("career_id", String(selectedJob.id));
    fd.append("job_title", selectedJob.title);
    fd.append("applicant_name", applicantName);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("linkedin", linkedin);
    fd.append("cover_note", coverNote);
    if (resumeFile) {
      fd.append("resume", resumeFile);
    }

    const res = await submitJobApplication(fd);
    if (res.success) {
      setStatus("success");
      setStatusMessage(res.message || "Application submitted successfully.");
    } else {
      setStatus("error");
      setStatusMessage(res.message || "Failed to submit application.");
    }
  };

  const resetModal = () => {
    setSelectedJob(null);
    setStatus("idle");
    setStatusMessage("");
    setApplicantName("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setCoverNote("");
    setResumeFile(null);
    setFileError("");
  };

  return (
    <div>
      <PageBanner
        title="Careers at Spectrum"
        badge="Join Our Faculty & Staff"
        subtitle="Be part of an inspiring community of Cambridge educators, Islamic scholars, and administrative innovators shaping future leaders at Spectrum International School."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Career" }]}
        bgImage={ASSETS.people.teachersStaff}
      />

      <div className="section-padding bg-gray-50 min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Open Vacancies &amp; Faculty Recruitment
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Shape the Future of Education
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              We offer competitive compensation, professional Cambridge training diplomas, health benefits, and an intellectually vibrant Islamic-English work culture.
            </p>
          </div>

          {/* Search & Department Filters */}
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedDept === dept
                      ? "bg-[#BF5700] text-white shadow-md shadow-orange-900/20 scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search job title, subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#BF5700]"
              />
            </div>
          </div>

          {/* Job Openings List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
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
                      {job.job_type}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      Deadline: {job.deadline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#171E45]">{job.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{job.responsibilities}</p>

                  <div className="text-xs text-gray-700 pt-1">
                    <strong className="text-gray-900">Requirements:</strong> {job.requirements}
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

            {filteredJobs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 text-gray-500 text-sm">
                No job openings found matching &quot;{searchQuery}&quot; under &quot;{selectedDept}&quot;.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Modal with CV Upload */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={resetModal}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider">
                {selectedJob.department}
              </span>
              <h3 className="text-lg font-bold text-[#171E45] mt-0.5">
                Apply for: {selectedJob.title}
              </h3>
              <p className="text-[11px] text-gray-500">
                Application Deadline: {selectedJob.deadline}
              </p>
            </div>

            {status === "success" ? (
              <div className="p-6 bg-green-50 rounded-2xl text-center space-y-2 border border-green-200">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="text-sm font-bold text-green-800">Application Submitted</h4>
                <p className="text-xs text-green-700 leading-relaxed">
                  {statusMessage}
                </p>
                <button
                  onClick={resetModal}
                  className="mt-3 px-5 py-2 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3.5 text-xs">
                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Mohammed Farhan"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">LinkedIn / Portfolio Profile URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                {/* CV / Resume File Upload */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Upload CV / Resume * (PDF, DOC, DOCX up to 5MB)</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 text-center hover:border-[#BF5700] transition-colors bg-gray-50/50">
                    <input
                      type="file"
                      id="resume-file"
                      required
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="resume-file" className="cursor-pointer flex flex-col items-center justify-center gap-1.5">
                      <Upload className="w-5 h-5 text-[#BF5700]" />
                      <span className="text-xs font-bold text-gray-700">
                        {resumeFile ? resumeFile.name : "Click to select CV document"}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {resumeFile ? `${(resumeFile.size / 1024).toFixed(0)} KB` : "PDF, DOC, DOCX format accepted"}
                      </span>
                    </label>
                  </div>
                  {fileError && <p className="text-[11px] text-red-600 mt-1">{fileError}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Cover Note &amp; Summary of Qualifications</label>
                  <textarea
                    rows={3}
                    placeholder="Highlight your teaching accreditations, Cambridge experience, or administrative accomplishments..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#BF5700]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 bg-[#BF5700] hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === "loading" ? "Uploading & Submitting..." : "Submit Application"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
