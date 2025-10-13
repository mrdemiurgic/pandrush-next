import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Oswald } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Load Google Fonts with all weights to match original Gatsby setup
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pandrush",
  description: "Pandrush - Professional Video Production Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oswald.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=adsfasdfaefaew"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'adsfasdfaefaew');
          `}
        </Script>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
