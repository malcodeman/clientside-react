import React from "react";

import Header from "./components/Header/Header";
import Testimony from "./components/Testimony/Testimony";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Testimony />
      <Features />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
