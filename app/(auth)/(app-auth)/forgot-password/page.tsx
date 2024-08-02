import ForgotPasswordForm from "@/components/Form/ForgotPasswordForm";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ForgotPasswordPage = () => {
  const userCookie = cookies()?.get("access");

  if (userCookie?.name) {
    redirect("/dashboard/exchange/buy");
  }
  return (
    <>
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;
