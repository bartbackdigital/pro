import React, { useState } from "react";
import Layout from "@/layout/Layout";
import HeaderHome from "../components/HeaderHome";
import HeaderFormComponent from "@/components/HeaderFormComponent";

const Home = () => {
  return (
    <>
      <Layout
        title="Neem nu contact op met Proranje vastgoed"
        description="Heeft u vragen of wil u meteen een bieding op uw woning ontvangen? Neem dan nu contact met ons op!"
      >
        <HeaderFormComponent />
      </Layout>
    </>
  );
};

export default Home;
