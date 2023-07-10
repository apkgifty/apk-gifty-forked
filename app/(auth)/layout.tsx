import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Nav/Navbar";
import ImagesCard from "@/components/UI/ImagesCard";
import AuthLayoutText from "@/components/Card/CardTexts/AuthLayoutText";
import FormCard from "@/components/Card/FormCard";

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
        <div className="w-full h-screen flex flex-col">
          <Navbar />
          <div className="w-full bg-tertiary flex  flex-col flex-1 justify-center items-center text-white">
            <div className="w-full lg:max-w-5xl">
              <FormCard>
                <div className="w-full flex gap-2 ">
                  <div className="flex-1 ">{children}</div>
                  <div className="flex-1 bg-transparent hidden  justify-center items-center lg:flex lg:flex-col">
                    <ImagesCard />
                    <AuthLayoutText />
                  </div>
                </div>
              </FormCard>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
