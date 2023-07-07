interface Props {
  children: React.ReactNode;
}

const FormFooter: React.FC<Props> = ({ children }) => {
  return <div className="px-20 mt-6 ">{children}</div>;
};

export default FormFooter;
