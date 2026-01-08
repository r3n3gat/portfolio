import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Kaushan_Script, Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const kaushan = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-kaushan",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata = {
  metadataBase: new URL("https://enotodigitalconseil.fr"),
  title: {
    default: "Stevi ENOTO | Développeur full-stack Python | Web & Mobile",
    template: "%s | Stevi ENOTO",
  },
  description:
    "Développeur full-stack spécialisé Python (Django/DRF). Applications web (React/Next.js) et mobile (Flutter). API, auth JWT, tests, Docker, CI/CD.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/img/favicon/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/img/favicon/favicon-16x16.webp", sizes: "16x16", type: "image/webp" }
    ],
    apple: [{ url: "/img/favicon/E_icon.webp", sizes: "180x180", type: "image/webp" }],
  },
  manifest: "/img/favicon/site.webmanifest",
  openGraph: {
    title: "Stevi ENOTO | Développeur full-stack Python | Web & Mobile",
    description:
      "Spécialisé Python (Django/DRF). Applications web & mobile, APIs sécurisées, tests, Docker, CI/CD.",
    url: "/",
    siteName: "ENOTO DIGITAL CONSEIL",
    images: [
      { url: "/img/img-main-rs.webp", width: 1200, height: 630, alt: "Portfolio Stevi ENOTO" }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@r3n3gat",
    creator: "@r3n3gat",
    images: ["/img/img-main-rs.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${kaushan.variable} ${poppins.variable} overflow-x-hidden bg-off-white font-poppins text-gray-global`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
