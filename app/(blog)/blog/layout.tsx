import "styles/globals.scss";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Erdem Gönül | Frontend Developer",
    template: "%s | Erdem Gönül",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white flex flex-col min-h-[100vh]">
      <Navbar theme="light" />
      {children}
    </div>
  );
}
