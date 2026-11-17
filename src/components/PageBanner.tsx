import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { ASSETS } from "@/lib/assets";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  badge,
  breadcrumbs,
  bgImage = ASSETS.hero.banner1,
}: PageBannerProps) {
  return (
    <div>
      <div className="relative py-16 sm:py-20 bg-[#171E45] text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171E45] via-[#171E45]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-[#BF5700] text-white text-xs font-bold uppercase tracking-wider mb-3 shadow">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
}
