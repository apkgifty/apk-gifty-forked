"use client";

import { useEffect, useRef } from "react";
import { User } from "lucide-react";

interface Trade {
  user: string;
  // type: "Purchased" | "Sold";
  // amount: number;
  name: string;
}

// const trades: Trade[] = [
//   { username: "n****er", type: "Sold", amount: 300, cardType: "Amazon" },
//   { username: "g****jk", type: "Purchased", amount: 300, cardType: "PSN" },
//   { username: "n****er", type: "Sold", amount: 300, cardType: "Amazon" },
//   { username: "g****jk", type: "Purchased", amount: 300, cardType: "PSN" },
//   { username: "n****er", type: "Sold", amount: 300, cardType: "Amazon" },
//   { username: "g****jk", type: "Purchased", amount: 300, cardType: "PSN" },
// ];

export default function RecentTrades({ trades }: { trades: Trade[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-medium mb-8">
          <span className="text-white">Recent </span>
          <span className="text-blue-500">Trades</span>
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden whitespace-nowrap"
          >
            {/* Duplicate trades for continuous scrolling */}
            {[...trades, ...trades, ...trades].map((trade, index) => (
              <div
                key={index}
                className="inline-flex items-center space-x-2 bg-[#1e2328] rounded-lg px-4 py-2"
              >
                <div className="bg-gray-700 p-2 rounded-full">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-blue-500">
                    {trade.user}
                  </span>
                  <span className="text-xs text-gray-400">
                    {/* {trade.type}: ${trade.amount} {trade.cardType} giftcard */}
                    {trade.name} traded
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
