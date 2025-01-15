import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";
import { Cursor } from "@/components/cursor";

export const metadata: Metadata = {
  title: "Krishnadev R - Portfolio",
  description: "A portfolio of Krishnadev R, a Software Engineer based in Kochi, Kerala.",
  authors: [
    { name: "Krishnadev R", url: "www..com" },
  ],
  openGraph: {
    title: "Krishnadev R - Portfolio",
    description: "A portfolio of Krishnadev R, a Software Engineer based in Kochi, Kerala.",
    url: "https://www.kichuu.github.io",
    siteName: "Krishnadev R - Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.kichuu.github.io/",
        width: 3410,
        height: 2072,
        alt: "Krishnadev R - Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // Assuming the favicon is located in the public folder
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
          <div style={{
            flex: "none",
            height: "100%",
            left: "calc(50.00000000000002% - 100% / 2)",
            pointerEvents: "none",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "4",
          }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
