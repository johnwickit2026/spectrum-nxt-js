"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { SiteSettings } from "@/types";

export default function AdmissionPopup({ settings }: { settings?: Partial<SiteSettings> }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if admissions enabled
    const isEnabled = settings?.admissions_enabled !== "0";
    if (!isEnabled) return;

    // Check sessionStorage
    const dismissed = sessionStorage.getItem("sis_admission_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [settings]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("sis_admission_dismissed", "true");
  };

  if (!isOpen) return null;

  const title = settings?.admission_popup_title || "Admissions Open for 2026-2027";
  const content = settings?.admission_popup_content || "Admissions open for Play Group through Class VIII & Cambridge A Levels. Limited seats available in the Hifzul Quran section.";
  const image = settings?.admission_popup_image || "/assets/IMG_9861.JPG.jpeg";
  const btnText = settings?.admission_popup_button_text || "Apply Online";
  const btnUrl = settings?.admission_popup_button_url || "/frontend/apply";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close admission popup"
          className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white text-gray-700 hover:text-black rounded-full shadow transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media / Header Banner */}
        <div className="relative h-44 sm:h-52 w-full bg-slate-900">
          <Image
            src={image}
            alt="Admissions Announcement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FC800A] text-white shadow mb-1">
              <Sparkles className="w-3 h-3" />
              New Academic Session
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight drop-shadow">
              {title}
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {content}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={btnUrl}
              onClick={handleClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#BF5700] to-[#FC800A] text-white text-sm font-bold shadow-md hover:shadow-glow hover:scale-[1.01] transition-all"
            >
              <span>{btnText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleClose}
              className="px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
