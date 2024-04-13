import React, { useState } from "react";
import Layout from "@/layout/Layout";
import HeaderHome from "../components/HeaderHome";
import HeaderFormComponent from "@/components/HeaderFormComponent";
import GoogleMapsSection from "@/components/GoogleMapsSection";

const Home = () => {
  return (
    <>
      <Layout
        title="Neem nu contact op met Proranje vastgoed"
        description="Heeft u vragen of wil u meteen een bieding op uw woning ontvangen? Neem dan nu contact met ons op!"
      >
        <HeaderFormComponent />
        <GoogleMapsSection place="Amsterdam" />
        <GoogleMapsSection place="Rotterdam" />
        <GoogleMapsSection place="DenHaag" />
      </Layout>
    </>
  );
};

export default Home;
