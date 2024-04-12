import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MenuItem } from "../types/MenuTypes"; // Adjust the path as necessary
import Image from "next/image";

interface Props {
  closeMenu: () => void;
  menuItemsBeforeLogo: MenuItem[];
  menuItemsAfterLogo: MenuItem[];
}

const MobileMenu: React.FC<Props> = ({
  closeMenu,
  menuItemsBeforeLogo,
  menuItemsAfterLogo,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  useEffect(() => {
    setShowOverlay(true);
    return () => setShowOverlay(false);
  }, []);

  const toggleSubMenu = (title: string) => {
    if (openMenus.includes(title)) {
      setOpenMenus(openMenus.filter((t) => t !== title));
    } else {
      const newOpenMenus = [...openMenus, title];
      if (newOpenMenus.length > 2) {
        newOpenMenus.shift();
      }
      setOpenMenus(newOpenMenus);
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0): JSX.Element => {
    const isOpen = openMenus.includes(item.title);
    return (
      <div key={item.title}>
        <div
          className={`flex justify-between font-bold font-heading items-center py-2 px-${
            4 + level * 2
          }`}
        >
          {item.subMenu ? (
            <span
              onClick={() => toggleSubMenu(item.title)}
              className="cursor-pointer text-defaultText flex-grow"
            >
              {item.title}
            </span>
          ) : (
            <Link href={item.href ?? "#"} onClick={closeMenu}>
              {item.title}
            </Link>
          )}
          {item.subMenu && (
            <span
              className="cursor-pointer text-defaultText absolute right-5"
              onClick={() => toggleSubMenu(item.title)}
            >
              {isOpen ? "▲" : "▼"}
            </span>
          )}
        </div>
        {isOpen && item.subMenu && (
          <div className="pl-4">
            {item.subMenu.map((subItem) => renderMenuItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`fixed inset-0 z-40 ${
        showOverlay ? "bg-black bg-opacity-50" : "bg-transparent"
      } transition-opacity duration-300`}
      onClick={closeMenu} // This will close the menu when the overlay is clicked.
    >
      <div
        className="absolute right-0 bold font-heading top-0 text-defaultText bottom-0 bg-white w-[300px] p-5 overflow-y-auto transform transition-transform duration-300"
        style={{
          transform: showOverlay ? "translateX(0)" : "translateX(100%)",
        }}
        onClick={(e) => e.stopPropagation()} // This prevents clicks inside the menu from propagating to the overlay.
      >
        <div className="flex justify-between items-center mb-10">
          <div className="max-w-[150px] pt-3 pl-5">
            <Image
              src="/images/proranje-vastgoed-logo.jpg"
              alt="PRoranje Vastgoed"
              width={150}
              height={70}
              layout="responsive"
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
