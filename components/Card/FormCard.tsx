interface Props {
  children: React.ReactNode;
}

const FormCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full px-4 py-4 bg-secondary lg:bg-primary rounded-lg">
      {children}
    </div>
  );
};

export default FormCard;
