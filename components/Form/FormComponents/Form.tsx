import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";

import FormInput from "./FormInput";
import ButtonIcon from "./ButtonIcon";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Fields } from "@/types/formTypes";
import NextSvg from "@/components/UI/SvgIcons/NextSvg";
import { useAuth } from "@/hooks/useAuth";
import { Snackbar, Alert } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ForgotPasswordLink from "./ForgotPasswordLink";
import TermsCheckBox from "./TermsCheckBox";
import ReCaptchaWrapper from "@/components/ReCaptcha/ReCaptchaWrapper";

interface Props {
  fields: Fields[];
  redirectUrl: string;
  endpoint: string;
  afterSubmit?: any;
}

// interface Fields {
//   placeholder: string;
//   type: string;
//   icon: React.ReactNode;
//   name: string;
// }

const Form: React.FC<Props> = ({
  fields,
  redirectUrl,
  endpoint,
  afterSubmit,
}) => {
  const pathName = usePathname();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const { data, loading, error, submitRequest } = useAuth();

  const [isBot, setIsBot] = useState(true);

  const onCaptchaSuccess = () => {
    setIsBot(false);
  };

  const onCaptchaExpired = () => {
    setIsBot(true);
  };

  const onSubmit = (data: any) => {
    if (isBot) return;
    submitRequest(data, endpoint);
  };

  useEffect(() => {
    // console.log(data);
    afterSubmit(data);
  }, [data]);

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) =>
          field.type === "checkbox" ? (
            <TermsCheckBox
              register={register}
              config={field.config}
              name={field.name}
              key={field.name}
              errors={errors}
            />
          ) : (
            <FormInput
              placeholder={field.placeholder}
              type={field.type}
              icon={field.icon}
              name={field.name}
              config={field.config}
              key={field.name}
              register={register}
              errors={errors}
              watch={watch}
              className="bg-tertiary"
              selectOptions={field.selectOptions}
            />
          )
        )}
        {/* {pathName === "/signup" && <TermsCheckBox register={register} />} */}
        {pathName === "/login" && <ForgotPasswordLink />}
        <ReCaptchaWrapper
          onChange={onCaptchaSuccess}
          onExpired={onCaptchaExpired}
        />
        <ButtonIcon
          icon={<NextSvg />}
          type="submit"
          loading={loading}
          isBot={isBot}
        />
      </form>
      {error && (
        <Snackbar
          open={error === null ? false : true}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity="error">{error?.message}</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Form;
