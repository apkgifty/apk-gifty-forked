import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import SignupForm from "@/components/Form/SignupForm";

const SignupPage = () => {
  const userCookie = cookies()?.get("access");

  if (userCookie?.name) {
    redirect("/dashboard/exchange/buy");
  }
  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupPage;
