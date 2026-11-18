"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import DriftWall from "@/components/DriftWall";
import { ASSETS } from "@/lib/assets";
import { X, ZoomIn } from "lucide-react";

const wallItems = ASSETS.gallery.map((p) => ({ image: p.src, title: p.title, href: undefined }));

const albums = [
  { id: "all", label: "All Photos" },
  { id: "Academics", label: "Academics & Science" },
  { id: "Sports", label: "Sports & Athletics" },
  { id: "Campus", label: "Campus Life" },
  { id: "Islamic Studies", label: "Hifzul Quran & Tarbiyah" },
  { id: "Events", label: "Events & Festivals" },
  { id: "Activities", label: "Play & Learn Early Years" },
];

export default function PhotoGalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [previewImage, setPreviewImage] = useState<any | null>(null);

  const filteredPhotos = ASSETS.gallery.filter(
    (item) => activeTab === "all" || item.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div>
      <PageBanner
        title="Photo Gallery"
        badge="Life & Activities at SIS"
        subtitle="A vibrant visual chronicle of daily learning, science inquiries, Quran recitation, and championship sports at Spectrum International School."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Photo Gallery" }]}
        bgImage={ASSETS.hero.banner1}
      />

      <section className="bg-[#171E45] py-6" aria-label="Photo showcase">
        <div className="h-[420px] md:h-[560px] max-w-7xl mx-auto">
          <DriftWall
            items={wallItems}
            columns={5}
            tileWidth={200}
            tileHeight={132}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.45}
            dim={0.85}
            overlayColor="#060010"
          />
        </div>
      </section>

      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
              Visual Highlights
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Life and Activities at Spectrum International School
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Capturing the joy, focus, and camaraderie that defines our student body across our campus facilities.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {albums.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#BF5700] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setPreviewImage(photo)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#171E45] mt-2 group-hover:text-[#BF5700] transition-colors leading-snug">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[65vh] w-full bg-black">
              <Image
                src={previewImage.src}
                alt={previewImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#BF5700] uppercase tracking-wider">
                  {previewImage.category}
                </span>
                <h3 className="text-sm font-bold text-[#171E45]">{previewImage.title}</h3>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
