import React from "react";
import AppLayout from "@/components/Layout/AppLayout";

import Privacy from "../../faq.mdx";
import MdxWrapper from "@/components/MdxWrapper";

const FAQ = () => {
  return (
    <div className="w-full text-white py-8">
      <AppLayout>
        <h1 className="text-center text-xl lg:text-3xl font-bold lg:pb-10">
          Frequently Asked Questions (FAQs) on APKXchange.
        </h1>
        <div className="space-y-4 px-3 lg:px-0 text-sm">
          <Privacy />
        </div>
      </AppLayout>
    </div>
  );
};

export default FAQ;
