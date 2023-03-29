import { useRouter } from "next/navigation";
import "styles/nprogress.scss";
import NProgress from "nprogress";
import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/components/Layout";
import Providers from "@/components/Providers";
import "/styles/globals.scss";

// const handleStart = () => NProgress.start();

// const handleStop = () => NProgress.done();

// const router = useRouter();

// router.events.on("routeChangeStart", handleStart);
// router.events.on("routeChangeComplete", handleStop);
// router.events.on("routeChangeError", handleStop);

export const metadata = {
  title: {
    default: "Erdem Gönül | Frontend Developer",
    template: "%s | Erdem Gönül",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
