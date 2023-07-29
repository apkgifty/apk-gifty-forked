import { useForm, SubmitHandler } from "react-hook-form";

import FormInput from "./FormInput";
import ButtonIcon from "./ButtonIcon";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Fields } from "@/types/formTypes";
import NextSvg from "@/components/UI/SvgIcons/NextSvg";
import { useAuth } from "@/hooks/useAuth";
interface Props {
  fields: Fields[];
}

// interface Fields {
//   placeholder: string;
//   type: string;
//   icon: React.ReactNode;
//   name: string;
// }

const Form: React.FC<Props> = ({ fields }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data, loading, error, submitRequest } = useAuth();
  console.log(loading);
  console.log(data);
  console.log(error);

  const onSubmit = (data: any) => submitRequest(data, "/api/register");
  return (
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
        />
      ))}

      <ButtonIcon icon={<NextSvg />} type="submit" />
    </form>
  );
};

export default Form;
