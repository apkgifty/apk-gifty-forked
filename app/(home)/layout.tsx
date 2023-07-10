import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import "../globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/Dashboard/Topbar/Topbar";

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
      <body className={`${inter.className} bg-tertiary flex`}>
        <Sidebar />
        <div className="w-full flex flex-col">
          <Topbar />
        </div>

        {children}
      </body>
    </html>
  );
}
