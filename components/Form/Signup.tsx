"use client";
import React from "react";
import FormInput from "./FormInput";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ButtonIcon from "./ButtonIcon";

const Signup = () => {
  return (
    <div className="bg-secondary rounded-lg px-4 py-6">
      <div>
        <h3 className="text-4xl font-semibold">Create your Account</h3>
        <p className="text-gray-400 ">
          Setting up an account takes less than 1 minute
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <FormInput
          placeholder="Email"
          type="text"
          icon={<AlternateEmailIcon />}
        />
        <FormInput
          placeholder="Password"
          type="Password"
          icon={<LockOpenIcon />}
        />
        <FormInput
          placeholder="Referral code (optional)"
          type="text"
          icon={<LockOpenIcon />}
        />
        <ButtonIcon />
      </div>
    </div>
  );
};

export default Signup;
