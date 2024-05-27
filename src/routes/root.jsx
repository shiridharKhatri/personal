import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import "driver.js/dist/driver.css";
export default function Root() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <Expertise />
      <Blogs />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
}
