import axios from "axios";
import {
  Camera,
  Calendar,
  CheckCircle,
  Mail,
  Trash,
  User,
  Users,
  ChevronRight,
} from "lucide-react";
import { cookies } from "next/headers";
import DeleteAccount from "../UI/Dialog/DeleteAccount";
import Link from "next/link";

export default async function MobileSettings() {
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
    <div className="flex flex-col min-h-screen bg-[#121620] text-white max-w-md mx-auto p-4">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center mb-4">Settings</h1>

      {/* Profile Picture */}
      <div className="flex flex-col items-center justify-center mb-8 relative">
        <div className="relative">
          <div className="w-28 h-28 rounded-full border-4 border-[#4169e1] flex items-center justify-center bg-[#1a2133]">
            <span className="text-5xl font-bold text-[#4169e1]">
              {user.firstname.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="absolute -bottom-2 right-0 bg-white p-2 rounded-full">
            <Camera className="h-5 w-5 text-black" />
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="space-y-3">
        <div className="bg-[#1a2133] rounded-lg p-4 flex items-center">
          <div className="bg-[#121620] p-3 rounded-full mr-4">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-medium">First Name</h2>
            <p className="text-gray-400">{user.firstname}</p>
          </div>
        </div>

        <div className="bg-[#1a2133] rounded-lg p-4 flex items-center">
          <div className="bg-[#121620] p-3 rounded-full mr-4">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Last Name</h2>
            <p className="text-gray-400">{user.lastname}</p>
          </div>
        </div>

        <div className="bg-[#1a2133] rounded-lg p-4 flex items-center">
          <div className="bg-[#121620] p-3 rounded-full mr-4">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Email</h2>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        <div className="bg-[#1a2133] rounded-lg p-4 flex items-center">
          <div className="bg-[#121620] p-3 rounded-full mr-4">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Date Created</h2>
            <p className="text-gray-400">
              {day}, {fullFormattedDate}
            </p>
          </div>
        </div>

        <Link
          className="bg-[#1a2133] rounded-lg p-4 flex items-center justify-between"
          href={"/kyc"}
        >
          <div className="flex items-center">
            <div className="bg-[#121620] p-3 rounded-full mr-4">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Account Verification</h2>
              <p className="text-gray-400">
                {user.kyc ? "Verified" : "Not verified"}
              </p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        <DeleteAccount email={user.email} />
      </div>
    </div>
  );
}
