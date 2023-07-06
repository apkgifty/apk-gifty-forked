import AppLayout from "../Layout/AppLayout";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-4 bg-secondary text-white">
      <AppLayout>
        <Navigation />
      </AppLayout>
    </div>
  );
};

export default Navbar;
