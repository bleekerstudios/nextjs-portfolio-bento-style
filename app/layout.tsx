import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Image from "next/image";
 



const sfPRO = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export const metadata = {
  title: "Bleecker Studios",
  description: "",
  ogimage: "https://www.bleecker-studios.com/iphoneLogo.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <Head>
        {/* Existing head elements can go here */}
<title>Bleecker Studios</title>
<meta name="title" content="Bleecker Studios" />
<meta name="description" content="Everyone Has Ideas, We Bring Them To Life" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Bleecker Studios" />
<meta property="og:description" content="Everyone Has Ideas, We Bring Them To Life" />
<meta property="og:image" content={metadata.ogimage} />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Bleecker Studios" />
<meta property="twitter:description" content="Everyone Has Ideas, We Bring Them To Life" />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />



        {/* Other meta tags and head elements */}
      </Head>
      <body className={sfPRO.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
        <Analytics />

      </body>
    </html>
  );
}
