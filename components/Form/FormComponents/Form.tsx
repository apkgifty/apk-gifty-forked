import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

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
    watch,
    formState: { errors },
  } = useForm();

  const { data, loading, error, submitRequest } = useAuth();

  const onSubmit = (data: any) => submitRequest(data, endpoint);

  useEffect(() => {
    console.log(data);
    afterSubmit(data);
  }, [data]);

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <FormInput
            placeholder={field.placeholder}
            type={field.type}
            icon={field.icon}
            name={field.name}
            config={field.config}
            key={field.name}
            register={register}
            errors={errors}
            className="bg-tertiary"
          />
        ))}
        {pathName === "/signup" && (
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "
              {...register("agree", { required: false })}
            />

            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium text-white"
            >
              I agree to the
              <Link
                href={"/terms-of-service"}
                className="text-blue-600  hover:underline"
              >
                {" "}
                Terms and Conditions
              </Link>
              .
            </label>
          </div>
        )}
        <ButtonIcon icon={<NextSvg />} type="submit" loading={loading} />
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
