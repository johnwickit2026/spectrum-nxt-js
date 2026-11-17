import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gray-50 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100 space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#BF5700] flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#BF5700]">
          Error 404
        </span>
        <h1 className="text-3xl font-black text-[#171E45]">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          The requested page could not be located or may have been relocated in the updated sitemap.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#BF5700] hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/frontend/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl transition-all"
          >
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
