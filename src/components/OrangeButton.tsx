import React from "react";
import Link from "next/link";

interface OrangeButtonProps {
  href?: string;
  children: React.ReactNode;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ href, children }) => {
  // TailwindCSS styles that mimic your original CSS as closely as possible
  const baseStyles = `
    inline-block cursor-pointer select-none align-top m-0 text-center text-base relative  
    py-2.5 px-4 bg-[#ee6556] text-white border border-[#ea6953] rounded shadow-[0_3px_1px_#b64a38] 
    transition-all duration-200 outline-none leading-none text-body
  `;

  const hoverStyles = `
    hover:bg-[#ba463a] hover:shadow-[0_3px_1px_#ba463a] hover:text-white
  `;

  // Combined base and hover styles
  const combinedStyles = `${baseStyles} ${hoverStyles}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={combinedStyles}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="button" className={combinedStyles}>
      {children}
    </button>
  );
};

export default OrangeButton;
