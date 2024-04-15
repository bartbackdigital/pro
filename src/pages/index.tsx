import React, { useState } from "react";
import Layout from "@/layout/Layout";
import HeaderHome from "../components/HeaderHome";
import GoogleMapsLocations from "@/components/GoogleMapsLocations";
import QuadrupleListSection from "@/components/QuadrupleListSection";
import TrippleNumberSection from "@/components/TrippleNumberSection";

const Home = () => {
  return (
    <>
      <Layout
        title="Wij kopen direct uw huis | Gratis waardebepaling | Marktconforme prijs"
        description="✓ Geen makelaars- en notariskosten. ✓ Marktconforme prijzen. ✓ Snelle betaling mogelijk. ✓ Maximale flexibiliteit ✓ Terug huren mogelijk. ✓ 100% zekerheid."
      >
        <HeaderHome />
        <GoogleMapsLocations />
        <QuadrupleListSection />
        <TrippleNumberSection />
      </Layout>
    </>
  );
};

export default Home;
