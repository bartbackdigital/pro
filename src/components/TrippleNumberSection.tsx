import React from "react";

function TrippleNumberSection() {
  return (
    <section className="w-full bg-primary-200 py-10">
      <div className="bg-primary py-10 font-bold font-nunito">
        <div className="max-w-screen-xl pl-14 pr-5 mx-auto">
          <h2 className="text-white text-[30px]">Werkwijze</h2>
          <div className="w-[100px] border-b-[3px] mt-3 border-b-primary-50"></div>
        </div>
        <div className="max-w-screen-xl px-5 mx-auto">
          <div className="flex space-y-5 md:space-y-0 md:space-x-5 px-5 mt-10 flex-col md:flex-row">
            <div
              className="flex-1 bg-white pr-10 pb-10 pl-20 relative"
              style={{
                backgroundImage: "url('/images/stap-1.png')",
                backgroundPosition: "30px 20px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-textGray font-bold text-[27px] mt-8 mb-5">
                Neem contact op
              </h3>
              <p className="font-normal text-[14px] leading-[1.7]">
                Via de contact pagina kunt u ons bereiken. Indien u meteen een
                voorstel wilt ontvangen kunt u het aanvraagformulier onder aan
                deze pagina invullen.
              </p>
            </div>
            <div
              className="flex-1 bg-white py-5 pr-10 pl-20 text-sm relative"
              style={{
                backgroundImage: "url('/images/stap-2.png')",
                backgroundPosition: "30px 20px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-textGray font-bold text-[27px] mt-8 mb-5">
                Kennismaking
              </h3>
              <p className="font-normal  text-[14px] leading-[1.7]">
                U kunt een afspraak maken met één van onze vastgoedspecialisten.
                Dit is geheel kosteloos en vrijblijvend. Bij ons op kantoor of
                op locatie.
              </p>
            </div>
            <div
              className="flex-1 bg-white py-5 pr-10 pl-20 relative"
              style={{
                backgroundImage: "url('/images/stap-3.png')",
                backgroundPosition: "30px 20px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-textGray font-bold text-[27px] mt-8 mb-5">
                Persoonlijke touch
              </h3>
              <p className="font-normal  text-[14px] leading-[1.7]">
                Na het bekijken en bespreken van uw situatie zetten wij de
                mogelijkheden voor u zorgvuldig op een rijtje. Wij nemen
                uitgebreid de tijd hiervoor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrippleNumberSection;
