import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { ASSETS } from "@/lib/assets";
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";

const allEvents = [
  {
    id: "1",
    title: "Annual Spelling Bee Championship 2026",
    category: "Spelling Bee",
    date: "November 20, 2026",
    time: "09:30 AM – 01:30 PM",
    location: "SIS Main Auditorium, Khadem Tower, Shantinagar",
    image: ASSETS.activities.bookFestival,
    albumId: 1,
    galleryImages: [ASSETS.activities.bookFestival, ASSETS.activities.orientation],
    description: `
      Spectrum International School cordially invites all students and parents to our Annual Spelling Bee Championship 2026.

      This annual championship tests linguistic dexterity, etymology roots, phonics mastery, and poise under competitive pressure. Across multiple rounds from junior to senior divisions, participants demonstrate outstanding vocabulary retention before certified British Council language evaluators.

      ### Program Highlights:
      - **Junior Phonics Division:** Play Group to Class II phonics decoding and word assembly.
      - **Senior Lexicon Championship:** Classes III through VIII spelling challenging Latin and Greek roots.
      - **Audience Challenge Round:** Parents and teachers participate in impromptu spelling teasers.
      - **Trophy & Certificate Award Ceremony:** Presented by the Academic Head and Vice Principal.
    `,
  },
  {
    id: "2",
    title: "Inter-Campus Arabic Spelling Bee & Tajweed",
    category: "Arabic Spelling Bee",
    date: "December 08, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "SIS Campus Hall, Shantinagar",
    image: ASSETS.activities.hifzDepartment,
    albumId: 1,
    galleryImages: [ASSETS.activities.hifzDepartment],
    description: `
      Celebrating classical Arabic orthography, correct Makharij articulation, and Quranic morphology across both Shantinagar and Aftabnagar campuses.

      Students are evaluated on classical letterforms, proper vocalic length (Madd), and rapid recitation accuracy under the supervision of our Islamic Studies faculty.
    `,
  },
  {
    id: "3",
    title: "SIS Annual Science Fair & Robotics Expo",
    category: "Science Fair",
    date: "December 18, 2026",
    time: "09:00 AM – 04:00 PM",
    location: "SIS STEM Courtyard & Laboratories",
    image: ASSETS.facilities.scienceLab,
    albumId: 3,
    galleryImages: [ASSETS.facilities.scienceLab, ASSETS.facilities.ictLab],
    description: `
      Our flagship STEM showcase featuring over 60 student-designed experiments, automated robotics prototypes, and renewable energy models.

      Young innovators demonstrate working prototypes of smart irrigation systems, solar trackers, and Python-powered automation units, engaging directly with visiting parents and guest scientists.
    `,
  },
  {
    id: "4",
    title: "Traditional Pitha Utshob & Heritage Celebration",
    category: "Pitha Utshob",
    date: "January 14, 2027",
    time: "10:00 AM – 03:30 PM",
    location: "Shantinagar Campus Grounds",
    image: ASSETS.activities.orientation,
    albumId: 1,
    galleryImages: [ASSETS.activities.orientation, ASSETS.academics.classroom2],
    description: `
      An immersive winter celebration of Bengali culinary heritage, traditional handicrafts, and colorful community bonding.

      Families, teachers, and students set up artisanal stalls presenting over 30 authentic pitha varieties, folk presentations, and cultural recitations honoring national history.
    `,
  },
  {
    id: "5",
    title: "Annual Track & Field Sports Championship",
    category: "Sports",
    date: "January 25, 2027",
    time: "08:30 AM – 04:30 PM",
    location: "National Stadium Grounds, Dhaka",
    image: ASSETS.facilities.sportsClub,
    albumId: 2,
    galleryImages: [ASSETS.facilities.sportsClub, ASSETS.activities.sports],
    description: `
      The pinnacle of athletic excellence at SIS! Inter-house competitions spanning 100m sprint relays, high jump, shot put, karate demonstrations, and ceremonial march-past.
    `,
  },
  {
    id: "6",
    title: "Annual Book Festival & Reading Culture Week",
    category: "General",
    date: "December 05, 2026",
    time: "09:00 AM – 03:00 PM",
    location: "SIS Main Auditorium, Khadem Tower, Shantinagar",
    image: ASSETS.activities.bookFestival,
    albumId: 1,
    galleryImages: [ASSETS.activities.bookFestival],
    description: `
      Five days dedicated to fostering lifelong reading habits, author discussions, and creative book reviews.
    `,
  },
  {
    id: "7",
    title: "Parent-Teacher Orientation Program 2026",
    category: "General",
    date: "November 28, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "Auditorium & Conference Hall, Khadem Tower",
    image: ASSETS.activities.orientation,
    albumId: 1,
    galleryImages: [ASSETS.activities.orientation],
    description: `
      Orientation for current and newly enrolled families to align on academic roadmaps, pastoral care guidelines, and assessment criteria.
    `,
  },
  {
    id: "8",
    title: "Girls Hifz Department Quran Recitation Celebration",
    category: "Hifz",
    date: "December 15, 2026",
    time: "09:30 AM – 12:30 PM",
    location: "SIS Campus Hall, Khadem Tower",
    image: ASSETS.activities.hifzDepartment,
    albumId: 1,
    galleryImages: [ASSETS.activities.hifzDepartment],
    description: `
      A solemn and joyful celebration honoring the milestones achieved by our young female Hifz students. Certified Qariyahs and Islamic scholars evaluate melodious Tajweed recitations and award graduation sanads.
    `,
  },
];

export async function generateStaticParams() {
  return allEvents.map((ev) => ({ id: ev.id }));
}

export default async function EventDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={event.title}
        badge={event.category || "Official School Event"}
        breadcrumbs={[
          { label: "Media & Publication", href: "/frontend/blogs" },
          { label: "Events", href: "/frontend/events" },
          { label: event.title },
        ]}
        bgImage={event.image}
      />

      <div className="section-padding bg-white min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-4">
            <Link
              href="/frontend/events"
              className="text-[#BF5700] hover:underline flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Events</span>
            </Link>

            <Link
              href={`/frontend/photo-gallery?album=${event.albumId}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-50 text-[#92278F] font-bold rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>View Gallery Photos</span>
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

          {/* Additional Event Gallery Photos Preview */}
          {event.galleryImages && event.galleryImages.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-[#171E45] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#BF5700]" />
                  <span>Event Photography & Highlights</span>
                </h4>
                <Link
                  href={`/frontend/photo-gallery?album=${event.albumId}`}
                  className="text-xs font-bold text-[#BF5700] hover:text-[#92278F] flex items-center gap-1"
                >
                  <span>More Photos in Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.galleryImages.map((img, idx) => (
                  <Link
                    key={idx}
                    href={`/frontend/photo-gallery?album=${event.albumId}`}
                    className="relative h-40 rounded-2xl overflow-hidden border border-gray-200 group block"
                  >
                    <Image
                      src={img}
                      alt={`${event.title} photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                      <span>View in Gallery</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">For inquiries or event registration: +880 1799-369685</p>
            <div className="flex items-center gap-3">
              <Link
                href={`/frontend/photo-gallery?album=${event.albumId}`}
                className="px-5 py-2.5 bg-[#92278F] hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition-colors shadow flex items-center gap-1.5"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>View Full Gallery</span>
              </Link>
              <Link
                href="/frontend/events"
                className="px-5 py-2.5 bg-gray-100 hover:bg-orange-50 hover:text-[#BF5700] text-gray-700 font-bold text-xs rounded-xl transition-colors"
              >
                All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
