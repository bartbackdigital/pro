import React from "react";
import ProjectListings from "./ProjectListings";

function ProjectOverviewSection() {
  return (
    <section className="relative w-full">
      <div className="bg-primary py-10 text-white text-[30px] font-bold font-nunito">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-5">
            <h2>Enkele Projecten</h2>
            <div className="w-[100px] border-b-[3px] mt-3 border-b-primary-50"></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10">
        <ProjectListings />
      </div>
    </section>
  );
}

export default ProjectOverviewSection;
