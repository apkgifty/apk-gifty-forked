import React from "react";
import Card from "@/components/Card/Card";
import Signup from "@/components/Form/Signup";

const LoginPage = () => {
  return (
    <div className="w-full lg:max-w-4xl">
      <Card>
        <div className="w-full flex gap-2 ">
          <div className="flex-1 ">
            <Signup />
          </div>
          <div className="flex-1 bg-transparent">images</div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
