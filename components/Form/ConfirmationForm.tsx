"use client";
import React, { useState } from "react";
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
import ConfirmationSelect from "./FormComponents/ConfirmationSelect";

const ConfirmationForm = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type: string) => {
    setSelected(type);
  };

  return (
    <FormContainer>
      <FormHeader
        title="Let's confirm it's you!"
        subtitle="Complete verification process"
      />
      <FormBody>
        {/* <Switch /> */}
        {/* <Form fields={fields} /> */}
        <ConfirmationSelect
          selected={selected}
          title="Get the code by (SMS) at:"
          info="562536******55"
          type="sms"
          handleSelect={handleSelect}
        />

        <ConfirmationSelect
          selected={selected}
          title="Get the code by email) at:"
          info="ste****ys@gmail.com"
          type="email"
          handleSelect={handleSelect}
        />

        <ButtonIcon />
      </FormBody>
    </FormContainer>
  );
};

export default ConfirmationForm;
