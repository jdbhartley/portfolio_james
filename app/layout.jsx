import "../global.css";
import LocalFont from "next/font/local";
import data from "../data.json";
import { Navigation } from "./components/nav";
import { Footer } from "./components/footer";

const username = process.env.GITHUB_USERNAME || data.githubUsername;
const displayName = data.displayName || username;

export const metadata = {
  metadataBase: new URL(data.website),
  title: {
    default: `${displayName} · Software Engineer`,
    template: `%s | ${displayName}`,
  },
  description: data.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: displayName,
    title: `${displayName} · Software Engineer`,
    description: data.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${displayName} — Software Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${displayName} · Software Engineer`,
    description: data.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/icon.svg",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
};

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={calSans.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
