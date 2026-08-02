import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axtrait Digital & IT Solutions | Web Apps · AI · B2B Growth",
  description:
    "Axtrait is a premium IT & digital agency delivering cutting-edge web applications, AI automation, UI/UX design, and custom IT solutions for B2B businesses, startups, and enterprise clients.",
  keywords: [
    "IT agency",
    "digital solutions",
    "web app development",
    "AI integration",
    "UI UX design",
    "B2B technology",
    "Axtrait",
  ],
  authors: [{ name: "Axtrait Digital & IT Solutions" }],
  openGraph: {
    title: "Axtrait Digital & IT Solutions",
    description:
      "Plug into the future of digital & IT solutions. Web Apps · AI · B2B Growth.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
