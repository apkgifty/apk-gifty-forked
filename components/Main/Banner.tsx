import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="w-full py-[75px] flex justify-center items-center text-white bg-cover bg-no-repeat bg-center relative"
      // style={{
      //   backgroundImage:
      //     "url(https://s3-alpha-sig.figma.com/img/b253/27be/0b16afa14396c2834f6b3caf50da18a5?Expires=1691971200&Signature=QOyS6pyyAnBmu8KeQONH5XyHhWsBZIRpLVsAbfPuPWM-u4HNdJkfw73o~k2PQqaB367RF3Ww4GhCIBroDKGcxE5JwPvC~Zp5ID~XXM-uz5bosLP12VMZ3QaKbAzN4~f6f6VdEyttOu48G~LBU-1SqsiqRWTIbq~DjLOgON0tqRD134X9pKKJQw7kvZQXDHBFydIbdI6C7VhGPA-OIaLeUm7KgCJUEMNKxTc7PzjIIkNVgwBbpFczCvlih2d8tcKrpP9F52MLVjOhWwP8hg~OlcyH3B0kjebGFKVPEwUjRMG1ZXlNlFf8nq8pXGtC4Vlf6Eq0O1-fSqkbk1f5D9UbcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
      // }}
    >
      <Image
        src={"/images/aboutbanner.webp"}
        fill
        alt="apkxchange about banner image"
      />
      <p className="text-3xl max-w-[250px]  lg:text-6xl font-bold lg:max-w-md text-center z-10">
        Crypto Trading Made Easy
      </p>
    </div>
  );
};

export default Banner;
