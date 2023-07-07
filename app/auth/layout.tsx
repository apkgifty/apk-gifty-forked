import AppLayout from "@/components/Layout/AppLayout";
import Navbar from "@/components/Nav/Navbar";
import Card from "@/components/Card/Card";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full bg-tertiary flex  flex-col flex-1 justify-center items-center text-white">
        <div className="w-full lg:max-w-5xl">
          <Card>
            <div className="w-full flex gap-2 ">
              <div className="flex-1 ">{children}</div>
              <div className="flex-1 bg-transparent hidden lg:flex">images</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
