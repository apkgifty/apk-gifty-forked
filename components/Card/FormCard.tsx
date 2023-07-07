interface Props {
  children: React.ReactNode;
}

const FormCard: React.FC<Props> = ({ children }) => {
  return <div className="px-6 py-6 bg-primary rounded-lg">{children}</div>;
};

export default FormCard;
