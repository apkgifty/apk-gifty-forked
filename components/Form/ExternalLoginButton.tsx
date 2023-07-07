interface Props {
  iconUrl: string;
}

const ExternalLoginButton: React.FC<Props> = ({ iconUrl }) => {
  return (
    <div className="flex px-3 py-3 bg-tertiary rounded-xl ">
      <div className="w-7">
        <img src={iconUrl} />
      </div>
    </div>
  );
};

export default ExternalLoginButton;
