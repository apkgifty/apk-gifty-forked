interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return <div className="w-full md:max-w-6xl mx-auto">{children}</div>;
};

export default AppLayout;
