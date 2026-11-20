import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { seo, site } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["ui-serif", "Georgia", "serif"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://debbytella.com"),
  title: {
    default: seo.title,
    template: "%s — Debby Tella",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: "https://debbytella.com" }],
  creator: site.name,
  publisher: site.name,
  category: "Graphic Design",
  applicationName: "Debby Tella Portfolio",
  alternates: {
    canonical: "https://debbytella.com",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: seo.locale,
    url: "https://debbytella.com",
    siteName: "Debby Tella",
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 1200,
        alt: "Debby Tella — Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": seo.geo.region,
    "geo.placename": seo.geo.placename,
    "og:locale:alternate": "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${cormorant.variable} h-full`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('debby-theme');var dark=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;if(dark){r.classList.add('dark');r.style.colorScheme='dark';r.dataset.theme='dark';}else{r.classList.remove('dark');r.style.colorScheme='light';r.dataset.theme='light';}}catch(e){}})();`,
          }}
        />
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
