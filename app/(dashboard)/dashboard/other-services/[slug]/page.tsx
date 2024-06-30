import { redirect } from "next/navigation";
import React from "react";

const OtherServicesAllPage = ({ params }: { params: { slug: string } }) => {
  if (params.slug !== "Bank" && params.slug !== "Bundle") {
    redirect("/404");
  }

  return <div>{params.slug}</div>;
};

export default OtherServicesAllPage;
