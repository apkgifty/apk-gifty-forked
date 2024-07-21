"use client";

import React, { useEffect, useRef } from "react";
import BankCard from "./BankCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Props {
  products: any[];
}

const BankSlider: React.FC<Props> = ({ products }) => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 1500, min: 500 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //   },
  // };

  return (
    // <Carousel responsive={responsive} containerClass="carousel-container">
    <Splide
      aria-label="Carousel"
      options={{
        perPage: 4,
        autoplay: true,
        pagination: true,
        arrows: true,
        drag: "free",
        lazyLoad: true,
        breakpoints: {
          600: {
            perPage: 3,
          },
          850: {
            perPage: 5,
          },
        },
      }}
    >
      {products.length > 0 &&
        products.map((product: any) => (
          <SplideSlide>
            <BankCard productInfo={product} />
          </SplideSlide>
        ))}
    </Splide>
    //  {/* </Carousel> */}
  );
};

export default BankSlider;
