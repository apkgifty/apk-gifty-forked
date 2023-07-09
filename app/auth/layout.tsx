"use client";

import AppLayout from "@/components/Layout/AppLayout";
import Navbar from "@/components/Nav/Navbar";
import Card from "@/components/Card/Card";
import { AnimatePresence } from "framer-motion";
import ImagesCard from "@/components/UI/ImagesCard";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full bg-tertiary flex  flex-col flex-1 justify-center items-center text-white">
        <div className="w-full lg:max-w-5xl">
          <Card>
            <div className="w-full flex gap-2 ">
              <div className="flex-1 ">
                <AnimatePresence>{children}</AnimatePresence>
              </div>
              <div className="flex-1 bg-transparent hidden  justify-center items-center lg:flex lg:flex-col">
                <ImagesCard />
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-xl font-bold bg-gradient-to-r from-[#FB774A] to-[#12BE73] inline-block text-transparent bg-clip-text">
                    Trade
                  </p>
                  <p className="font-semibold">
                    anything, anywhere with <br /> APKExchange!
                  </p>
                </motion.div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
