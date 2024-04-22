import React from "react";
import GoogleMapsElement from "./GoogleMapsElement";

function GoogleMapsLocations() {
  return (
    <section className="relative w-full mt-10">
      <div className=" py-10 text-darkGray text-[30px] font-bold font-nunito">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-5">
            <h2>Wij zijn actief in alle gebieden van Nederland</h2>
            <div className="w-[100px] border-b-[3px] mt-3 border-b-primary-50"></div>
          </div>
        </div>
      </div>
      <GoogleMapsElement />
    </section>
  );
}

export default GoogleMapsLocations;
