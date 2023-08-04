import Link from "next/link";
import MainButton from "./MainButton";

interface Props {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  link?: string;
  icon?: React.ReactNode;
}

const AboutBlock: React.FC<Props> = ({
  children,
  title,
  buttonText,
  link,
  icon,
}) => {
  return (
    <div className="text-white w-full flex-1">
      <div className="flex gap-4 items-center mb-3">
        {icon && <span>{icon}</span>}
        <h4 className="text-base lg:text-xl font-bold">{title}</h4>
      </div>
      {children}
      {buttonText && (
        <div className="py-2">
          <MainButton
            buttonText={buttonText}
            link={link}
            className="text-sm lg:text-base"
          />
        </div>
      )}
    </div>
  );
};

export default AboutBlock;
