import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectListings() {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

  // Slider settings with responsive adjustments
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for desktops
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setActiveSlide(next), // Update active slide index
    customPaging: (i: any) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          border: i === activeSlide ? "2px solid #ea4517" : "2px solid #f7f7f7",
          background: i === activeSlide ? "#ea4517" : "#f7f7f7",
          borderRadius: "50%",
          padding: "5px",
        }}
      ></div>
    ),
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Desktop and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-10">
      <Slider {...settings} className="pb-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="px-5" key={index}>
            <div className="relative w-full h-[200px] overflow-hidden">
              <Image
                src="/images/Vroesenlaan.jpg"
                layout="responsive"
                width={400}
                height={200}
                objectFit="cover"
                alt=""
              />
              <div className="bg-primary absolute z-10 left-0 bottom-0 p-2 w-full text-white">
                <h4 className="text-[18px] font-bold">Heemraadssingel</h4>
                <span>Ontwikkelpand - Rotterdam</span>
              </div>
            </div>
            <p className="py-5 text-[17px]">
              Lange termijn belegging in Amsterdam-Zuid. Grondig gerenoveerd en
              momenteel verhuurd aan starters.
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectListings;
