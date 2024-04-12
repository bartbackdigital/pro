// data/menuItems.ts
import { MenuItem } from "../types/MenuTypes"; // Adjust the import path as necessary

export const menuItemsBeforeLogo: MenuItem[] = [
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
          { title: "Studentenhuis verkopen", href: "/studentenhuis-verkopen" },
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

export const menuItemsAfterLogo: MenuItem[] = [
  { title: "Over Ons", href: "/over-ons" },
  { title: "Contact", href: "/contact" },
];
