import GreenCheck from "@/icons/GreenCheck";
import React from "react";

function QuadrupleListSection() {
  return (
    <section className="relative w-full mt-10">
      <div className="bg-primary py-10 text-white text-[30px] font-bold font-nunito">
        <div className="max-w-screen-xl px-5 mx-auto">
          <h2>Onze Mogelijkheden</h2>
          <div className="w-[100px] border-b border-b-4 border-b-primary-50"></div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className="">
          <h3>Huis direct verkopen</h3>
          <ul>
            <li className="flex items-center ">
              <GreenCheck className="mr-3" /> Direct geld op uw rekening
            </li>
            <li className="flex items-center ">
              <GreenCheck className="mr-3" /> Makelaars- en notariskosten niet
              aanwezig
            </li>
            <li className="flex items-center ">
              <GreenCheck className="mr-3" /> Nooit ontbindende voorwaarden
            </li>
            <li className="flex items-center ">
              <GreenCheck className="mr-3" /> Geen hysterische markt en
              pottenkijkers
            </li>
          </ul>
        </div>
        <div>
          <h3>Verkopen en terughuren</h3>
        </div>
        <div>
          <h3>Verhuurd verkopen</h3>
        </div>
        <div>
          <h3>Opknappen en verkopen</h3>
        </div>
      </div>
    </section>
  );
}

export default QuadrupleListSection;
