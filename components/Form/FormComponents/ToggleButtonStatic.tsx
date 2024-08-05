import Link from "next/link";

interface Props {
  color: string;
  title: string;
  slug: string;
  handleSwitch: any;
  canChange: boolean;
}

const ToggleButton: React.FC<Props> = ({
  color,
  title,
  handleSwitch,
  slug,
  canChange,
}) => {
  return (
    <button
      className={`px-4 py-2 text-xs rounded-xl transition-colors duration-300 ${color} lg:text-sm`}
      onClick={() => handleSwitch(slug)}
      disabled={!canChange}
    >
      {title}
    </button>
  );
};

export default ToggleButton;
