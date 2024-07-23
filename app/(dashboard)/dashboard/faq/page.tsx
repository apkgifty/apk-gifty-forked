import FaqAccordion from "@/components/FAQs/FaqsAccordion";
import React from "react";

const FaqsPage = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-12 gap-y-12 px-4 xl:px-24 justify-center mx-auto mt-8  xl:max-w-[1300px]">
      <FaqAccordion />
    </div>
  );
};

export default FaqsPage;
