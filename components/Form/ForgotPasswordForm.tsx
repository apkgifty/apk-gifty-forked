"use client";

import { useState } from "react";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormContainer from "./FormComponents/FormContainer";
import Form from "./FormComponents/Form";
import { Fields } from "@/types/formTypes";
import { motion } from "framer-motion";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useRouter } from "next/navigation";

const regex: RegExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const fields: Fields[] = [
  {
    type: "email",
    placeholder: "Email",
    icon: <AlternateEmailIcon />,
    config: {
      required: { value: true, message: "Email is required" },
      pattern: { value: regex, message: "Invalid email address" },
    },
    name: "email",
  },
];

const ForgotPasswordForm = () => {
  const router = useRouter();

  const [emailSent, setEmailSent] = useState(false);

  const afterSubmit = (data: any) => {
    console.log(data);
    if (data?.status) {
      setEmailSent(true);
    }
  };
  return (
    <FormContainer>
      <FormHeader
        title="Forgot Password ?"
        subtitle="Enter your email address below, you will receive an email with a password reset link."
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
        {!emailSent ? (
          <Form
            fields={fields}
            redirectUrl="/"
            endpoint="/api/forgot-password"
            afterSubmit={afterSubmit}
          />
        ) : (
          <p className="text-white text-xs lg:text-sm text-center">
            A password reset link has been sent to your email address
          </p>
        )}
      </FormBody>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
