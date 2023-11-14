"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import FormContainer from "./FormComponents/FormContainer";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import ButtonIcon from "./FormComponents/ButtonIcon";
import { Snackbar, Alert } from "@mui/material";

interface Error {
  message: string;
}

interface Success {
  message: string;
}

const EmailVerificationForm = () => {
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<Success | null>(null);
  const [showLinkButton, setShowLinkButton] = useState(true);

  const resendLinkHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLinkButton(false);

    try {
      const response = await axios.get("/api/resend-verification-email");
      // console.log(response);
      setSuccess({ message: response.data.message });
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    let resetSuccess: any;
    let resetError: any;
    let resetShowButton: any;

    if (success !== null) {
      resetSuccess = setTimeout(() => {
        setSuccess(null);
      }, 6000);
    }

    if (error !== null) {
      resetError = setTimeout(() => {
        setError(null);
      }, 6000);
    }

    if (showLinkButton === false) {
      resetShowButton = setTimeout(() => {
        setShowLinkButton(true);
      }, 60000);
    }

    return () => {
      clearTimeout(resetSuccess);
      clearTimeout(resetError);
      clearTimeout(resetShowButton);
    };
  }, [success, error, showLinkButton]);

  return (
    <>
      <FormContainer>
        <FormHeader
          title="Email Verification"
          subtitle="Kindly check your email to complete verification process"
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

          {/* <p>
          Didn't recieve email ? <span>Resend Verification Link</span>
        </p> */}
          <form onSubmit={resendLinkHandler}>
            {showLinkButton && <ButtonIcon text="Resend Link" type="submit" />}
          </form>
        </FormBody>
      </FormContainer>

      <Snackbar
        open={error === null ? false : true}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>

      <Snackbar
        open={success === null ? false : true}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success">{success?.message}</Alert>
      </Snackbar>
    </>
  );
};

export default EmailVerificationForm;
