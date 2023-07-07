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
import Form from "./FormComponents/Form";
import { Fields } from "@/types/formTypes";

const fields: Fields[] = [
  {
    type: "text",
    placeholder: "Email",
    name: "email",
    icon: <AlternateEmailIcon />,
    required: true,
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <LockOpenIcon />,
    required: true,
  },
];

const LoginForm = () => {
  return (
    <FormContainer>
      <FormHeader
        title="Create Your Account"
        subtitle="Setting up an account takes less than 1 minute"
      />
      <FormBody>
        <Switch />
        <Form fields={fields} />

        <FormFooter>
          <ExternalLogins />
        </FormFooter>
      </FormBody>
    </FormContainer>
  );
};

export default LoginForm;
