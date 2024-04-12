import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

function Header() {
  return (
    <header>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}

export default Header;
