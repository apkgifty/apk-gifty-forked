import FormInput from "./FormInput";
import ButtonIcon from "./ButtonIcon";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Fields } from "@/types/formTypes";

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
  return (
    <form className="flex flex-col gap-4" onSubmit={() => {}}>
      {fields.map((field) => (
        <FormInput
          placeholder={field.placeholder}
          type={field.type}
          icon={field.icon}
          name={field.name}
          required={field.required}
          key={field.name}
        />
      ))}
      {/* <FormInput
        placeholder="Email"
        type="text"
        icon={<AlternateEmailIcon fontSize="small" />}
      />
      <FormInput
        placeholder="Password"
        type="Password"
        icon={<LockOpenIcon fontSize="small" />}
      /> */}

      <ButtonIcon />
    </form>
  );
};

export default Form;
