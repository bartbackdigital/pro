import React from "react";

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
        <form className=" w-full flex flex-col space-y-3 px-10">
          <input type="text" placeholder="Uw naam" />
          <input type="text" placeholder="E-mailadres" />
          <input type="text" placeholder="Telefoonnummer" />
          <div>
            <strong className="block mt-5">Waar bent u naar opzoek?</strong>
          </div>
          <select>
            <option>Verkopen</option>
            <option>Verkopen & Terughuren</option>
            <option>Verkopen met Huurders</option>
            <option>Overig</option>
          </select>
        </form>
      </div>
    </section>
  );
}

export default HeaderFormComponent;
