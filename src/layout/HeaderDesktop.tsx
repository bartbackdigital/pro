import React from "react";
import Link from "next/link";
import Image from "next/image";
import OrangeButton from "@/components/OrangeButton";
function HeaderDesktop() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 lg:block hidden">
      <nav className=" font-bold font-heading text-sm uppercase text-[#313131] tracking-wide pt-5 flex justify-between">
        <div className=" flex justify-between space-x-10 items-center">
          <Link rel="stylesheet" href="">
            Home
          </Link>
          <Link rel="stylesheet" href="">
            Onze Mogelijkheden
          </Link>
          <Link rel="stylesheet" href="">
            Waardebepaling
          </Link>
          <Image
            src="/images/proranje-vastgoed-logo.jpg"
            alt="PRoranje vastgoed"
            width={130}
            height={70}
          />
          <Link rel="stylesheet" href="">
            Over Ons
          </Link>
          <Link rel="stylesheet" href="">
            Contact
          </Link>
        </div>
        <div>
          <OrangeButton>Gratis Advies</OrangeButton>
        </div>
      </nav>
    </div>
  );
}

export default HeaderDesktop;
