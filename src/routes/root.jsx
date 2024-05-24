import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Sociallinks from "../components/Sociallinks";
import Portfolio from "../components/Portfolio";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
export default function Root() {
  // useEffect(() => {
  //   const driverObj = driver({
  //     showButtons: ["next", "previous", "close"],
  //     steps: [
  //       {
  //         element: "#hiddenInMobile",
  //         popover: {
  //           title: "Search form",
  //           description: "You can search blogs easily using this search bar",
  //         },
  //       },
  //       {
  //         element: "#themes",
  //         popover: {
  //           title: "Change theme",
  //           description: "You can switch the theme from light to dark and from dark to light using this button.",
  //         },
  //       },
  //       {
  //         element: "#hireMe",
  //         popover: {
  //           title: "Hire me",
  //           description: "If you want to hire me through Upwork, you can click this button to be redirected to Upwork.",
  //         },
  //       },
  //       {
  //         element: "#resume",
  //         popover: {
  //           title: "My Resume",
  //           description: "You can check my resume or download it, where I have included all my details and experiences.",
  //         },
  //       },
  //       {
  //         element: "#mainExpContainer",
  //         popover: {
  //           title: "My Expertise",
  //           description: "Here, I have included all my expertise and the technologies that I know thoroughly.",
  //         },
  //       },
  //     ],
  //   });
  //   driverObj.drive();
  // }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Sociallinks />
      <Portfolio />
      <Expertise />
      <Blogs />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
}
