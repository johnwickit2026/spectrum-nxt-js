import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const allEvents = [
  {
    id: "1",
    title: "Annual Book Festival & Reading Culture Week",
    date: "December 05, 2026",
    time: "09:00 AM – 03:00 PM",
    location: "SIS Main Auditorium, Khadem Tower, Shantinagar",
    image: ASSETS.activities.bookFestival,
    description: `
      Spectrum International School cordially invites all students, parents, and literature lovers to our Annual Book Festival & Reading Culture Week.

      This annual celebration aims to kindle early literary passions and critical inquiry. Over five days, students will engage in interactive storytelling, meet celebrated children's authors, present their original book reviews, and explore curated exhibition stalls containing thousands of fiction, science, and history volumes.

      ### Program Highlights:
      - **Storytelling Competitions:** Multi-lingual storytelling sessions for Play Group to Class IV.
      - **Author Dialogue Sessions:** Renowned educators speaking on cultivating lifelong curiosity.
      - **Book Donation Drive:** Gathering books to enrich community libraries across Bangladesh.
      - **Student Book Stalls:** Creative student-run exhibition corners featuring original short stories and art.
    `,
  },
  {
    id: "2",
    title: "Parent-Teacher Orientation Program 2026",
    date: "November 28, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "Auditorium & Conference Hall, Khadem Tower",
    image: ASSETS.activities.orientation,
    description: `
      An essential gathering for all current and newly enrolled families to align on academic expectations, pastoral care guidelines, and assessment milestones for the upcoming term.

      The Principal, Vice Principal, and subject coordinators will present curriculum roadmaps, British Council examination policies, and answer questions.
    `,
  },
  {
    id: "3",
    title: "Girls Hifz Department Quran Recitation Celebration",
    date: "December 15, 2026",
    time: "09:30 AM – 12:30 PM",
    location: "SIS Campus Hall, Khadem Tower",
    image: ASSETS.activities.hifzDepartment,
    description: `
      A solemn and joyful celebration honoring the milestones achieved by our young female Huffaz. Certified Qariyahs and Islamic scholars will evaluate melodious Tajweed recitations and award graduation sanads.
    `,
  },
  {
    id: "4",
    title: "Annual Track & Field Athletics Championship",
    date: "January 10, 2027",
    time: "08:30 AM – 04:00 PM",
    location: "National Stadium Grounds, Dhaka",
    image: ASSETS.activities.sports,
    description: `
      The grand finale of our sports calendar! Inter-house competitions in 100m sprint, 4x100m relay, long jump, badminton championships, and martial arts karate exhibitions.
    `,
  },
];

export async function generateStaticParams() {
  return allEvents.map((ev) => ({ id: ev.id }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={event.title}
        badge="Official School Event"
        breadcrumbs={[
          { label: "Media & Publication", href: "/frontend/blogs" },
          { label: "Events", href: "/frontend/events" },
          { label: event.title },
        ]}
        bgImage={event.image}
      />

      <div className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-4">
            <Link
              href="/frontend/events"
              className="text-[#BF5700] hover:underline flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Events</span>
            </Link>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-card mb-8">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Event Meta Card */}
          <div className="bg-[#FBF1E3] rounded-2xl p-6 border border-[#EBE8E2] mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#BF5700]" />
              <div>
                <p className="font-bold text-[#171E45]">Date</p>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#BF5700]" />
              <div>
                <p className="font-bold text-[#171E45]">Timing</p>
                <p className="text-gray-600">{event.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#BF5700]" />
              <div>
                <p className="font-bold text-[#171E45]">Venue</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
            {event.description.split("\n\n").map((para, i) => {
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
            <p className="text-xs text-gray-500">For inquiries or RSVP, contact our reception: +880 1799-369685</p>
            <Link
              href="/frontend/events"
              className="px-5 py-2.5 bg-gray-100 hover:bg-orange-50 hover:text-[#BF5700] text-gray-700 font-bold text-xs rounded-xl transition-colors"
            >
              View More Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
