"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Image as ImageIcon } from "lucide-react";

const allEvents = [
  {
    id: "1",
    title: "Annual Spelling Bee Championship 2026",
    category: "Spelling Bee",
    date: "Nov 20, 2026",
    time: "09:30 AM – 01:30 PM",
    location: "SIS Main Auditorium, Khadem Tower, Shantinagar",
    excerpt: "Annual English spelling bee test of vocabulary, linguistic precision, and phonics mastery across Junior and Senior divisions.",
    image: ASSETS.activities.bookFestival,
    albumId: 1
  },
  {
    id: "2",
    title: "Inter-Campus Arabic Spelling Bee & Tajweed",
    category: "Arabic Spelling Bee",
    date: "Dec 08, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "SIS Campus Hall, Shantinagar",
    excerpt: "Prestige linguistic competition celebrating classical Arabic orthography, phonetics, and melodious Quranic pronunciation.",
    image: ASSETS.activities.hifzDepartment,
    albumId: 1
  },
  {
    id: "3",
    title: "SIS Annual Science Fair & Robotics Expo",
    category: "Science Fair",
    date: "Dec 18, 2026",
    time: "09:00 AM – 04:00 PM",
    location: "SIS STEM Courtyard & Laboratories",
    excerpt: "Showcase of ingenious science experiments, environmental conservation models, and automated robotics prototypes built by students.",
    image: ASSETS.facilities.scienceLab,
    albumId: 3
  },
  {
    id: "4",
    title: "Traditional Pitha Utshob & Heritage Celebration",
    category: "Pitha Utshob",
    date: "Jan 14, 2027",
    time: "10:00 AM – 03:30 PM",
    location: "Shantinagar Campus Grounds",
    excerpt: "Festive celebration of Bengali winter culinary traditions, artisanal pitha making, and vibrant community bonding.",
    image: ASSETS.activities.orientation,
    albumId: 1
  },
  {
    id: "5",
    title: "Annual Track & Field Sports Championship",
    category: "Sports",
    date: "Jan 25, 2027",
    time: "08:30 AM – 04:30 PM",
    location: "National Stadium Grounds, Dhaka",
    excerpt: "The premier athletic celebration featuring inter-house sprint relays, high jump, karate exhibitions, and drill formations.",
    image: ASSETS.facilities.sportsClub,
    albumId: 2
  },
  {
    id: "6",
    title: "Annual Book Festival & Reading Culture Week",
    category: "General",
    date: "Dec 05, 2026",
    time: "09:00 AM – 03:00 PM",
    location: "SIS Main Auditorium, Khadem Tower",
    excerpt: "A vibrant week dedicated to cultivating literary curiosity, student book stalls, and storytelling competitions.",
    image: ASSETS.activities.bookFestival,
    albumId: 1
  },
  {
    id: "7",
    title: "Parent-Teacher Orientation Program 2026",
    category: "General",
    date: "Nov 28, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "Auditorium & Conference Hall",
    excerpt: "Interactive dialogue between faculty and parents to align on curriculum milestones and pastoral care.",
    image: ASSETS.activities.orientation,
    albumId: 1
  },
  {
    id: "8",
    title: "Girls Hifz Department Quran Recitation Celebration",
    category: "Hifz",
    date: "Dec 15, 2026",
    time: "09:30 AM – 12:30 PM",
    location: "SIS Campus Hall",
    excerpt: "Honoring our young Hifz students for exemplary dedication to Quran memorization and melodic Tajweed.",
    image: ASSETS.activities.hifzDepartment,
    albumId: 1
  }
];

const categories = ["All", "Spelling Bee", "Arabic Spelling Bee", "Science Fair", "Pitha Utshob", "Sports", "Hifz"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = allEvents.filter(
    (event) => selectedCategory === "All" || event.category === selectedCategory
  );

  return (
    <div>
      <PageBanner
        title="Events & Academic Calendar"
        badge="Campus Happenings"
        subtitle="Discover upcoming academic seminars, Spelling Bee championships, science fairs, Pitha Utshob, and sports leagues."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Events" }]}
        bgImage={ASSETS.activities.orientation}
      />

      <div className="section-padding bg-gray-50 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Calendar & Gatherings
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Upcoming School Events
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Mark your calendars and join our vibrant community of learners and parents.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat
                    ? "bg-[#BF5700] text-white shadow-orange-900/20 scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:text-[#BF5700] border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col sm:flex-row group"
              >
                <div className="relative h-56 sm:h-auto sm:w-56 shrink-0 overflow-hidden bg-gray-900">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#BF5700] text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow">
                    {event.date}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-0.5 rounded">
                    {event.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex flex-col gap-1 text-[11px] text-gray-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#BF5700]" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#BF5700]" />
                        {event.location}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#171E45] group-hover:text-[#BF5700] transition-colors leading-snug">
                      <Link href={`/frontend/events/${event.id}`}>{event.title}</Link>
                    </h3>

                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {event.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/frontend/events/${event.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors"
                    >
                      <span>Full Event Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/frontend/photo-gallery?album=${event.albumId}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-[#92278F] transition-colors"
                      title="View Event Photos"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-purple-600" />
                      <span>View Gallery</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 text-gray-500 text-sm">
              No events found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
