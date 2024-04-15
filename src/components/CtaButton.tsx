import React from "react";
import Link from "next/link";
import Image from "next/image";

interface OrangeButtonProps {
  href?: string;
  children: React.ReactNode;
}

const CtaButton: React.FC<OrangeButtonProps> = ({ href, children }) => {
  // TailwindCSS styles that mimic your original CSS as closely as possible
  const baseStyles = `
    inline-block cursor-pointer select-none align-top m-0 text-center font-body text-base relative  
    py-5 pl-10 pr-6 bg-[#ee6556] text-white border border-[#ea6953] rounded shadow-[0_3px_1px_#b64a38] 
    transition-all duration-200 outline-none leading-none text-body font-normal
  `;

  const hoverStyles = `
    hover:bg-[#ba463a] hover:shadow-[0_3px_1px_#ba463a] hover:text-white
  `;

  // Combined base and hover styles
  const combinedStyles = `${baseStyles} ${hoverStyles}`;

  return (
    <Link href={href ?? "#"} passHref>
      <div className={combinedStyles}>
        <div
          className="absolute left-4 top-5 animation-mover"
          style={{ width: 14, height: 14 }}
        >
          <Image
            src="/images/arrow-right.png"
            alt="Arrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {children}
      </div>
    </Link>
  );
};

export default CtaButton;
