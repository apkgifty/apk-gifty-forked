"use client";

import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormContainer from "./FormComponents/FormContainer";
import Form from "./FormComponents/Form";
import { Fields } from "@/types/formTypes";
import { motion } from "framer-motion";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useRouter } from "next/navigation";

const fields: Fields[] = [
  {
    type: "text",
    placeholder: "Email",
    name: "email",
    icon: <AlternateEmailIcon />,
    config: {
      required: true,
    },
  },
];

const ForgotPasswordForm = () => {
  const router = useRouter();

  const afterSubmit = (data: any) => {
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
        <Form
          fields={fields}
          redirectUrl="/"
          endpoint="#"
          afterSubmit={() => {}}
        />
      </FormBody>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
