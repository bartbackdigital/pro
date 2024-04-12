import React, { useState } from "react";
import Layout from "@/layout/Layout";
import HeaderHome from "../components/HeaderHome";

const Home = () => {
  return (
    <>
      <Layout
        title="Organic Cannabis Products | Sustainable Farming | Lab-Tested Quality"
        description="Discover our range of organic cannabis products, cultivated using sustainable farming practices and rigorously lab-tested for quality and safety. Shop now!"
      >
        <HeaderHome />
      </Layout>
    </>
  );
};

export default Home;
