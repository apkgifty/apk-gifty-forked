interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isSelected: boolean;
}

const SettingsMenuItem: React.FC<Props> = ({
  icon,
  title,
  subtitle,
  isSelected,
}) => {
  return (
    <div className="flex gap-x-3 items-center cursor-pointer">
      <div
        className={`w-12 h-12  rounded-lg flex justify-center items-center ${
          isSelected ? "bg-appviolet" : "bg-primary"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default SettingsMenuItem;
