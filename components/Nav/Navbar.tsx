import { cookies } from "next/headers";

import AppLayout from "../Layout/AppLayout";
import Navigation from "./Navigation";

const Navbar = () => {
  const cookieStore = cookies();

  const isLoggedIn = cookieStore.get("access")?.name;

  return (
    <div className="w-full px-5 py-4 bg-secondary text-white">
      <AppLayout>
        <Navigation isLoggedIn={isLoggedIn} />
      </AppLayout>
    </div>
  );
};

export default Navbar;
