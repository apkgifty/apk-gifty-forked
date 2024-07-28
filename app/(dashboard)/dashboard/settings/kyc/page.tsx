import React from "react";
import { cookies } from "next/headers";

import FormInput from "@/components/Form/FormComponents/FormInput";
import EditIconSvg from "@/components/UI/SvgIcons/EditIconSvg";
import KycIconSvg from "@/components/UI/SvgIcons/KycIconSvg";
import EyeIconSvg from "@/components/UI/SvgIcons/EyeIconSvg";
import EmailAtSvg from "@/components/UI/SvgIcons/EmailAtSvg";
import KYCBlocks from "@/components/kyc/KYCBlocks";
import KYC from "@/components/kyc/KYC";
import axiosInstance from "@/utils/axios";

const KYCPage = async () => {
  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("access")?.value;

  let user;

  try {
    const res = await axiosInstance.get(`${process.env.API_ENDPOINT}/profile`, {
      headers: {
        //   Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(res.data);
    user = res.data.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="w-full text-white pb-32">
      <div className="w-full flex items-center justify-between pb-6 border-b-2 border-black">
        <p className="text-base font-semibold">My Profile</p>
      </div>

      <div className="mt-10">
        <p className="text-gray-400 ">Personal Information</p>
        <div className="flex flex-wrap justify-between gap-y-4 mt-6 ">
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<KycIconSvg />}
              type="text"
              placeholder="First Name"
              name="firstname"
              className="bg-primary"
              defaultValue={user.firstname}
              readOnly
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<KycIconSvg />}
              type="text"
              placeholder="Last Name"
              name="lastname "
              className="bg-primary"
              readOnly
            />
          </div>{" "}
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<EyeIconSvg />}
              type="text"
              placeholder="Display Name"
              name="displayname"
              className="bg-primary"
              defaultValue={user.firstname}
              readOnly
            />
          </div>{" "}
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<EmailAtSvg />}
              type="text"
              placeholder="User Name"
              name="username"
              className="bg-primary"
              defaultValue={user.firstname}
              readOnly
            />
          </div>
        </div>
      </div>

      <KYC status={user?.kyc?.status} />

      <div className="w-full flex flex-col gap-y-4 justify-between items-center mt-10 py-8 border-t-2 border-black lg:flex-row lg:gap-y-0 ">
        <div className="w-full lg:w-[45%] space-y-1">
          <p className="text-gray-500 text-sm">Account created at:</p>
          <p className="font-light">Tuesday - 2022 31 July</p>
        </div>
        {/* <div className="flex flex-col w-full lg:w-[45%] gap-y-2 lg:gap-x-4 lg:gap-y-0 lg:flex-row">
          <button className="w-full text-sm px-4 py-2 bg-secondary rounded-lg">
            Cancel
          </button>
          <button className="w-full text-sm px-4 py-2 bg-appviolet rounded-lg">
            Save Changes
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default KYCPage;
