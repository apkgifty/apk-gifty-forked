import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  const userCookie = cookies()?.get("access");

  if (userCookie?.name) {
    redirect("/dashboard/exchange/buy");
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
