"use client";
import React from "react";
import FormInput from "./FormInput";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ButtonIcon from "./ButtonIcon";
import ExternalLogins from "./ExternalLogins";
import Switch from "./Switch";

const Signup = () => {
  return (
    <div className="bg-secondary rounded-lg  py-10">
      <div className="pl-14 pr-8">
        <h3 className="text-2xl font-semibold">Create your Account</h3>
        <p className="text-gray-400 text-sm pr-24">
          Setting up an account takes less than 1 minute
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8 px-14">
        {/* <FormInput
          placeholder="Email"
          type="text"
          icon={<AlternateEmailIcon fontSize="small" />}
        /> */}
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
