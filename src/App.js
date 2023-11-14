import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "./styles/css/bootstrap.min.css";
import "./styles/css/style.css";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import JobDetailsPage from "./components/Jobs/JobDetailsPage";
import CustomNavbar from "./components/CustomNavbar";
import AboutFull from "./components/About/AboutFull";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
        rel="stylesheet"
      />
      {/*<Spinner />*/}
      <CustomNavbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<AboutFull />} />
        <Route path="/job/:id" element={<JobDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
