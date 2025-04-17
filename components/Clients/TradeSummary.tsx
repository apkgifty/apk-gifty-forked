"use client";

import type React from "react";

import { useState } from "react";
import { Link, User } from "lucide-react";

export function TradeSummary({
  amount,
  pathname,
}: {
  amount: number;
  pathname: string;
}) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, feedback });
    // Handle submission logic here
    alert("Feedback submitted successfully!");
  };

  return (
    <div className=" text-white p-6 rounded-lg max-w-md w-full">
      <h2 className="text-lg font-semibold mb-6">Trade Summary</h2>

      {/* User info */}
      <div className="flex items-center mb-2">
        <div className="bg-[#2a2e38] w-16 h-16 rounded-full flex items-center justify-center mr-4">
          <User className="w-8 h-8 text-gray-400" />
        </div>
        <div>
          <p className="text-base">Username</p>
          <p className="text-base">
            Amount {pathname === "buy" ? "Paid" : "Sold"}:{" "}
            <span className="text-green-400">${amount}</span>
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-8">
        <p className="text-base mb-2">Rate us</p>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="focus:outline-none mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={star <= rating ? "#FFD700" : "none"}
                stroke={star <= rating ? "#FFD700" : "currentColor"}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Trustpilot and X logos */}
        <div className="flex space-x-3 mb-8">
          <div
            className="bg-white text-black rounded-md py-2 px-4 flex items-center cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.trustpilot.com/review/apkxchange.com",
                "_blank"
              );
            }}
          >
            <svg
              className="w-5 h-5 text-[#00b67a] mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0l2.5 7.5H22L16 12.5l2.5 7.5L12 16l-6.5 4 2.5-7.5L2 7.5h7.5z" />
            </svg>
            <span className="font-bold">Trustpilot</span>
          </div>
          <div
            className="bg-white text-black rounded-md p-2 flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => {
              window.open("https://x.com/apkxchangeapp?s=21", "_blank");
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Feedback form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm mb-1">
            How was your trading experience with us?
          </label>
          <p className="text-gray-400 text-sm italic mb-3">Leave a feedback.</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-40 bg-[#1a1f2e] rounded-lg p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your feedback here..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
