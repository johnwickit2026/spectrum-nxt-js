import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#FBF1E3]/60 border-b border-[#EBE8E2] py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center text-xs text-gray-500 flex-wrap gap-1.5">
        <Link href="/" className="flex items-center gap-1 hover:text-[#BF5700] transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-gray-400" />
              {isLast || !item.href ? (
                <span className="font-semibold text-[#171E45]">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#BF5700] transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
