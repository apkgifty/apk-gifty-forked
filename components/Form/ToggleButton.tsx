interface Props {
  color: string;
  title: string;
  handleSwitch: any;
}

const ToggleButton: React.FC<Props> = ({ color, title, handleSwitch }) => {
  return (
    <button
      className={`px-4 py-2 text-xs rounded-xl ${color}`}
      onClick={() => handleSwitch(title.toLowerCase())}
    >
      {title}
    </button>
  );
};

export default ToggleButton;
