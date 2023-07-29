"use client";

import SignupForm from "@/components/Form/SignupForm";
import { useFetch } from "@/hooks/useFetch";

const SignupPage = () => {
  useFetch();

  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupPage;
