import React from "react";
import Image from "next/image";
import { assets } from "@/Assests/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-around  flex-col sm:flex-row gap-2 sm:gap-0 bg-black p-5 items-center">
        <Image
          src={assets.logo_light}
          alt="footerlogo"
          width={120}
          height={120}
        />
        <p className="flex items-center text-sm text-white">
          All right reserved. Copyright @blogging{" "}
        </p>
        <div className="flex">
          <Image src={assets.facebook_icon} alt="" width={40} height={40} />
          <Image src={assets.twitter_icon} alt="" width={40} height={40} />
          <Image src={assets.googleplus_icon} alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
