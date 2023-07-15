"use client";
import React from "react";
import FormInput from "./FormComponents/FormInput";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ButtonIcon from "./FormComponents/ButtonIcon";
import ExternalLogins from "./FormComponents/ExternalLogins";
import Switch from "./FormComponents/Switch";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import { Fields } from "@/types/formTypes";
import Form from "./FormComponents/Form";

const fields: Fields[] = [
  {
    type: "email",
    placeholder: "Email",
    icon: <AlternateEmailIcon />,
    required: true,
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    icon: <LockOpenIcon />,
    required: true,
    name: "password",
  },
  {
    type: "referral",
    placeholder: "Referral",
    icon: <LockOpenIcon />,
    required: true,
    name: "referral",
  },
];

const SignupForm = () => {
  return (
    <FormContainer>
      <FormHeader
        title="Create Your Account"
        subtitle="Setting up an account takes less than 1 minute"
      />
      <FormBody>
        <Switch
          items={[
            { label: "Login", url: "login" },
            { label: "Signup", url: "signup" },
          ]}
          backgroundColor="bg-tertiary"
        />
        <Form fields={fields} />

        <FormFooter>
          <ExternalLogins />
        </FormFooter>
      </FormBody>
    </FormContainer>
  );
};

export default SignupForm;
