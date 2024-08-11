import MaxWidthWrapper from "@/components/mww";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="bg-black text-white py-4">
        <hr />
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 w-full space-y-4 sm:space-y-0">
          <div className="items-center">
            <h4 className="text-md text-center">©2024 howtoai</h4>
          </div>
          <Link href="https://portfolio-aftab.vercel.app/" target="_blank">
            Made by Aftab
          </Link>
          <div className="flex pl-6 sm:pl-0 gap-x-6 justify-center sm:justify-end pr-6">
            <Link href="/">
              <FaYoutube size={25} />
            </Link>
            <Link href="/">
              <FaXTwitter size={25} />
            </Link>
            <Link href="/">
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
