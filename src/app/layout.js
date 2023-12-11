import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
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

export const metadata = {
  title: "Stevi ENOTO | Portfolio - développeur web front-end",
  description:
    "Je suis  Stevi ENOTO,  passionné d'informatique et créateur d'applications web dynamiques.",
  icons: {
    icon: "img/favicon/favicon-32x32.png",
    shortcut: "img/favicon/favicon-16x16.png",
    apple: [
      { url: "img/favicon/E_icon.png" },
      {
        url: "img/favicon/E_icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://www.stevi-enoto.web"),
  openGraph: {
    title: "Stevi ENOTO | Portfolio - développeur web front-end",
    description:
      "Je suis  Stevi ENOTO,  passionné d'informatique et créateur d'applications web dynamiques.",
    url: "https://www.stevi-enoto.web",
    siteName: "Portfolio Stevi ENOTO, développeur web",
    images: [
      {
        url: "/img/img-main-rs.png",
        width: 800,
        height: 600,
      },
      {
        url: "/img/img-main-rs.png",
        width: 1800,
        height: 1600,
        alt: "Portfolio Stevi ENOTO, développeur web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    handle: "@r3n3gat",
    site: "@r3n3gat",
    cardType: "summary_large_image",
    image: {
      url: "/img/img-main-rs.png",
      width: 1200,
      height: 630,
      alt: "Portfolio Stevi ENOTO, développeur web",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="manifest" href="img/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="theme-color" content="#000000" />{" "}
        {/* Ajoutez cette ligne */}
      </head>
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
