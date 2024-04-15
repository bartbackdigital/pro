import React, { useState } from "react";
import Layout from "@/layout/Layout";
import HeaderHome from "../components/HeaderHome";

const Home = () => {
  return (
    <>
      <Layout
        title="Wij kopen direct uw huis | Gratis waardebepaling | Marktconforme prijs"
        description="✓ Geen makelaars- en notariskosten. ✓ Marktconforme prijzen. ✓ Snelle betaling mogelijk. ✓ Maximale flexibiliteit ✓ Terug huren mogelijk. ✓ 100% zekerheid."
      >
        <HeaderHome />
      </Layout>
    </>
  );
};

export default Home;
