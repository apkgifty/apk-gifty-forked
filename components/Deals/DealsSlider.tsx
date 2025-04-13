"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DealsCardMobile from "./DealsCardMobile";

const deals = [
  {
    dealName: "Xbox Deals",
    dealUrl: "/dashboard/exchange/deals?category=xbox&currency=USD",
    dealImageUrl: "/images/xbox.png",
    btnColor: "bg-[#107c10] hover:bg-[#0b4b0b]",
  },
  {
    dealName: "Playstation Deals",
    dealUrl: "/dashboard/exchange/deals?category=psn&currency=USD",
    dealImageUrl: "/images/psn.png",
    btnColor: "bg-[#0070d1] hover:bg-[#004a9f]",
  },
  {
    dealName: "Nintendo Deals",
    dealUrl: "/dashboard/exchange/deals?category=nintendo&currency=USD",
    dealImageUrl: "/images/nintendo.png",
    btnColor: "bg-[#e60012] hover:bg-[#a5000d]",
  },
  {
    dealName: "Daily Deals",
    dealUrl: "/dashboard/exchange/deals?category=daily&currency=USD",
    dealImageUrl: "/images/daily.png",
    btnColor: "bg-[#0070d1] hover:bg-[#004a9f]",
  },
];

const DealsSlider = () => {
  return (
    <div className="px-4 lg:px-8">
      <style jsx global>{`
        .splide__slide {
          transition: transform 0.3s ease;
        }
        .splide__slide.is-active {
          transform: scale(1.1);
          z-index: 1;
        }
      `}</style>
      <Splide
        aria-label="Carousel"
        options={{
          perPage: 4,
          autoplay: false,
          pagination: false,
          arrows: false,
          drag: "free",
          lazyLoad: true,
          gap: "1.5rem",
          padding: "1rem",
          focus: "center",
          trimSpace: false,
          start: Math.floor(deals.length / 2),
          breakpoints: {
            600: {
              perPage: 2,
              gap: "1rem",
              padding: "0.5rem",
              start: Math.floor(deals.length / 2),
            },
            850: {
              perPage: 3,
              gap: "1.25rem",
              padding: "0.75rem",
              start: Math.floor(deals.length / 2),
            },
          },
        }}
      >
        {deals.map((deal) => (
          <SplideSlide key={deal.dealName} className="h-[220px] lg:h-[250px]">
            <DealsCardMobile
              image_url={deal.dealImageUrl}
              link={deal.dealUrl}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default DealsSlider;
