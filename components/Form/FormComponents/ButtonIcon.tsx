import { motion } from "framer-motion";

const ButtonIcon = () => {
  return (
    <motion.button
      type="button"
      className="w-full rounded-lg bg-[#587BF2] relative text-sm px-2 py-2  flex justify-center items-center lg:py-3 lg:text-base hover:bg-[#4366d7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Continue
      <div className="w-[28px] h-[28px]  lg:w-[35px] lg:h-[35px] rounded-lg bg-[#7995f5] flex justify-center items-center absolute right-0 mr-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clipPath="url(#clip0_101_4549)">
            <path
              d="M1.10722 8.63995L10.7612 8.63996L6.99123 12.3799C6.77927 12.5975 6.66064 12.8892 6.66064 13.1929C6.66064 13.4967 6.77927 13.7884 6.99123 14.006C7.20591 14.218 7.49549 14.3369 7.79723 14.3369C8.09896 14.3369 8.38855 14.218 8.60323 14.006L14.3352 8.30597C14.5403 8.08788 14.6544 7.79983 14.6544 7.50049C14.6544 7.20115 14.5403 6.91304 14.3352 6.69495L8.60323 0.994936C8.38855 0.782905 8.09896 0.664064 7.79723 0.664064C7.49549 0.664064 7.20591 0.782905 6.99123 0.994935C6.78409 1.21066 6.66498 1.49601 6.65723 1.79498C6.66017 2.09673 6.77988 2.38557 6.99123 2.60095L10.7612 6.35596L1.10722 6.35596C0.810591 6.36474 0.52905 6.48873 0.322336 6.70166C0.115621 6.91459 1.24791e-06 7.1997 1.19602e-06 7.49646C1.14414e-06 7.79322 0.115621 8.07833 0.322335 8.29126C0.52905 8.50419 0.810591 8.62818 1.10722 8.63696L1.10722 8.63995Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_4549">
              <rect
                width="14.4018"
                height="13.674"
                fill="white"
                transform="matrix(1 1.78296e-07 1.71461e-07 -1 0.0859375 14.3369)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </motion.button>
  );
};

export default ButtonIcon;
