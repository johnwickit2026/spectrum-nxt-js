import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Mail, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Academic Team | Spectrum International School",
  description: "Meet the experienced educators, department heads, and teachers shaping students at Spectrum International School.",
};

const academicStaff = [
  {
    name: "Dr. M. A. Rahman",
    role: "Principal & Academic Director",
    department: "Executive Leadership",
    qualifications: "Ph.D., M.Ed., 25+ Years in British Curriculum",
    image: ASSETS.people.founderCeo,
  },
  {
    name: "Syeda Fatima Zahra",
    role: "Vice Principal & Head of Senior Section",
    department: "Senior Cambridge Section",
    qualifications: "M.Sc (Physics), Cambridge Certified",
    image: ASSETS.people.faculty,
  },
  {
    name: "Sheikh Muhammad Abdullah",
    role: "Director of Islamic Studies & Tahfeez",
    department: "Islamic Studies & Hifz",
    qualifications: "Certified Qari, Al-Azhar Trained Scholar",
    image: ASSETS.activities.hifzDepartment,
  },
  {
    name: "Mahmudul Hasan",
    role: "Head of Science & Physics Department",
    department: "STEM & Science",
    qualifications: "M.Sc (Physics, DU), 12 Years O/A Level",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Nasreen Sultana",
    role: "Head of English Language & Literature",
    department: "Humanities & Languages",
    qualifications: "MA (English), CELTA Certified",
    image: ASSETS.people.faculty,
  },
  {
    name: "Tanvir Ahmed",
    role: "Senior Mathematics Coordinator",
    department: "Pure & Applied Mathematics",
    qualifications: "M.Sc (Applied Math), Edexcel Examiner Experience",
    image: ASSETS.people.teachersStaff,
  },
  {
    name: "Sadia Afroz",
    role: "Early Childhood & Montessori Coordinator",
    department: "Play Group & KG Section",
    qualifications: "Early Childhood Diploma, Phonics Specialist",
    image: ASSETS.people.faculty,
  },
  {
    name: "Rakibul Islam",
    role: "ICT & Robotics Instructor",
    department: "Technology & Computing",
    qualifications: "B.Sc (CSE), STEM Robotics Coach",
    image: ASSETS.people.teachersStaff,
  },
];

export default function AcademicTeamPage() {
  return (
    <div>
      <PageBanner
        title="Academic Team"
        badge="Faculty Directory"
        subtitle="Meet our dedicated educators, subject matter specialists, and Cambridge-certified instructors."
        breadcrumbs={[{ label: "About Us", href: "/frontend/aboutus" }, { label: "Academic Team" }]}
        bgImage={ASSETS.academics.classroom2}
      />

      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Passionate Mentors
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Our Distinguished Educators
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Over 110 qualified teachers bringing academic rigor, warmth, and pastoral care into every lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicStaff.map((teacher, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-orange-300 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-sm mb-4">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">
                    {teacher.department}
                  </span>
                  <h3 className="text-base font-bold text-[#171E45] mt-2">{teacher.name}</h3>
                  <p className="text-xs font-semibold text-gray-700">{teacher.role}</p>
                  <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">{teacher.qualifications}</p>
                </div>
                <div className="pt-3 border-t border-gray-200/60 mt-3 text-[11px] text-gray-500 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#92278F]" />
                  <span>SIS Academic Faculty</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
