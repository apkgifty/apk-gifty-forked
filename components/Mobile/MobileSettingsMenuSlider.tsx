"use client";

import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SettingsMenuItem from "../Form/FormComponents/SettingsMenuItem";
import UserIconSvg from "../UI/SvgIcons/UserIconSvg";
import IdeaSvg from "@/components/UI/SvgIcons/IdeaSvg";
import KycIconSvg from "../UI/SvgIcons/KycIconSvg";
interface Props {
  menuItems: any;
}

const MobileSettingsMenuSlider: React.FC<Props> = ({ menuItems }) => {
  return (
    <Splide
      aria-label="Carousel"
      options={{
        perPage: 2,
        autoplay: true,
        pagination: false,
        arrows: false,
        drag: "free",
        lazyLoad: true,
        breakpoints: {
          600: {
            perPage: 2,
          },
          850: {
            perPage: 5,
          },
        },
      }}
    >
      {/* {menuItems.length > 0 &&
        menuItems.map((product: any) => (
          <SplideSlide key={product}>
            <div className="text-white">
              <SettingsMenuItem
                title="Personal Information"
                subtitle="Profile Settings"
                icon={<UserIconSvg />}
                // isSelected
                link="/dashboard/settings/personal-information"
              />
            </div>
          </SplideSlide>
        ))} */}
      <SplideSlide>
        <div className="text-white">
          <SettingsMenuItem
            title="Personal Information"
            subtitle="Profile Settings"
            icon={<UserIconSvg />}
            // isSelected
            link="/dashboard/settings/personal-information"
          />
        </div>
      </SplideSlide>{" "}
      <SplideSlide>
        <div className="text-white">
          <SettingsMenuItem
            title="KYC Verification"
            subtitle="Authenticate your identity"
            icon={<KycIconSvg />}
            // isSelected={false}
            link="/dashboard/settings/kyc"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="text-white">
          <SettingsMenuItem
            title="Tutorials"
            subtitle="How to Trade on ApkXchange"
            icon={<IdeaSvg />}
            // isSelected={false}
            link="/dashboard/settings/tutorials"
          />
        </div>
      </SplideSlide>
    </Splide>

    //  {/* </Carousel> */}
  );
};

export default MobileSettingsMenuSlider;
