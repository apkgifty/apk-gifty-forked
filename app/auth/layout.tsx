import AppLayout from "@/components/Layout/AppLayout";
import Navbar from "@/components/Nav/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full px-5 py-4 bg-[#12181f] text-white">
        <Navbar />
      </div>
      <div className="w-full bg-[#161D26] flex flex-1 text-white">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default Layout;
