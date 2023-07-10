interface Props {
  info: string;
}

const Badge: React.FC<Props> = ({ info }) => {
  return (
    <span className="text-xs px-1.5 py-0.5 rounded-md bg-red-600 flex justify-center items-center">
      {info}
    </span>
  );
};

export default Badge;
