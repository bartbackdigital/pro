// components/SubMenu.tsx

import React from "react";
import Link from "next/link";
import { SubMenuItem } from "../types/types";

interface SubMenuProps {
  menuItems: SubMenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ menuItems }) => {
  return (
    <ul className="absolute top-16 hidden group-hover:block bg-[#2e3e5e] p-2 font-normal font-body capitalize min-w-[220px]">
      {menuItems.map((item, index) => (
        <li key={index} className="relative text-white hover:bg-[#3e4e6e]">
          {item.href ? (
            <Link href={item.href} passHref>
              <span className="block px-3 py-2 whitespace-no-wrap cursor-pointer">
                {item.title}
              </span>
            </Link>
          ) : (
            <span className="block px-3 py-2 whitespace-no-wrap">
              {item.title}
            </span>
          )}
          {item.subMenu && (
            <div className="absolute left-full top-0 hidden group-hover:block">
              <SubMenu menuItems={item.subMenu} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
