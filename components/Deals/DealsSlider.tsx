"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DealsCardMobile from "./DealsCardMobile";

const DealsSlider = ({ deals }: any) => {
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
        {deals.map((deal: any) => (
          <SplideSlide key={deal.dealName} className="h-[220px] lg:h-[250px]">
            <DealsCardMobile
              image_url={deal.image_url}
              link={`/dashboard/exchange/deals?category=${deal.name}&currency=USD`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default DealsSlider;
