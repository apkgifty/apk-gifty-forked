"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ButtonIcon from "./FormComponents/ButtonIcon";
import ExternalLogins from "./FormComponents/ExternalLogins";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Switch from "./FormComponents/Switch";
import FormHeader from "./FormComponents/FormHeader";
import FormBody from "./FormComponents/FormBody";
import FormFooter from "./FormComponents/FormFooter";
import FormContainer from "./FormComponents/FormContainer";
import { Fields } from "@/types/formTypes";
import Form from "./FormComponents/Form";
import EmailAtSvg from "../UI/SvgIcons/EmailAtSvg";
import ReferralSvg from "../UI/SvgIcons/ReferralSvg";
import Flag from "react-world-flags";
import countries from "@/utils/countriesData";

const countriesWithFlags = countries.map((country) => ({
  ...country,
  flag: <Flag code={country.iso} />,
}));

const regex: RegExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const fields: Fields[] = [
  {
    type: "text",
    placeholder: "Username",
    icon: <PersonOutlineIcon />,
    config: {
      required: { value: true, message: "Username is required" },
    },

    name: "firstname",
  },
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
  {
    type: "password",
    placeholder: "Password",
    icon: <LockOpenIcon />,
    config: {
      required: { value: true, message: "Password is required" },
      minLength: { value: 8, message: "Minimum 8 characters" },
    },
    name: "password",
  },
  {
    type: "select",
    placeholder: "Referral (Optional)",
    icon: <ReferralSvg />,
    config: {
      required: { value: true, message: "Country is required" },
    },

    name: "country",
    selectOptions: countriesWithFlags,
  },
  {
    type: "number",
    placeholder: "+233 00 000 0000",
    icon: <LocalPhoneIcon />,
    config: {
      required: { value: true, message: "Phone number is required" },
      minLength: { value: 10, message: "Minimum 10 characters" },
      maxLength: { value: 10, message: "Maximum 10 characters" },
    },

    name: "phone",
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
  {
    type: "checkbox",
    placeholder: "",
    name: "agree",
    icon: "",
    config: {
      required: {
        value: true,
        message: "Please agree to our terms to continue",
      },
    },
  },
];

const SignupForm = () => {
  const [cookies, setCookie] = useCookies(["access"]);
  const router = useRouter();

  const afterSubmit = (data: any) => {
    if (data?.token) {
      const expiresInSeconds = 3 * 60 * 60;
      setCookie("access", data.token, { maxAge: expiresInSeconds });

      if (data.user.email_verified_at !== null) {
        router.push("/dashboard/exchange/buy");
      } else {
        router.push("/email-verification");
      }
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
            { label: "Login", url: "login", slug: "login" },
            { label: "Signup", url: "signup", slug: "signup" },
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
