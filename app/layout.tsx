import "styles/globals.scss";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Erdem Gönül | Frontend Developer",
    template: "%s | Erdem Gönül",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
