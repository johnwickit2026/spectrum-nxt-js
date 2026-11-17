import type { Metadata } from "next";
import "./globals.css";
import TopContactBar from "@/components/TopContactBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spectrumintlschool.com"),
  title: "Spectrum International School (SIS) | Shantinagar, Dhaka",
  description:
    "Spectrum International School is a premier English-medium school offering Pearson Edexcel and Cambridge curriculum alongside Islamic studies and Tahfeezul Quran in Shantinagar, Dhaka.",
  keywords: [
    "Spectrum International School",
    "SIS Dhaka",
    "English medium school Shantinagar",
    "Edexcel school Dhaka",
    "Cambridge school Dhaka",
    "Hifzul Quran school",
    "Spectrum EduCare",
  ],
  authors: [{ name: "Spectrum International School" }],
  openGraph: {
    title: "Spectrum International School (SIS) | Excellence in Education & Faith",
    description:
      "Nurturing intellect and spiritual growth with Pearson Edexcel, Cambridge pathways and Tahfeezul Quran.",
    url: "https://spectrumintlschool.com",
    siteName: "Spectrum International School",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 300,
        alt: "Spectrum International School Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Spectrum International School",
    "alternateName": "SIS",
    "url": "https://spectrumintlschool.com",
    "logo": "https://spectrumintlschool.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khadem Tower, 41/1 Shantinagar",
      "addressLocality": "Dhaka",
      "postalCode": "1217",
      "addressCountry": "BD"
    },
    "telephone": ["+880 1799-369685", "+880 1730-369686", "0248318285"],
    "email": "spectrumintlschool@gmail.com",
    "curriculum": ["Pearson Edexcel", "Cambridge International", "Tahfeezul Quran"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex flex-col min-h-screen text-sis-darkgray bg-white antialiased">
        <TopContactBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
