"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ButtonIcon from "./FormComponents/ButtonIcon";
import ExternalLogins from "./FormComponents/ExternalLogins";
import Switch from "./FormComponents/Switch";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import { Fields } from "@/types/formTypes";
import Form from "./FormComponents/Form";
import EmailAtSvg from "../UI/SvgIcons/EmailAtSvg";
import ReferralSvg from "../UI/SvgIcons/ReferralSvg";

const fields: Fields[] = [
  {
    type: "text",
    placeholder: "username",
    icon: <PersonOutlineIcon />,
    config: {
      required: true,
    },

    name: "firstname",
  },
  {
    type: "email",
    placeholder: "Email",
    icon: <EmailAtSvg />,
    config: { required: true },
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    icon: <LockOpenIcon />,
    config: { required: true },
    name: "password",
  },
  {
    type: "text",
    placeholder: "Referral (Optional)",
    icon: <ReferralSvg />,
    config: {
      required: false,
    },

    name: "referral",
  },
];

const SignupForm = () => {
  const [cookies, setCookie] = useCookies(["access"]);
  const router = useRouter();

  const afterSubmit = (data: any) => {
    console.log(data?.token);
    if (data?.token) {
      console.log(data);
      console.log(data.token);
      setCookie("access", data.token);
      router.push("/dashboard/exchange/buy");
    }
  };
  return (
    <FormContainer>
      <FormHeader
        title="Create Your Account"
        subtitle="Setting up an account takes less than 1 minute"
      />
      <FormBody>
        <Switch
          items={[
            { label: "Login", url: "login" },
            { label: "Signup", url: "signup" },
          ]}
          backgroundColor="bg-tertiary"
        />
        <Form
          fields={fields}
          redirectUrl="/dashboard/exchange/buy"
          endpoint="/api/register"
          afterSubmit={afterSubmit}
        />

        {/* <FormFooter>
          <ExternalLogins />
        </FormFooter> */}
      </FormBody>
    </FormContainer>
  );
};

export default SignupForm;
