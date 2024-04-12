// types/types.ts

export interface SubMenuItem {
  title: string;
  href?: string; // Ensure this is optional if you want to allow non-linkable items
  subMenu?: SubMenuItem[];
}
export interface MenuItem {
  title: string;
  href?: string;
  subMenu?: SubMenuItem[];
}
