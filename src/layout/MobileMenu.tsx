// components/MobileMenu.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menuItemsBeforeLogo, menuItemsAfterLogo } from "../data/menuItems"; // Ensure the path is correct
import { MenuItem } from "../types/MenuTypes"; // Ensure the path is correct
import Image from "next/image";
interface Props {
  closeMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({ closeMenu }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true);
    // This effect clean-up function helps in managing the overlay's visibility state efficiently
    return () => setShowOverlay(false);
  }, []);

  const renderMenuItem = (item: MenuItem, level = 0) => (
    <div key={item.title}>
      <div
        className={`flex justify-between items-center py-2 px-${4 + level * 2}`}
      >
        {item.href ? (
          <Link
            href={item.href}
            className="text-defaultText hover:underline"
            onClick={closeMenu}
          >
            {item.title}
          </Link>
        ) : (
          <span>{item.title}</span>
        )}
        {item.subMenu && (
          <span className="cursor-pointer text-defaultText">▼</span>
        )}
      </div>
      {item.subMenu && (
        <div className="pl-4">
          {item.subMenu.map((subItem) => renderMenuItem(subItem, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-40 ${
        showOverlay ? "bg-black bg-opacity-50" : "bg-transparent"
      } transition-opacity duration-300`}
    >
      <div
        className="absolute right-0 font-heading top-0 text-defaultText bottom-0 bg-white w-[300px] p-5 overflow-y-auto transform transition-transform duration-300"
        style={{
          transform: showOverlay ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center mb-10">
          <button onClick={closeMenu} className="text-2xl text-bl">
            X
          </button>
          <div className="pl-5">
            <Image
              src="/images/proranje-vastgoed-logo.jpg"
              alt="PRoranje Vastgoed"
              width={130}
              height={70}
            />
          </div>
        </div>
        {menuItemsBeforeLogo.map((item) => renderMenuItem(item))}
        {menuItemsAfterLogo.map((item) => renderMenuItem(item))}
      </div>
    </div>
  );
};

export default MobileMenu;
