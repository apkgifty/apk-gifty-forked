import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import "../globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/Dashboard/Topbar/Topbar";
import MobileNav from "@/components/Bottombar/MobileNav";
import Providers from "@/redux/provider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashMobileSide from "@/components/Mobile/DashMobileSide";

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
  const accessToken = cookieStore.get("access");

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
          {/* <MobileNav /> */}
        </Providers>
      </body>
    </html>
  );
}
