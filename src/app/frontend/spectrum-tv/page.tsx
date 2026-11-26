"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Play, X, Tv, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Spectrum International School Campus Tour & Facilities",
    category: "Campus Life",
    youtube_id: "dQw4w9WgXcQ",
    thumbnail: ASSETS.hero.banner1,
    duration: "4:15",
  },
  {
    id: 2,
    title: "Annual Sports Meet & March Past Highlights",
    category: "Athletics",
    youtube_id: "dQw4w9WgXcQ",
    thumbnail: ASSETS.facilities.sportsClub,
    duration: "6:20",
  },
  {
    id: 3,
    title: "Tahfeezul Quran & Melodious Tajweed Recitation",
    category: "Islamic Studies",
    youtube_id: "dQw4w9WgXcQ",
    thumbnail: ASSETS.activities.hifzDepartment,
    duration: "5:40",
  },
  {
    id: 4,
    title: "Annual Book Festival & Reading Culture Celebration",
    category: "Events",
    youtube_id: "dQw4w9WgXcQ",
    thumbnail: ASSETS.activities.bookFestival,
    duration: "3:50",
  },
];

export default function SpectrumTVPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div>
      <PageBanner
        title="Spectrum TV"
        badge="Official Media Channel"
        subtitle="Experience our vibrant school life, athletic championships, science fairs, and Quran recitation celebrations through official video broadcasts."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Spectrum TV" }]}
        bgImage={ASSETS.hero.banner2}
      />

      <div className="section-padding bg-gray-50 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700] inline-flex items-center gap-1.5">
                <Tv className="w-3.5 h-3.5" />
                Spectrum TV Broadcasts
              </span>
              <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
                Watch Spectrum in Action
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl">
                Browse our high-definition campus tours, science exhibitions, speech tournaments, and graduation ceremonies.
              </p>
            </div>

            <a
              href="https://youtube.com/@SpectrumTVBD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow transition-all self-start md:self-auto"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid.youtube_id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#BF5700] group-hover:bg-[#FC800A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-bold text-[#92278F] uppercase tracking-wider bg-purple-100 px-2 py-0.5 rounded">
                    {vid.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#171E45] mt-2 group-hover:text-[#BF5700] transition-colors leading-snug">
                    {vid.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 text-white rounded-full hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              title="YouTube Video Player"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
