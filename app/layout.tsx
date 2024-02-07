import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import type { Metadata } from 'next'

import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'






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
  openGraph: {
    image: {
      url: 'https://www.bleecker-studios.com/opengraph-image.png', // Replace with your image URL
      width: 1200,  // Optional: Specify the width of the image
      height: 630, // Optional: Specify the height of the image
      alt: 'Description of the image', // Optional: Provide an alt description for the image
    },
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <Head>
      <GoogleAnalytics gaId="G-83KQXHGJML" />


      
      <title>Bleecker Studios</title>
<meta name="title" content="Bleecker Studios" />
<meta name="description" content="Everyone Has Ideas, We Bring Them To Life" />

<title>{metadata.title}</title>
        <meta property="og:image" content={metadata.openGraph.image.url} />
        {metadata.openGraph.image.width && (
          <meta property="og:image:width" content={metadata.openGraph.image.width.toString()} />
        )}
        {metadata.openGraph.image.height && (
          <meta property="og:image:height" content={metadata.openGraph.image.height.toString()} />
        )}
        {metadata.openGraph.image.alt && (
          <meta property="og:image:alt" content={metadata.openGraph.image.alt} />
        )}

<meta property="og:image" content="https://www.bleecker-studios.com/opengraph-image.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<link rel="icon" href="/favicon.ico" sizes="any" />

<link
  rel="icon"
  href="/icon.png"
  type="image/png"
  sizes="10x10"
/>



<link
  rel="apple-touch-icon"
  href="/apple-icon.png"
  type="image/png"
  sizes="10x10"
/>



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
