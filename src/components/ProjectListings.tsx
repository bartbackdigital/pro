import React from "react";
import Image from "next/image";

function ProjectListings() {
  return (
    <div className="grid grid-cols-3 space-x-10">
      <div className="relative">
        <div className="max-h-[200px] overflow-hidden relative">
          <Image
            src="/images/Vroesenlaan.jpg"
            width={400}
            height={200}
            alt=""
          />
          <div className="bg-primary absolute z-10 left-0 bottom-0 p-2 w-[300px] text-white">
            <h4 className="text-[18px] font-bold">Heemraadssingel</h4>
            <span>Ontwikkelpand - Rotterdam</span>
          </div>
        </div>
        <p className="py-5 text-[17px]">
          Lange termijn belegging in Amsterdam-Zuid. Grondig gerenoveerd en
          momenteel verhuurd aan starters.
        </p>
      </div>
      <div className="relative">
        <div className="max-h-[200px] overflow-hidden relative">
          <Image
            src="/images/Vroesenlaan.jpg"
            width={400}
            height={200}
            alt=""
          />
          <div className="bg-primary absolute z-10 left-0 bottom-0 p-2 w-[300px] text-white">
            <h4 className="text-[18px] font-bold">Heemraadssingel</h4>
            <span>Ontwikkelpand - Rotterdam</span>
          </div>
        </div>
        <p className="py-5 text-[17px]">
          Lange termijn belegging in Amsterdam-Zuid. Grondig gerenoveerd en
          momenteel verhuurd aan starters.
        </p>
      </div>
      <div className="relative">
        <div className="max-h-[200px] overflow-hidden relative">
          <Image
            src="/images/Vroesenlaan.jpg"
            width={400}
            height={200}
            alt=""
          />
          <div className="bg-primary absolute z-10 left-0 bottom-0 p-2 w-[300px] text-white">
            <h4 className="text-[18px] font-bold">Heemraadssingel</h4>
            <span>Ontwikkelpand - Rotterdam</span>
          </div>
        </div>
        <p className="py-5 text-[17px]">
          Lange termijn belegging in Amsterdam-Zuid. Grondig gerenoveerd en
          momenteel verhuurd aan starters.
        </p>
      </div>
    </div>
  );
}

export default ProjectListings;
