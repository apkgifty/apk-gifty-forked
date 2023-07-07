"use client";
import React from "react";
import FormInput from "./FormInput";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ButtonIcon from "./ButtonIcon";
import ExternalLogins from "./ExternalLogins";
import Switch from "./Switch";
import FormHeader from "./FormHeader";

const Signup = () => {
  return (
    <div className="bg-secondary rounded-lg  py-10">
      <FormHeader
        title="Create Your Account"
        subtitle="Setting up an account takes less than 1 minute"
      />
      <div className="flex flex-col gap-4 mt-8 px-2 lg:px-14">
        <Switch />
        <FormInput
          placeholder="Email"
          type="text"
          icon={<AlternateEmailIcon fontSize="small" />}
        />
        <FormInput
          placeholder="Password"
          type="Password"
          icon={<LockOpenIcon fontSize="small" />}
        />
        <FormInput
          placeholder="Referral code (optional)"
          type="text"
          icon={<LockOpenIcon fontSize="small" />}
        />
        <ButtonIcon />
        <div className="px-20 mt-6">
          <ExternalLogins />
        </div>
      </div>
    </div>
  );
};

export default Signup;
