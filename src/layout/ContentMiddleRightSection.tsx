import React from "react";
import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";
import GreenCheck from "@/icons/GreenCheck";
import CtaButton from "@/components/CtaButton";

function ContentMiddleRightSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 min-h-[300px] overflow-hidden">
        <Image
          layout="fill" // This will make the image cover the available space
          objectFit="cover" // This will ensure the image covers the div while maintaining aspect ratio
          alt="Beleggingspand of huis verkopen"
          src="/images/ferdinant-bolstraat-verkopen-terug-huren.jpeg"
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-end items-center py-20 px-10 md:px-20 relative z-10">
        <div className="md:max-w-[500px] bg-opacity-70 bg-[#fff] p-12 text-darkGray">
          <h1
            className="text-[31px] font-bold leading-[1.2] mt-0 mb-5 
        w-[80%]"
          >
            Ons onderscheidend vermogen
          </h1>

          <p className="mb-10">
            Elk pand heeft een andere achtergrond. Zo kunnen panden
            achterstallig onderhoud hebben of (sociaal) verhuurd zijn. Voor ons
            zijn dat geen belemmeringen, want wij denken altijd in mogelijkheden
            en gaan oplossingsgericht te werk. Wij worden gefinancierd door
            vermogende internationale investeerders met een lange termijn visie.
            Verder werken wij al jaren samen met een vaste poule aan
            gekwalificeerde werklieden. Hierdoor zijn wij in staat om
            hoogwaardig maar ook betaalbaar te renoveren. Deze combinatie zorgt
            ervoor dat wij vaak marktconforme prijzen kunnen bieden met veel
            extra voordelen.
          </p>
          <CtaButton>Direct contact opnemen</CtaButton>
        </div>
      </div>
    </section>
  );
}

export default ContentMiddleRightSection;
