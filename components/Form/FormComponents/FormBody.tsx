interface Props {
  children: React.ReactNode;
}

const FormBody: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 mt-8 px-2 lg:px-14">{children}</div>
  );
};

export default FormBody;
