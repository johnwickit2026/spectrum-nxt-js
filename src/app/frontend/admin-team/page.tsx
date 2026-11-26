"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ReflectiveCard from "@/components/ReflectiveCard";
import { ASSETS } from "@/lib/assets";
import { 
  Briefcase, 
  Sparkles, 
  Search, 
  Mail, 
  X, 
  GraduationCap, 
  ShieldCheck, 
  Sun, 
  Moon, 
  Building2 
} from "lucide-react";

interface AdminMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  qualifications: string;
  experience: string;
  bio: string;
  image: string;
}

const adminStaff: AdminMember[] = [
  {
    id: "SIS-ADM-001",
    name: "Nur Ahammed",
    role: "CEO & Founder",
    department: "Executive Leadership",
    email: "founder.ceo@spectrumintlschool.com",
    qualifications: "M.Sc, Cambridge Leadership Accredited",
    experience: "15+ Years in Educational Governance & Strategic Institutional Development",
    bio: "Founding visionary responsible for institutional expansion, Pearson & Cambridge certification benchmarks, and holistic Cambridge-Islamic education.",
    image: ASSETS.people.founderCeo,
  },
  {
    id: "SIS-ADM-002",
    name: "Sharmin Akter Eva",
    role: "Vice-Principal & Academic Head",
    department: "Academic Leadership",
    email: "sharmin.eva@spectrumintlschool.com",
    qualifications: "MA in English Literature, British Council Teacher Trainer",
    experience: "12+ Years in International Curriculum Leadership & Faculty Governance",
    bio: "Directs faculty coordination, academic timetabling, British Council exam compliance, and pastoral administration.",
    image: ASSETS.people.faculty,
  },
  {
    id: "SIS-ADM-003",
    name: "Shah Alamgir",
    role: "Director of Finance",
    department: "Finance & Accounts",
    email: "finance@spectrumintlschool.com",
    qualifications: "M.Com, Certified Management Accountant",
    experience: "14+ Years in Institutional Budgeting, Auditing & Financial Systems",
    bio: "Directs financial governance, parent payment gateways, infrastructure investment planning, and fiscal compliance.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-004",
    name: "Tanbir Md. Ali Foysal",
    role: "Head of Admin",
    department: "Administration",
    email: "admin@spectrumintlschool.com",
    qualifications: "MBA in Human Resource Management & Organizational Operations",
    experience: "10+ Years in Campus Operations, Logistics & Staff Administration",
    bio: "Oversees day-to-day campus facilities, vendor coordination, licensing, regulatory compliance, and administrative staff workflows.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-005",
    name: "Md. Ayub",
    role: "Head of Business Development",
    department: "Institutional Development",
    email: "bd@spectrumintlschool.com",
    qualifications: "MBA in Strategic Marketing",
    experience: "11+ Years in Educational Branding, Corporate Partnerships & Outreach",
    bio: "Leads inter-institutional collaborations, campus expansion initiatives, and strategic admissions outreach.",
    image: ASSETS.people.founderCeo,
  },
  {
    id: "SIS-ADM-006",
    name: "Fakhrul Hossain Aman",
    role: "Senior Executive Officer (Admission & Admin Coordinator)",
    department: "Admissions & Admin",
    email: "admissions.aman@spectrumintlschool.com",
    qualifications: "BBA, Professional Diploma in Customer Relationship Management",
    experience: "8+ Years in International School Admissions & Parent Relations",
    bio: "Coordinates student enrollment interviews, parent inquiries, campus tours, and admission registry records.",
    image: ASSETS.people.faculty,
  },
  {
    id: "SIS-ADM-007",
    name: "G.M. Arafat Uddin",
    role: "Assistant Manager",
    department: "Operations",
    email: "arafat.ops@spectrumintlschool.com",
    qualifications: "B.Sc in Engineering Management",
    experience: "6+ Years in Operations Supervision & Facilities Readiness",
    bio: "Supervises classroom maintenance, HVAC, electrical safety, and daily student transit logistics.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-008",
    name: "Md. Hadaitullah",
    role: "Assistant Manager",
    department: "Operations",
    email: "hadaitullah@spectrumintlschool.com",
    qualifications: "B.Com, Diploma in Inventory Management",
    experience: "7+ Years in Procurement & Supply Chain Operations",
    bio: "Manages instructional inventory, stationery procurement, and laboratory material distribution.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-009",
    name: "Md. Samir Uddin",
    role: "Assistant Manager",
    department: "Operations",
    email: "samir.ops@spectrumintlschool.com",
    qualifications: "BBA in Operations Management",
    experience: "6+ Years in Campus Facilities Management",
    bio: "Ensures safety compliance, campus sanitary standards, and coordinated event logistical readiness.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-010",
    name: "Mohammed Saiful Abedin",
    role: "Senior IT Officer",
    department: "IT Infrastructure",
    email: "saiful.it@spectrumintlschool.com",
    qualifications: "B.Sc in Computer Science & Networking, CCNA Certified",
    experience: "8+ Years in Gigabit Campus Networking & Server Administration",
    bio: "Administers fiber internet infrastructure, student portal databases, classroom smartboards, and cybersecurity protocols.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-011",
    name: "Rahat Rahman",
    role: "Admin & IT Officer",
    department: "Administration & IT",
    email: "rahat.it@spectrumintlschool.com",
    qualifications: "B.Sc in Information Technology",
    experience: "5+ Years in Hardware Troubleshooting & Digital Record Keeping",
    bio: "Supports teacher IT helpdesks, administrative document indexing, and digital communication broadcasts.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-012",
    name: "Md Nazim Uddin Noman",
    role: "Admission Officer",
    department: "Admissions Desk",
    email: "admissions.desk@spectrumintlschool.com",
    qualifications: "BA, Diploma in Public Relations",
    experience: "5+ Years in Academic Counseling & Applicant Services",
    bio: "Assists prospective parents with application forms, age criteria evaluations, and entrance test schedules.",
    image: ASSETS.people.faculty,
  },
  {
    id: "SIS-ADM-013",
    name: "Mir Mosharof Hossen",
    role: "Accounts Officer",
    department: "Finance & Accounts",
    email: "accounts.officer@spectrumintlschool.com",
    qualifications: "B.Com (Hons), M.Com in Accounting",
    experience: "6+ Years in Tuition Billing & Digital Ledger Reconciliation",
    bio: "Manages daily online fee receipts, payment slip verifications, and student tuition ledgers.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-014",
    name: "Abdur Razzak Pappu",
    role: "Administrative Officer",
    department: "Administration",
    email: "razzak.admin@spectrumintlschool.com",
    qualifications: "BA in Social Sciences",
    experience: "5+ Years in Office Coordination & Dispatch Logistics",
    bio: "Coordinates official administrative notices, courier distributions, and front-office reception support.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-015",
    name: "Mohammed Kaizer Siddiquee",
    role: "Security In charge",
    department: "Campus Safety & Security",
    email: "security@spectrumintlschool.com",
    qualifications: "Certified Campus Safety Officer, Ex-Defense Security Training",
    experience: "9+ Years in Perimeter Surveillance & Child Protection Protocols",
    bio: "Directs 24/7 security guards, CCTV surveillance, emergency evacuation protocols, and student pick-up security passes.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-016",
    name: "Aminul Islam Chowdhury",
    role: "Administrative Executive",
    department: "Administration",
    email: "aminul.admin@spectrumintlschool.com",
    qualifications: "BBA in Management",
    experience: "4+ Years in Administrative Record Keeping",
    bio: "Assists with student records archiving, verification letters, and administrative file maintenance.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-017",
    name: "Md. Abeer-Ul Islam",
    role: "Administrative Executive",
    department: "Administration",
    email: "abeer.admin@spectrumintlschool.com",
    qualifications: "BSS in Public Administration",
    experience: "4+ Years in Institutional Documentation & Scheduling",
    bio: "Coordinates room reservations, parent appointment logistics, and administrative communications.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-018",
    name: "Al-Amin Chowdhury",
    role: "Administrative Executive",
    department: "Administration",
    email: "alamin.admin@spectrumintlschool.com",
    qualifications: "BA (Hons), Diploma in Office Management",
    experience: "4+ Years in Operations Support",
    bio: "Provides coordination for examinations desk supplies, event stage setups, and classroom inventory.",
    image: ASSETS.people.teachersStaff,
  },
  {
    id: "SIS-ADM-019",
    name: "Md Abdullah Al Masud",
    role: "Administrative Executive",
    department: "Administration",
    email: "masud.admin@spectrumintlschool.com",
    qualifications: "B.Sc in Economics",
    experience: "3+ Years in Academic Support Services",
    bio: "Assists with student database entry, report card dispatch, and administrative helpline inquiries.",
    image: ASSETS.people.teachersStaff,
  },
];

const departments = [
  "All",
  "Executive Leadership",
  "Administration",
  "Finance & Accounts",
  "Admissions",
  "IT Infrastructure",
  "Operations",
  "Safety"
];

export default function AdminTeamPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardTheme, setCardTheme] = useState<"dark" | "light">("dark");
  const [selectedAdmin, setSelectedAdmin] = useState<AdminMember | null>(null);

  const filteredStaff = adminStaff.filter((staff) => {
    const matchesDept = 
      selectedDept === "All" || 
      staff.department.toLowerCase().includes(selectedDept.toLowerCase());

    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDept && matchesSearch;
  });

  return (
    <div>
      <PageBanner
        title="Admin Team"
        badge="Administration & Desk"
        subtitle="The dedicated administrative professionals driving campus operations, admissions, financial systems, and student services."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Admin Team" }]}
        bgImage={ASSETS.campus.building}
      />

      <div className="section-padding bg-[#0f0e13] text-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Administrative Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              School Administration &amp; Operations Team
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Browse our verified administrative officers, finance controllers, admissions coordinators, and operations managers. Click any card to inspect credentials or email them directly.
            </p>
          </div>

          {/* Department Filters & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedDept === dept
                      ? "bg-[#92278F] text-white shadow-lg shadow-purple-950/40 scale-105"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => setCardTheme(t => (t === "dark" ? "light" : "dark"))}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10 transition-all flex items-center gap-1.5"
                title="Toggle Card Theme"
              >
                {cardTheme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Silver</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Dark</span>
                  </>
                )}
              </button>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search name, role, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#92278F] focus:ring-1 focus:ring-[#92278F]"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
            <span>Showing {filteredStaff.length} administrative officers</span>
            <span className="text-[11px] text-purple-300">💡 Click any member card to view complete profile</span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredStaff.map((staff) => (
              <div
                key={staff.id}
                onClick={() => setSelectedAdmin(staff)}
                className="cursor-pointer group transform transition-transform hover:-translate-y-1.5 focus:outline-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedAdmin(staff); }}
              >
                <ReflectiveCard
                  name={staff.name}
                  role={staff.role}
                  badge={staff.department}
                  status="Active"
                  statusColor="#92278F"
                  idLabel="Administration ID"
                  idValue={staff.id}
                  avatar={staff.image}
                  theme={cardTheme}
                  metalness={0.92}
                  roughness={0.28}
                  blurStrength={6}
                  shine={1.2}
                  glare={0.65}
                  width={290}
                  height={440}
                  radius={22}
                  className="shadow-2xl group-hover:ring-2 group-hover:ring-[#92278F]/70 transition-all"
                />
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-300 group-hover:underline">
                    <Mail className="w-3 h-3 text-[#FC800A]" />
                    <span>{staff.email}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-sm">
              No administrative staff found matching &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      </div>

      {/* Admin Profile Modal */}
      {selectedAdmin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedAdmin(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#171E45] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAdmin(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-700 pb-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-purple-400 shadow-xl shrink-0 bg-gray-900">
                <Image
                  src={selectedAdmin.image}
                  alt={selectedAdmin.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Administrative Personnel</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">{selectedAdmin.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-purple-200">{selectedAdmin.role}</p>
                <p className="text-xs text-gray-400 flex items-center justify-center sm:justify-start gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#FC800A]" />
                  <span>{selectedAdmin.department}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/60 space-y-1">
                <span className="text-gray-400 text-[11px] block font-medium">Official Contact Email</span>
                <a
                  href={`mailto:${selectedAdmin.email}`}
                  className="inline-flex items-center gap-1.5 text-orange-300 hover:text-white transition-colors font-bold text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FC800A]" />
                  <span>{selectedAdmin.email}</span>
                </a>
              </div>

              <div className="bg-[#1b234f] p-4 rounded-xl border border-gray-700/60 space-y-1">
                <span className="text-gray-400 text-[11px] block font-medium">Employee Identifier</span>
                <span className="text-white font-mono font-bold text-xs">{selectedAdmin.id}</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-purple-300 font-bold flex items-center gap-1.5 text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>Qualifications &amp; Professional Certifications</span>
              </span>
              <p className="text-gray-200 leading-relaxed">{selectedAdmin.qualifications}</p>
            </div>

            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[#FC800A] font-bold flex items-center gap-1.5 text-xs">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </span>
              <p className="text-gray-200 leading-relaxed">{selectedAdmin.experience}</p>
            </div>

            <div className="space-y-1.5 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-green-300 font-bold flex items-center gap-1.5 text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Administrative Responsibilities &amp; Operations</span>
              </span>
              <p className="text-gray-300 leading-relaxed">{selectedAdmin.bio}</p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">Spectrum International School • Administration Registry</span>
              <a
                href={`mailto:${selectedAdmin.email}`}
                className="px-5 py-2 bg-gradient-to-r from-[#92278F] to-purple-600 hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
