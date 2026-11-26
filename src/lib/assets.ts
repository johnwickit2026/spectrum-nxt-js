/**
 * Centralized Asset Mapping System for Spectrum International School
 * Strictly uses local project assets from the repository.
 */

export const ASSETS = {
  logo: {
    main: "/images/logo.png",
    affiliation: "/images/affiliation-logo.png",
    project: "/assets/main_logo of project.png",
  },
  hero: {
    banner1: "/assets/2.JPG.jpeg",
    banner2: "/assets/IMG_9993.JPG.jpeg",
    banner3: "/assets/IMG_0413.JPG.jpeg",
    fallbackPoster: "/assets/2.JPG.jpeg",
  },
  campus: {
    building: "/assets/IMG_9478.JPG.jpeg",
    corridor: "/assets/IMG_9480.JPG.jpeg",
    facilities: "/assets/IMG_9900.JPG.jpeg",
  },
  academics: {
    classroom1: "/assets/1.1.1.JPG.jpeg",
    classroom2: "/assets/1.1.JPG.jpeg",
    discussion: "/assets/IMG_9452.JPG.jpeg",
    studentsWork: "/assets/IMG_9447.JPG.jpeg",
  },
  facilities: {
    ictLab: "/assets/IMG_9437.JPG.jpeg",
    scienceLab: "/assets/IMG_2236.JPG.jpeg",
    library: "/assets/IMG_2289.JPG.jpeg",
    sportsClub: "/assets/IMG_0413.JPG.jpeg",
    playAndLearn: "/assets/2.2.JPG.jpeg",
  },
  activities: {
    sports: "/assets/IMG_0413.JPG.jpeg",
    events: "/assets/1.JPG.jpeg",
    hifzDepartment: "/assets/IMG_9469.JPG.jpeg",
    orientation: "/assets/IMG_9861.JPG.jpeg",
    bookFestival: "/assets/IMG_9817.JPG.jpeg",
    creativeArt: "/assets/IMG_9828.JPG.jpeg",
    fieldTrip: "/assets/IMG_9912.JPG.jpeg",
    studyTour: "/assets/IMG_9912.JPG.jpeg",
    recognition: "/assets/IMG_9965.JPG.jpeg",
  },
  people: {
    founderCeo: "/images/CEO SIR NEW - Copy.png",
    faculty: "/assets/IMG_2461.JPG.jpeg",
    teachersStaff: "/assets/IMG_9917.JPG.jpeg",
    studentsUniform: "/assets/IMG_2516.JPG.jpeg",
  },
  gallery: [
    { id: 1, title: "Students in Science Laboratory", category: "Academics", src: "/assets/IMG_9437.JPG.jpeg" },
    { id: 2, title: "Annual Sports and Athletics Meet", category: "Sports", src: "/assets/IMG_0413.JPG.jpeg" },
    { id: 3, title: "Classroom Interactive Learning", category: "Academics", src: "/assets/1.1.1.JPG.jpeg" },
    { id: 4, title: "Campus Assembly & Gathering", category: "Campus", src: "/assets/2.JPG.jpeg" },
    { id: 5, title: "Play & Learn Early Years", category: "Activities", src: "/assets/2.2.JPG.jpeg" },
    { id: 6, title: "Book Festival & Reading Culture", category: "Events", src: "/assets/IMG_9817.JPG.jpeg" },
    { id: 7, title: "Hifzul Quran & Moral Education", category: "Islamic Studies", src: "/assets/IMG_9469.JPG.jpeg" },
    { id: 8, title: "Orientation Program with Parents", category: "Events", src: "/assets/IMG_9861.JPG.jpeg" },
    { id: 9, title: "Academic Excellence & Award Ceremony", category: "Recognition", src: "/assets/IMG_9965.JPG.jpeg" },
    { id: 10, title: "Creative Art & Craft Workshop", category: "Activities", src: "/assets/IMG_9828.JPG.jpeg" },
    { id: 11, title: "Study Tour & Field Learning", category: "Field Trips", src: "/assets/IMG_9912.JPG.jpeg" },
    { id: 12, title: "Modern Computing & ICT Facility", category: "Facilities", src: "/assets/IMG_2236.JPG.jpeg" },
  ]
};

export function getAsset(keyPath: string, fallback: string = "/assets/2.JPG.jpeg"): string {
  try {
    const keys = keyPath.split(".");
    let current: any = ASSETS;
    for (const key of keys) {
      if (current[key] === undefined) return fallback;
      current = current[key];
    }
    return typeof current === "string" ? current : fallback;
  } catch {
    return fallback;
  }
}
