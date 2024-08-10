import MaxWidthWrapper from "@/components/mww";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="z-[100] sticky backdrop-blur-md h-14 inset-x-0 top-0 w-full transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/*left*/}
          <div className="grid grid-cols-3 gap-4">
            <Link href="/">
              <FaYoutube className="text-3xl text-white cursor-pointer" />
            </Link>
            <Link href="/">
              <FaXTwitter className="text-3xl text-white cursor-pointer" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-3xl text-white cursor-pointer" />
            </Link>
          </div>

          {/*right*/}
          <div className="grid grid-cols-2 items-end justify-end gap-4">
            <Link href="#FAQ" className="text-md text-white cursor-pointer">
              F&Q
            </Link>
            <Link href="#PRICING" className="text-md text-white cursor-pointer">
              Pricing
            </Link>
          </div>
        </div>
        <div className="w-full h-px border-t-2 border-zinc-50" />
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
