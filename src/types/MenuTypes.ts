// types/MenuTypes.ts
export interface SubMenuItem {
  title: string;
  href: string;
  subMenu?: SubMenuItem[];
}

export interface MenuItem {
  title: string;
  href?: string;
  subMenu?: SubMenuItem[];
}
