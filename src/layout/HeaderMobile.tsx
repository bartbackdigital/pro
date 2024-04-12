// components/HeaderMobile.tsx
import React, { useState } from "react";
import Image from "next/image";

import MobileMenu from "./MobileMenu";
import { menuItemsBeforeLogo, menuItemsAfterLogo } from "../data/menuItems"; // Adjust path as necessary
import HamburgerIcon from "@/components/HamburgerIcon";

const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative lg:hidden">
      <div className="shadow-custom bg-white py-7 px-5 flex justify-between items-center">
        <Image
          src="/images/proranje-vastgoed-logo.jpg"
          alt="PRoranje Vastgoed"
          width={130}
          height={70}
        />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerIcon />
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
