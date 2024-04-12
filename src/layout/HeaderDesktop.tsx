import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubMenu from "./SubMenu";
import OrangeButton from "@/components/OrangeButton";

interface SubMenuItem {
  title: string;
  href: string;
  subMenu?: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href?: string;
  subMenu?: SubMenuItem[];
}
const HeaderDesktop: React.FC = () => {
  const menuItemsBeforeLogo: MenuItem[] = [
    { title: "Home", href: "/" },
    {
      title: "Onze Mogelijkheden",
      href: "#",
      subMenu: [
        {
          title: "Direct verkopen",
          href: "/huis-snel-verkopen",
          subMenu: [
            { title: "Appartement verkopen", href: "/appartement-verkopen" },
            { title: "Bedrijfspand verkopen", href: "/bedrijfspand-verkopen" },
            {
              title: "Beleggingspand verkopen",
              href: "/beleggingspand-verkopen",
            },
            { title: "Executieverkoop", href: "/executieverkoop" },
            { title: "Geërfd huis verkopen", href: "/geerfd-huis-verkopen" },
            { title: "Halalhypotheek", href: "/halalhypotheek" },
            {
              title: "Studentenhuis verkopen",
              href: "/studentenhuis-verkopen",
            },
            { title: "Pand verkopen", href: "/pand-verkopen" },
            { title: "Verhuurde woning verkopen", href: "/verhuurd-verkopen" },
          ],
        },
        { title: "Verkoop en terughuren", href: "/verkoop-terughuren" },
        { title: "Opknappen en verkopen", href: "/opknappen-en-verkopen" },
        { title: "Beleggingspand kopen", href: "/beleggingspand-kopen" },
      ],
    },
    { title: "Waardebepaling", href: "/waardebepaling" },
  ];

  const menuItemsAfterLogo: MenuItem[] = [
    { title: "Over Ons", href: "/over-ons" },
    { title: "Contact", href: "/contact" },
  ];
  // Helper function to render menu items with or without hrefs
  const renderMenuItem = (item: MenuItem, index: number) => (
    <div key={index} className="relative group tracking-[0.5px] pb-7 pt-7">
      {item.href ? (
        <Link href={item.href} passHref>
          <span className="cursor-pointer">{item.title}</span>
        </Link>
      ) : (
        <span>{item.title}</span>
      )}
      {item.subMenu && <SubMenu menuItems={item.subMenu} />}
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto px-5 lg:flex hidden items-center justify-between font-heading font-bold uppercase text-sm">
      <div className="flex justify-between items-center w-full">
        <nav className="lg:pl-3 xl:pl-12">
          <div className="flex items-center justify-between space-x-8">
            <div className="flex items-center space-x-8">
              {menuItemsBeforeLogo.map(renderMenuItem)}
            </div>

            <Image
              src="/images/proranje-vastgoed-logo.jpg"
              alt="PRoranje Vastgoed"
              width={130}
              height={70}
              priority
            />

            <div className="flex items-center  space-x-8">
              {menuItemsAfterLogo.map(renderMenuItem)}
            </div>
          </div>
        </nav>
        <OrangeButton href="/gratis-advies">Gratis Advies</OrangeButton>
      </div>
    </div>
  );
};

export default HeaderDesktop;
