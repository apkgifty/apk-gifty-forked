import { cookies } from "next/headers";

import FormInput from "@/components/Form/FormComponents/FormInput";
import CurrencyIconSvg from "@/components/UI/SvgIcons/CurrencyIconSvg";
import EditIconSvg from "@/components/UI/SvgIcons/EditIconSvg";
import EmailAtSvg from "@/components/UI/SvgIcons/EmailAtSvg";
import EyeIconSvg from "@/components/UI/SvgIcons/EyeIconSvg";
import KycIconSvg from "@/components/UI/SvgIcons/KycIconSvg";
import MailIconSvg from "@/components/UI/SvgIcons/MailIconSvg";
import MapIconSvg from "@/components/UI/SvgIcons/MapIconSvg";
import PhoneSvg from "@/components/UI/SvgIcons/PhoneSvg";
import Link from "next/link";

// import axiosInstance from "@/utils/axios";
import axios from "axios";

interface Props {}

const PersonalInformationPage: React.FC<Props> = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  let user;

  try {
    const res = await axios.get(`${process.env.API_ENDPOINT}/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(res.data);
    user = res.data.data;
  } catch (error) {
    console.log(error);
  }

  const date = new Date(user.created_at);
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const fullFormattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="w-full text-white pb-32">
      <div className="w-full flex items-center justify-between pb-6 border-b-2 border-black">
        <p className="text-base font-semibold">My Profile</p>
        <div className="px-3 py-2 bg-primary rounded-lg flex items-center gap-x-3 cursor-pointer">
          <span>
            <EditIconSvg />
          </span>
          <span className="text-sm lg:text-base">Edit</span>
        </div>
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

      <div className="mt-10">
        <p className="text-gray-400 ">Contact Info</p>
        <div className="flex flex-wrap justify-between gap-y-4 mt-6 ">
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<MailIconSvg />}
              type="text"
              placeholder="Email Address"
              name="email"
              className="bg-primary"
              defaultValue={user.email}
              readOnly
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<CurrencyIconSvg />}
              type="text"
              placeholder="Currency"
              name="currency"
              className="bg-primary"
              readOnly
            />
          </div>{" "}
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<MapIconSvg />}
              type="text"
              placeholder="Location"
              name="location"
              className="bg-primary"
              defaultValue={user.nationality}
              readOnly
            />
          </div>{" "}
          <div className="w-full lg:w-[45%]">
            <FormInput
              icon={<PhoneSvg />}
              type="text"
              placeholder="Phone Number"
              name="phonenumber"
              className="bg-primary"
              defaultValue={user.phone_number}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4 justify-between items-center mt-10 py-8 border-t-2 border-black lg:flex-row lg:gap-y-0 ">
        <div className="w-full lg:w-[45%] space-y-1">
          <p className="text-gray-500 text-sm">Account created at:</p>
          <p className="font-light">
            {day} - {fullFormattedDate}
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-[45%] gap-y-2 lg:gap-x-4 lg:gap-y-0 lg:flex-row">
          <button className="w-full text-sm px-4 py-2 bg-secondary rounded-lg">
            Cancel
          </button>
          <button className="w-full text-sm px-4 py-2 bg-appviolet rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-12">
        <Link href="/kyc">
          <button className="bg-red-600 text-white px-12 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm rounded-lg hover:bg-red-800">
            Delete Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInformationPage;
