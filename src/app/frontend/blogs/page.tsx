"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { BlogPost } from "@/types";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const initialBlogs: BlogPost[] = [
  {
    id: 1,
    slug: "nurturing-faith-and-reason-at-spectrum",
    title: "Nurturing Faith & Reason: The Integrated Curriculum at SIS",
    category_name: "Islamic & Moral Values",
    author: "Academic Council",
    excerpt: "How Spectrum International School harmonizes Cambridge academic rigor with comprehensive Islamic studies and Tahfeezul Quran.",
    content: "At Spectrum International School, we believe true education enriches both the intellect and the soul...",
    cover_image: ASSETS.activities.hifzDepartment,
    is_published: 1,
    published_at: "2026-10-15",
  },
  {
    id: 2,
    slug: "why-early-stem-in-primary-years",
    title: "Why Experiential STEM in Primary Years Sets Lifelong Thinkers",
    category_name: "Academic Excellence",
    author: "Head of Science Dept",
    excerpt: "Engaging young minds in hands-on laboratories and inquiry-driven science sets the foundation for analytical leadership.",
    content: "In our state-of-the-art science laboratories and ICT suites, young learners explore hypotheses...",
    cover_image: ASSETS.facilities.ictLab,
    is_published: 1,
    published_at: "2026-11-01",
  },
  {
    id: 3,
    slug: "building-champions-through-athletics",
    title: "Building Resilience and Sportsmanship on the Field",
    category_name: "Campus Life & Activities",
    author: "Physical Education Lead",
    excerpt: "Physical education at SIS is more than fitness—it teaches strategic thinking, teamwork, perseverance, and ethical leadership.",
    content: "Through organized sports leagues, athletics meets, martial arts, and badminton tournaments...",
    cover_image: ASSETS.facilities.sportsClub,
    is_published: 1,
    published_at: "2026-11-10",
  },
  {
    id: 4,
    slug: "reading-culture-and-literary-curiosity",
    title: "Cultivating a Lifelong Love for Reading in the Digital Age",
    category_name: "Early Childhood",
    author: "Head of English Dept",
    excerpt: "In an era of screen saturation, encouraging deep, tactile book reading nurtures empathy, focus, and advanced linguistic abilities.",
    content: "Our annual Book Festival and weekly guided library hours are carefully constructed to introduce children to the wonders of narrative...",
    cover_image: ASSETS.activities.bookFestival,
    is_published: 1,
    published_at: "2026-11-15",
  },
];

const categories = ["All", "Academic Excellence", "Islamic & Moral Values", "Campus Life & Activities", "Early Childhood"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = initialBlogs.filter((b) =>
    selectedCategory === "All" || b.category_name?.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div>
      <PageBanner
        title="Blogs & Educational Insights"
        badge="Thought Leadership"
        subtitle="Articles on child development, British curriculum methodologies, STEM education, and holistic character formation."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Blogs" }]}
        bgImage={ASSETS.hero.banner3}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#BF5700] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={blog.cover_image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#BF5700] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                      {blog.category_name}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#BF5700]" />
                        {blog.published_at}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-[#BF5700]" />
                        {blog.author}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors leading-snug">
                      <Link href={`/frontend/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/frontend/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
