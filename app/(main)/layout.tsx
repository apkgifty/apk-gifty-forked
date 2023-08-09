import "../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Nav/Navbar";
import PageFooter from "@/components/Main/Footer/PageFooter";
import MainMobileSide from "@/components/Mobile/MainMobileSide";

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
        <Providers>
          <Navbar />
          <div className="w-full">{children}</div>
          {/* <div className="hidden lg:block"> */}
          <PageFooter />
          {/* </div> */}
          <MainMobileSide />
        </Providers>
      </body>
    </html>
  );
}
