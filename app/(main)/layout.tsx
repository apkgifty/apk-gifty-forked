import "../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Nav/Navbar";
import PageFooter from "@/components/Main/Footer/PageFooter";
import MainMobileSide from "@/components/Mobile/MainMobileSide";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import Adbar from "@/components/Nav/Adbar";

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
      <body className={`${inter.className} bg-tertiary`}>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics />}
        <Providers>
          <div className="w-full min-h-screen flex flex-col justify-between">
            <Navbar />
            <Adbar />
            <div className="w-full">{children}</div>
            {/* <div className="hidden lg:block"> */}
            <Adbar />
            <PageFooter />
          </div>
          {/* </div> */}
          <MainMobileSide />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
