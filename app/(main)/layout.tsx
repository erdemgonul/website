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

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black flex flex-col min-h-[100vh]">
      <Navbar theme="dark" />
      {children}
    </div>
  );
}
