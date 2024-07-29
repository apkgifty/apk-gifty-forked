"use client";
import React from "react";
import FormInput from "./FormComponents/FormInput";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ButtonIcon from "./FormComponents/ButtonIcon";
import ExternalLogins from "./FormComponents/ExternalLogins";
import Switch from "./FormComponents/Switch";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import Form from "./FormComponents/Form";
import { Fields } from "@/types/formTypes";

const fields: Fields[] = [
  {
    type: "text",
    placeholder: "Email",
    name: "email",
    icon: <AlternateEmailIcon />,
    config: { required: true },
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <LockOpenIcon />,
    config: { required: true },
  },
];

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["access"]);
  const router = useRouter();

  const afterSubmit = (data: any) => {
    if (data?.token) {
      // console.log(data);
      // console.log(data.token);
      const expiresInSeconds = 3 * 60 * 60;
      setCookie("access", data.token, { maxAge: expiresInSeconds });
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      if (data.user.email_verified_at !== null) {
        console.log("verified");
        router.push("/dashboard/exchange/buy");
      } else {
        router.push("/email-verification");
      }
    }
  };

  return (
    <FormContainer>
      <FormHeader
        title="Welcome back"
        subtitle="Please enter your email and password to continue"
      />
      <FormBody>
        <Switch
          items={[
            { label: "Login", url: "login", slug: "login" },
            { label: "Signup", url: "signup", slug: "signup" },
          ]}
          backgroundColor="bg-tertiary"
        />
        <Form
          fields={fields}
          redirectUrl="/dashboard/exchange/buy"
          endpoint="/api/login"
          afterSubmit={afterSubmit}
        />

        {/* <FormFooter>
          <ExternalLogins />
        </FormFooter> */}
      </FormBody>
    </FormContainer>
  );
};

export default LoginForm;
