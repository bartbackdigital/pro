import React from "react";
import Link from "next/link";

// Define the structure for the location details
interface LocationDetails {
  title: string;
  address: string;
  postalCode: string;
  tel: string;
  email: string;
  mapUrl: string;
}

// Mapping of place names to their details and map URLs
const locationData: Record<string, LocationDetails> = {
  Amsterdam: {
    title: "Amsterdam",
    address: "Hobbemakade 73",
    postalCode: "1071 XN Amsterdam",
    tel: "020-2440930",
    email: "info@proranje.nl",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.8172215259583!2d4.870121515865707!3d52.3374618797801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a05a87d3693%3A0xb38589010c947b49!2sClaude%20Debussylaan%2011%2C%201082%20MC%20Amsterdam!5e0!3m2!1snl!2snl!4v1568188495254!5m2!1snl!2snl",
  },
  Rotterdam: {
    title: "Rotterdam",
    address: "Hofplein 20",
    postalCode: "3032 AC Rotterdam",
    tel: "010-3075826",
    email: "info@proranje.nl",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1184.0502127514867!2d4.479101080880849!3d51.925036678917714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43358082e9f09%3A0x6ce17a3a334415e!2sHofplein%2020%2C%203032%20AC%20Rotterdam!5e0!3m2!1snl!2snl!4v1568188327721!5m2!1snl!2snl",
  },
  DenHaag: {
    title: "Den Haag",
    address: "Prinsegracht 38",
    postalCode: "2512GA Den Haag",
    tel: "070-2210162",
    email: "info@proranje.nl",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.304141417901!2d4.303931051356099!3d52.074193079632785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b728981a4e9f%3A0xb2ae2c8cfd8b9ddb!2sPrinsegracht%2038%2C%202512%20GA%20Den%20Haag!5e0!3m2!1snl!2snl!4v1583232309271!5m2!1snl!2snl",
  },
};

interface GoogleMapsSectionProps {
  place: keyof typeof locationData;
}

function GoogleMapsSection({ place }: GoogleMapsSectionProps) {
  const location = locationData[place];

  // Apply mirroring for the Rotterdam section
  const mirrorClass = place === "Rotterdam" ? "md:flex-row-reverse" : "";

  return (
    <section className="w-full relative block">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className={`flex py-10 flex-col md:flex-row ${mirrorClass}`}>
          <div className="flex-1 flex flex-col md:mb-0 mb-20 space-y-5 px-10">
            <h2 className="font-bold text-[28px] mb-8 text-xl text-black  md:mt-10">
              {location.title}
            </h2>
            <span>{location.address}</span>
            <span>{location.postalCode}</span>
            <Link href={`tel:${location.tel}`}>Tel: {location.tel}</Link>
            <Link href={`mailto:${location.email}`}>
              Email: {location.email}
            </Link>
          </div>
          <div className="flex-1">
            <iframe
              src={location.mapUrl}
              width="600"
              height="450"
              className="w-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleMapsSection;
