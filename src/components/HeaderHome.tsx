import React from "react";
import OrangeButton from "./OrangeButton";
import Image from "next/image";
import GreenCheck from "@/icons/GreenCheck";

function HeaderHome() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 min-h-[300px] overflow-hidden">
        <Image
          layout="fill" // This will make the image cover the available space
          objectFit="cover" // This will ensure the image covers the div while maintaining aspect ratio
          alt="Beleggingspand of huis verkopen"
          src="https://cloud.proranje.nl/2021/02/huis-verkopen-amsterdam-1-scaled.jpg"
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center py-10 px-10 md:px-20 relative z-10">
        <div className="md:max-w-[500px] bg-opacity-65 bg-[#e6e6e6] p-10 text-darkGray">
          <h1 className="text-[31px] font-bold leading-[1.2] mt-0 mb-5 pt-10 w-[80%]">
            Uw huis of beleggingspand verkopen?
          </h1>

          <p className="mb-10">
            Niet via de traditionele onzekere en omslachtige manier, maar via
            Proranje. Bij ons verkoopt u gemakkelijk, kosteloos en discreet uw
            onroerend goed. Wij worden ondersteund door vermogende investeerders
            waarbij we samen investeren in alle soorten onroerend goed. Of het
            nou woningen zijn, winkels of kantoren. Wij zijn actief in heel
            Nederland.
          </p>
          <OrangeButton>Vraag een vrijblijvend bod aan</OrangeButton>
        </div>
      </div>
      <div className="bg-primary z-20 relative text-white">
        <div className="max-w-screen-xl px-6 flex-col mx-auto flex items-center py-5 relative z-10">
          <div className="flex w-full flex-col md:flex-row space-y-3 md:space-y-0 justify-between mb-3">
            <div className="flex items-center flex-1">
              <GreenCheck className="mr-3" />
              <span>Geen (verborgen) kosten</span>
            </div>
            <div className="flex items-center flex-1">
              <GreenCheck className="mr-3" />
              <span>Direct zekerheid</span>
            </div>
            <div className="flex items-center flex-1">
              <GreenCheck className="mr-3" />
              <span>Leeg en verhuurde woningen</span>
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row space-y-3 md:space-y-0 justify-between mb-3">
            <div className="flex items-center flex-1">
              <GreenCheck className="mr-3" />
              <span>Actief in heel Nederland</span>
            </div>
            <div className="flex items-center flex-1">
              <GreenCheck className="mr-3" />
              <span>Hoge prijzen</span>
            </div>
            <div className="flex items-center  flex-1">
              <GreenCheck className="mr-3" />
              <span>Snelle betaling mogelijk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderHome;
