import Link from "next/link";

interface Props {
  link?: string;
  buttonText: string;
  className?: string;
}

const MainButton: React.FC<Props> = ({ link, buttonText, className }) => {
  return (
    <Link href={link ? link : "#"}>
      <button
        className={`text-white px-4 py-1  font-semibold  rounded-2xl bg-gradient-to-b from-[#587BF2] to-[#012B5B] ${className}`}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default MainButton;
