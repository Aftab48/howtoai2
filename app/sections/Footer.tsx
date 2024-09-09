import MaxWidthWrapper from "@/components/mww";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="bg-black text-white py-4 font-kanit">
        <hr />
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 w-full space-y-4 sm:space-y-0">
          <div className="items-center">
            <h4 className="text-lg text-center">©2024 howtoai</h4>
          </div>

          <div className="flex pl-6 sm:pl-0 gap-x-6 justify-center sm:justify-end pr-6">
            <Link
              href="https://www.youtube.com/channel/UCCSwbTR-seWT2cn9nVMp2Fw"
              target="_blank"
            >
              <FaYoutube
                size={30}
                className="text-3xl text-white cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/grundstromleo" target="_blank">
              <FaXTwitter
                size={30}
                className="text-3xl text-white cursor-pointer"
              />
            </Link>
            <Link href="https://www.instagram.com/howtoaiyt/" target="_blank">
              <FaInstagram
                size={30}
                className="text-3xl text-white cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
