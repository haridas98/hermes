import React, { useEffect } from "react";
import Slider from "../Slider";
import About from "../About/About";
import Service from "../Service";
import Feature from "../Feature";
import Pricing from "../Pricing";
import Owner from "../Owner";
import Quote from "../Quote/Quote";
import Working from "../Working";
import { useLocation } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Slider />
      <About />
      <Pricing />
      <Feature />
      <Working />
      <Owner />
      <Reviews />
      <Service />
      <Quote />
    </>
  );
};

export default Home;
