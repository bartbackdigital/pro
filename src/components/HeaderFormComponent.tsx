import React from "react";
import OrangeButton from "./OrangeButton";

function HeaderFormComponent() {
  return (
    <section className="w-full bg-[#f3f3f3] text-darkGray mt-28">
      <div className="relative max-w-screen-xl mx-auto py-6  font-poppins">
        <div className="text-center mb-14">
          <h1 className="text-[30px] font-bold">Stel uw vraag hieronder </h1>
          <span className="text-gray50 text-[19px]">
            En wij zullen z.s.m. contact opnemen met u.
          </span>
        </div>
        <form className="">
          <div className="max-w-screen-md w-full flex flex-col space-y-3 px-10 mx-auto">
            <input type="text" placeholder="Uw naam" />
            <input type="text" placeholder="E-mailadres" />
            <input type="text" placeholder="Telefoonnummer" />
            <div>
              <strong className="block mt-5">Waar bent u naar opzoek?</strong>
            </div>
            <select>
              <option>Waar bent u naar opzoek?</option>
              <option>Verkopen</option>
              <option>Verkopen & Terughuren</option>
              <option>Verkopen met Huurders</option>
              <option>Overig</option>
            </select>
            <textarea className="min-h-[200px]" />
            <OrangeButton>Versturen</OrangeButton>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeaderFormComponent;
