import Link from "next/link";

interface Props {
  color: string;
  title: string;
  url: string;
  handleSwitch: any;
}

const ToggleButton: React.FC<Props> = ({ color, title, handleSwitch, url }) => {
  return (
    <Link href={url}>
      <button
        className={`px-4 py-2 text-xs rounded-xl ${color} lg:text-sm`}
        onClick={() => handleSwitch(title.toLowerCase())}
      >
        {title}
      </button>
    </Link>
  );
};

export default ToggleButton;
