import "../globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Topbar from "@/components/Dashboard/Topbar/Topbar";
import MobileNav from "@/components/Bottombar/MobileNav";
import Providers from "@/redux/provider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashMobileSide from "@/components/Mobile/DashMobileSide";
import NotificationListener from "@/components/Dashboard/Data/NotificationListener";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

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
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  if (accessToken === undefined) {
    return redirect("/login");
  }
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen bg-tertiary flex h-screen  overflow-hidden`}
      >
        <Providers>
          <Sidebar />
          <div className="w-full flex flex-col ">
            <Topbar />

            <div className="w-full flex flex-col pt-20  py-2 overflow-y-auto  ">
              <Providers>{children}</Providers>
            </div>
          </div>
          <DashMobileSide />
          <NotificationListener token={accessToken!} />
          {/* <MobileNav /> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
