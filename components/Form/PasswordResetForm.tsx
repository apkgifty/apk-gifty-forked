"use client";
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
    type: "text",
    placeholder: "Email",
    name: "email",
    icon: <AlternateEmailIcon />,
    required: true,
  },
];

const PasswordResetForm = () => {
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
        <Form fields={fields} />
      </FormBody>
    </FormContainer>
  );
};

export default PasswordResetForm;
