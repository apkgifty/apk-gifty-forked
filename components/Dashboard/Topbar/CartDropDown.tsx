"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface Notification {
  id: string;
  title: string;
  timestamp: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "$200 PlayStation gift card",
    timestamp: "Just Now",
    read: false,
  },
  {
    id: "2",
    title: "$100 Amazon gift card",
    timestamp: "3 mins ago",
    read: false,
  },
  {
    id: "3",
    title: "$25 Xbox gift card",
    timestamp: "1 hr ago",
    read: false,
  },
];

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Calculate dropdown position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const left = rect.left + window.scrollX;
      const top = rect.bottom + window.scrollY;

      // For mobile, center the dropdown
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        // Mobile breakpoint
        // Center the dropdown (assuming dropdown width is 320px (w-80))
        setDropdownPosition({
          left: Math.max(
            10,
            Math.min(windowWidth - 330, windowWidth / 2 - 160)
          ),
          top: top,
        });
      } else {
        // For larger screens position to the right of the button
        setDropdownPosition({
          left: Math.max(10, left - 300 + rect.width),
          top: top,
        });
      }
    }
  }, [isOpen]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="p-1.5 rounded-full hover:bg-gray-800 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Notifications"
      >
        <ShoppingCart className="h-5 w-5 text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-80 bg-[#1e2328]  rounded-md shadow-lg"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`,
          }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="notifications-menu"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-xs font-medium text-white">My Cart</h2>
            {/* <button
              className="text-sm text-gray-400 hover:text-white"
              onClick={() => console.log("Mark all as read")}
            >
              Mark as read
            </button> */}
          </div>

          <div className="py-2 max-h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-4 py-3 hover:bg-gray-700 cursor-pointer"
                role="menuitem"
                onClick={() =>
                  console.log(`Clicked notification ${notification.id}`)
                }
              >
                <div className="flex flex-col gap-1">
                  <span className="text-white text-sm">
                    {notification.title}
                  </span>
                  <span className="text-xs text-gray-400">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-700">
            <Link
              href="/dashboard/cart"
              className="block w-full py-2 text-center text-white text-sm  bg-[#587BF2] hover:bg-[#4665D1] rounded-md transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
