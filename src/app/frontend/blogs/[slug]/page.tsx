import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, User, ArrowLeft, Share2, ArrowRight } from "lucide-react";

const allBlogs = [
  {
    slug: "nurturing-faith-and-reason-at-spectrum",
    title: "Nurturing Faith & Reason: The Integrated Curriculum at SIS",
    category: "Islamic & Moral Values",
    author: "Academic Council",
    date: "October 15, 2026",
    cover: ASSETS.activities.hifzDepartment,
    content: `
      At Spectrum International School, we believe true education enriches both the intellect and the soul. In an era where families are frequently forced to choose between international academic competitiveness and their child's moral roots, our dual-curriculum framework provides an inspiring resolution.

      Our dual pathway combines the analytical rigor of Pearson Edexcel and Cambridge International standards with comprehensive Islamic studies, Arabic phonetics, and Tahfeezul Quran.

      ### Integrated Curriculum Pillars:
      1. **Academic Rigor:** Students follow internationally benchmarked mathematics, sciences, and English language syllabi.
      2. **Authentic Tajweed:** Certified Qaris provide daily individual recitation, helping learners master the vocal articulation and melodious rules of the Holy Quran.
      3. **Tarbiyah & Character:** Manners, truthfulness, social responsibility, and humility are woven organically into school assemblies and daily routines.
      4. **Critical Thinking:** Learners are encouraged to ask deep questions, observe the cosmos, and connect natural phenomena with the creative wisdom of the Almighty.

      By holding these priorities in harmony, Spectrum International School prepares leaders who will excel in modern professional fields while remaining steadfast in faith and integrity.
    `,
  },
  {
    slug: "why-early-stem-in-primary-years",
    title: "Why Experiential STEM in Primary Years Sets Lifelong Thinkers",
    category: "Academic Excellence",
    author: "Head of Science Dept",
    date: "November 01, 2026",
    cover: ASSETS.facilities.ictLab,
    content: `
      Engaging young minds in hands-on laboratories and inquiry-driven science sets the foundation for analytical leadership.

      Tactile inquiry during formative school years cements neural pathways for lifelong problem-solving. At SIS, our elementary learners do not merely read about chemical reactions or electrical circuits; they construct working circuits, mix pH indicators, and model mechanical gears.

      ### Key Developmental Outcomes:
      - **Hypothesis Formulation:** Learning how to propose testable questions rather than memorizing predetermined answers.
      - **Resilience Through Trial:** Understanding that unexpected lab outcomes provide valuable learning moments.
      - **Mathematical Application:** Applying measurement, ratios, and graphical analysis in real-world contexts.
    `,
  },
  {
    slug: "building-champions-through-athletics",
    title: "Building Resilience and Sportsmanship on the Field",
    category: "Campus Life & Activities",
    author: "Physical Education Lead",
    date: "November 10, 2026",
    cover: ASSETS.facilities.sportsClub,
    content: `
      Physical education at SIS is more than fitness—it teaches strategic thinking, teamwork, perseverance, and ethical leadership.

      Through organized sports leagues, athletics meets, martial arts, and badminton tournaments, our students cultivate stamina and a deep sense of fair play. Our students understand that falling and rising again on the sports field mirrors the perseverance required in adult life.
    `,
  },
  {
    slug: "reading-culture-and-literary-curiosity",
    title: "Cultivating a Lifelong Love for Reading in the Digital Age",
    category: "Early Childhood",
    author: "Head of English Dept",
    date: "November 15, 2026",
    cover: ASSETS.activities.bookFestival,
    content: `
      In an era dominated by rapid digital feeds and algorithmic stimuli, cultivating an authentic reading habit in early childhood is one of the greatest gifts an educational institution can offer.

      At Spectrum International School, our weekly library hours and annual Book Festivals immerse children in the rich beauty of classic and contemporary literature.
    `,
  },
];

export async function generateStaticParams() {
  return allBlogs.map((b) => ({ slug: b.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={blog.title}
        badge={blog.category}
        breadcrumbs={[
          { label: "Media & Publication", href: "/frontend/blogs" },
          { label: "Blogs", href: "/frontend/blogs" },
          { label: blog.title },
        ]}
        bgImage={blog.cover}
      />

      <article className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-gray-700">
                <Calendar className="w-3.5 h-3.5 text-[#BF5700]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-gray-700">
                <User className="w-3.5 h-3.5 text-[#BF5700]" />
                {blog.author}
              </span>
            </div>
            <Link
              href="/frontend/blogs"
              className="text-[#BF5700] hover:underline flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Blogs</span>
            </Link>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-card mb-8">
            <Image
              src={blog.cover}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
            {blog.content.split("\n\n").map((para, i) => {
              if (para.trim().startsWith("###")) {
                return (
                  <h3 key={i} className="text-xl font-bold text-[#171E45] pt-4">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {para.trim()}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Published by <strong>Spectrum International School Editorial Council</strong>
            </div>
            <Link
              href="/frontend/blogs"
              className="px-5 py-2.5 bg-gray-100 hover:bg-orange-50 hover:text-[#BF5700] text-gray-700 font-bold text-xs rounded-xl transition-colors"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
