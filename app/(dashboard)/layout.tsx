import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import "../globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/Dashboard/Topbar/Topbar";
import MobileNav from "@/components/Bottombar/MobileNav";
import Providers from "@/redux/provider";

import "@/polyfills";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APK Exchange",
  description: "Site to trade giftcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen bg-tertiary flex h-screen  overflow-hidden`}
      >
        <Sidebar />
        <div className="w-full flex flex-col ">
          <Topbar />

          <div className="w-full flex flex-col pt-20  py-2 overflow-y-auto  ">
            <Providers>{children}</Providers>
          </div>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
