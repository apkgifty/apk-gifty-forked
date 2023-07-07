interface Props {
  children: React.ReactNode;
}

const FormContainer: React.FC<Props> = ({ children }) => {
  return <div className="bg-secondary rounded-lg  py-10">{children}</div>;
};

export default FormContainer;
