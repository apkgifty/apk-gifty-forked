"use client";
import { useState } from "react";
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
import { motion } from "framer-motion";

const fields: Fields[] = [
  {
    type: "password",
    placeholder: "New Password",
    name: "password",
    icon: <LockOpenIcon />,
    config: {
      required: { value: true, message: "Password is required" },
      minLength: { value: 8, message: "Minimum 8 characters" },
    },
  },
  {
    type: "password",
    placeholder: "Confirm Password",
    name: "password_confirmation",
    icon: <LockOpenIcon />,
    config: {
      required: { value: true, message: "Confirm password is required" },
      minLength: { value: 8, message: "Minimum 8 characters" },
    },
  },
];

const PasswordResetForm = () => {
  const [succefulReset, setSuccessfulReset] = useState(false);

  const afterSubmit = (data: any) => {
    console.log(data);
    if (data?.token) {
      // console.log(data);
      // console.log(data.token);
      // const expiresInSeconds = 3 * 60 * 60;
      // setCookie("access", data.token, { maxAge: expiresInSeconds });
      // if (data.user.email_verified_at !== null) {
      //   router.push("/dashboard/exchange/buy");
      // } else {
      //   router.push("/email-verification");
      // }
    }
  };
  return (
    <FormContainer>
      <FormHeader
        title="Reset your Password"
        subtitle="Enter your new password."
      />
      <FormBody>
        <motion.div
          className="flex justify-center my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/watch-it.svg" />
        </motion.div>
        <Form
          fields={fields}
          redirectUrl="#"
          endpoint="/api/reset-password"
          afterSubmit={afterSubmit}
        />
      </FormBody>
    </FormContainer>
  );
};

export default PasswordResetForm;
