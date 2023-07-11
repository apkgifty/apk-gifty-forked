import TopIntro from "@/components/Dashboard/Topbar/TopIntro";
import Filterbar from "@/components/Filter/Filterbar";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TopIntro />
      <Filterbar />
      {children}
    </>
  );
};

export default layout;

// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <div className="w-full bg-candlestick bg-left bg-contain bg-no-repeat py-6 px-4 bg-secondary border-b border-gray-800 flex flex-col gap-y-2 items-center justify-center text-white">
//         <p className="text-lg font-semibold">
//           Trade Gift Cards Easily - Buy and Sell Using Your Favorite Payment
//           Methods
//         </p>
//         <p className="text-sm text-gray-400">
//           Make p2p Tether USD trades today with Zero Fees and your Preferred
//           Payment Method!
//         </p>
//       </div>
//     </main>
//   );
// }
