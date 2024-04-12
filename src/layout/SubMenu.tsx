import React, { useState } from "react";
import Link from "next/link";
import { SubMenuItem } from "../types/types";
import ThirdLevelMenu from "./ThirdLevelMenu"; // Import the new component

interface SubMenuProps {
  menuItems: SubMenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="absolute top-[76px] hidden group-hover:block bg-[#2e3e5e] p-2 font-normal font-body capitalize min-w-[220px]">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative text-white hover:bg-[#3e4e6e]"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {item.href ? (
            <Link
              href={item.href}
              passHref
              className="block px-3 py-2 whitespace-no-wrap"
            >
              {item.title}
            </Link>
          ) : (
            <span className="block px-3 py-2 whitespace-no-wrap">
              {item.title}
            </span>
          )}
          {/* Render the ThirdLevelMenu if the item has a subMenu */}
          {item.subMenu && activeIndex === index && (
            <ThirdLevelMenu menuItems={item.subMenu} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
