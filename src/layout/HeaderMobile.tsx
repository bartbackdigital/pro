// components/HeaderMobile.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Adjust the import path as necessary
import HamburgerIcon from "@/components/HamburgerIcon";
import { menuItemsBeforeLogo, menuItemsAfterLogo } from "../data/menuItems"; // Adjust the import path as necessary

const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setIsDarkMode(matchDarkMode.matches);
    };

    matchDarkMode.addEventListener("change", handleChange);
    return () => matchDarkMode.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative lg:hidden">
      <div className="shadow-custom bg-white py-7 px-5 flex justify-between items-center ">
        <Image
          src="/images/proranje-vastgoed-logo.jpg"
          alt="PRoranje Vastgoed"
          width={130}
          height={70}
          priority
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-7 top-7 z-50 md:hidden"
        >
          <HamburgerIcon
            isOpen={isMenuOpen}
            color={isDarkMode ? "white" : "black"}
          />
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
