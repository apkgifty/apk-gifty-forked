import AppLayout from "@/components/Layout/AppLayout";
import Navbar from "@/components/Nav/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full bg-tertiary flex  flex-col flex-1 justify-center items-center text-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
