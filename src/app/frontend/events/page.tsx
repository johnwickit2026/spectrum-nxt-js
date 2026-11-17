import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events Calendar | Spectrum International School",
  description: "Stay informed about upcoming academic competitions, orientation days, festivals, and Hifz department ceremonies.",
};

const allEvents = [
  {
    id: "1",
    title: "Annual Book Festival & Reading Culture Week",
    date: "Dec 05, 2026",
    time: "09:00 AM – 03:00 PM",
    location: "SIS Main Auditorium, Khadem Tower",
    excerpt: "A vibrant week dedicated to cultivating literary curiosity, student book stalls, and storytelling competitions.",
    image: ASSETS.activities.bookFestival,
  },
  {
    id: "2",
    title: "Parent-Teacher Orientation Program 2026",
    date: "Nov 28, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "Auditorium & Conference Hall",
    excerpt: "Interactive dialogue between faculty and parents to align on curriculum milestones and pastoral care.",
    image: ASSETS.activities.orientation,
  },
  {
    id: "3",
    title: "Girls Hifz Department Quran Recitation Celebration",
    date: "Dec 15, 2026",
    time: "09:30 AM – 12:30 PM",
    location: "SIS Campus Hall",
    excerpt: "Honoring our young Huffaz for exemplary dedication to Quran memorization and melodic Tajweed.",
    image: ASSETS.activities.hifzDepartment,
  },
  {
    id: "4",
    title: "Annual Track & Field Athletics Championship",
    date: "Jan 10, 2027",
    time: "08:30 AM – 04:00 PM",
    location: "National Stadium Grounds",
    excerpt: "The flagship annual sports day featuring inter-house track, relay sprints, karate, and march-past.",
    image: ASSETS.activities.sports,
  },
];

export default function EventsPage() {
  return (
    <div>
      <PageBanner
        title="Events & Academic Calendar"
        badge="Campus Happenings"
        subtitle="Discover upcoming academic seminars, literary festivals, Quran recitation ceremonies, and sports leagues."
        breadcrumbs={[{ label: "Media & Publication", href: "/frontend/blogs" }, { label: "Events" }]}
        bgImage={ASSETS.activities.orientation}
      />

      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92278F]">
              Calendar & Gatherings
            </span>
            <h2 className="text-3xl font-extrabold text-[#171E45] mt-1">
              Upcoming School Events
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Mark your calendars and join our vibrant community of learners and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-gray-100 transition-all flex flex-col sm:flex-row group"
              >
                <div className="relative h-56 sm:h-auto sm:w-52 shrink-0 overflow-hidden bg-gray-900">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#BF5700] text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow">
                    {event.date}
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

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      href={`/frontend/events/${event.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BF5700] hover:text-[#92278F] transition-colors"
                    >
                      <span>Full Event Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
