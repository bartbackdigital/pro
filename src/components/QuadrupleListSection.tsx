import GreenCheck from "@/icons/GreenCheck";
import React from "react";
import RegularButton from "./RegularButton";

// Data structure for each section
const listSections = [
  {
    title: "Huis direct verkopen",
    items: [
      "Direct geld op uw rekening",
      "Makelaars- en notariskosten niet aanwezig",
      "Nooit ontbindende voorwaarden",
      "Geen hysterische markt en pottenkijkers",
    ],
    moreInfo: "Meer informatie",
  },
  {
    title: "Verkopen en terughuren",
    items: [
      "Meteen het geld op uw rekening",
      "Verhoogd besteedbaar inkomen",
      "Relatief lage huurprijs voor zolang u wenst",
      "Kosteloos en deskundig onderhoud door ons",
    ],
    moreInfo: "Meer informatie",
  },
  {
    title: "Verhuurd verkopen",
    items: [
      "Minimale rendementseisen",
      "Discreet en efficiënte verkoop",
      "Overname van huurcontract(en)",
      "Snel geld op uw rekening",
    ],
    moreInfo: "Meer informatie",
  },
  {
    title: "Opknappen en verkopen",
    items: [
      "Geen gedoe en stress",
      "Gegarandeerde opbrengst met winstdeling",
      "Profiteren van onze ervaring",
      "Meteen geld op uw rekening",
    ],
    moreInfo: "Meer informatie",
  },
];

function QuadrupleListSection() {
  return (
    <section className="relative w-full mt-10">
      <div className="bg-primary py-10 text-white text-[30px] font-bold font-nunito">
        <div className="max-w-screen-xl px-5 mx-auto">
          <h2>Onze Mogelijkheden</h2>
          <div className="w-[100px] border-b-[3px] mt-3 border-b-primary-50"></div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-16 relative block pb-40">
        <div className="flex space-x-5">
          {listSections.map((section) => (
            <div key={section.title} className="pr-10 flex-1">
              <h3 className="text-textGray text-[20px] font-medium">
                {section.title}
              </h3>
              <ul className="flex space-y-3 flex-col mt-5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="w-5 h-5">
                      <GreenCheck className="block relative" />
                    </div>
                    <span className="ml-4">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-14">
                <RegularButton>{section.moreInfo}</RegularButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuadrupleListSection;
