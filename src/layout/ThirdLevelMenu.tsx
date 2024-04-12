// components/ThirdLevelMenu.tsx

import React from "react";
import Link from "next/link";
import { SubMenuItem } from "../types/types";

interface ThirdLevelMenuProps {
  menuItems: SubMenuItem[];
}

const ThirdLevelMenu: React.FC<ThirdLevelMenuProps> = ({ menuItems }: any) => {
  return (
    <div className="absolute left-full top-[-8px] bg-[#2e3e5e] p-2 min-w-[220px]">
      <ul className="font-normal font-body capitalize">
        {menuItems.map((item: any, index: any) => (
          <li key={index} className="text-white hover:bg-[#3e4e6e]">
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdLevelMenu;
