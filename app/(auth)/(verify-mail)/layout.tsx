import "../../globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html>
      <body className="w-full h-screen bg-tertiary flex justify-center items-center">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
