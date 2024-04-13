// components/HeaderMobile.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Adjust the import path as necessary
import HamburgerIcon from "@/components/HamburgerIcon";
import { menuItemsBeforeLogo, menuItemsAfterLogo } from "../data/menuItems"; // Adjust the import path as necessary
import Link from "next/link";

const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative lg:hidden uppercase text-sm">
      <div className="shadow-custom bg-white py-7 px-5 flex justify-between items-center ">
        <Link href="/">
          <Image
            src="/images/proranje-vastgoed-logo.jpg"
            alt="PRoranje Vastgoed"
            width={130}
            height={70}
            priority
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-7 top-7 z-50 lg:hidden"
        >
          <HamburgerIcon isOpen={isMenuOpen} color={"black"} />
        </button>
      </div>
      {isMenuOpen && (
        <MobileMenu
          menuItemsBeforeLogo={menuItemsBeforeLogo}
          menuItemsAfterLogo={menuItemsAfterLogo}
          closeMenu={() => setIsMenuOpen(false)}
        />
      )}
    </section>
  );
};

export default HeaderMobile;
