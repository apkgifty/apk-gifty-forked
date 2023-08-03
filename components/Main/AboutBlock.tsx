import Link from "next/link";

interface Props {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  link?: string;
}

const AboutBlock: React.FC<Props> = ({ children, title, buttonText, link }) => {
  return (
    <div className="text-white w-full flex-1">
      <h4 className="text-xl font-bold">{title}</h4>
      {children}
      {buttonText && (
        <div className="py-2">
          <Link href={link ? link : "#"}>
            <button className="text-white px-4 py-1 text-base font-semibold  rounded-2xl bg-gradient-to-b from-[#587BF2] to-[#012B5B]">
              {buttonText}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AboutBlock;
