import React from "react";
import StandardFormComponent from "./StandardFormComponent";

function DoubleContactSection() {
  return (
    <section className="relative w-full">
      <div className="bg-primary py-10 text-white text-[30px] font-bold font-nunito">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-5">
            <h2>Neem nu contact op</h2>
            <div className="w-[100px] border-b-[3px] mt-3 border-b-primary-50"></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 relative block">
        <div className="flex flex-col md:flex-row px-5 xl:px-0">
          <div className="flex-1 py-10 space-y-10 bg-[#0181a8] text-white flex flex-col">
            <div className="pl-24 pr-10 md:pr-16  stap01 bg-transparent">
              <div className="flex-1 ">
                <h4 className="text-[28px] font-bold mb-5">
                  Vul het aanvraagformulier in
                </h4>
                <p>
                  U meldt kosteloos uw object aan via het online
                  aanmeldformulier. U bepaalt zelf welke informatie u prettig
                  vindt om te verstrekken.
                </p>
              </div>
            </div>
            <div className="pl-24 pr-10 md:pr-16  stap02 bg-transparent">
              <div className="flex-1">
                <h4 className="text-[28px] font-bold mb-5">
                  Binnen 24 uur contact
                </h4>
                <p>
                  Wij nemen telefonisch contact met u op om uw wensen en de
                  mogelijkheden te bespreken. Er is ook de mogelijkheid om één
                  van onze medewerkers bij u thuis of op kantoor te ontmoeten.
                </p>
              </div>
            </div>
            <div className="pl-24 pr-10 md:pr-16 stap03 bg-transparent">
              <div className="flex-1">
                <h4 className="text-[28px] font-bold mb-5">
                  Ontvang waardebepaling of bod
                </h4>
                <p>
                  U ontvangt binnen 48 uur een vrijblijvende waardebepaling of
                  bod op maat. Elk huis heeft een andere achtergrond. Daarom
                  krijgt ieder object een eigen benadering. U bepaalt uiteraard
                  zelf wat u doet met deze waardebepaling of dat u in gaat op
                  onze bieding.
                </p>
              </div>
            </div>
            <div className="pl-24 pr-10 md:pr-16  stap04 bg-transparent">
              <div className="flex-1">
                <h4 className="text-[28px] font-bold mb-5">Overeenkomst</h4>
                <p>
                  Indien u akkoord gaat met onze bieding spreken we in onderling
                  overleg een opleveringsdatum af. Op deze datum gaan we naar de
                  notaris en ontvangt u direct uw geld op uw rekening.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0 bg-primary text-white overflow-auto relative">
            <div
              id="floatingForm"
              className="sticky top-0"
              style={{ height: "auto", maxHeight: "100vh", overflowY: "auto" }}
            >
              <StandardFormComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoubleContactSection;
