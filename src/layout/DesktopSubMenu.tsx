// components/SubMenu.js

import React from "react";
import Link from "next/link";

const DesktopSubMenu = ({ menuItems }: any) => {
  return (
    <ul className="absolute hidden group-hover:block bg-[#2e3e5e] right-0">
      {menuItems.map((item: any, index: any) => (
        <li key={index} className="menu-item">
          <Link
            href={item.href}
            className="block px-3 py-2 text-white hover:bg-[#3e4e6e]"
          >
            {item.title}
          </Link>
          {item.subMenu && <DesktopSubMenu menuItems={item.subMenu} />}
        </li>
      ))}
    </ul>
  );
};

export default DesktopSubMenu;
