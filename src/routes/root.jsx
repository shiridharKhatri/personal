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
import AnimatedBlogs from "../components/AnimatedBlog";
import AnimatedHeader from "../components/AnimatedHeader";
export default function Root() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <AnimatedHeader/>
      <Portfolio />
      <Expertise />
      <AnimatedBlogs/>
      <Services />
      <Reviews />
      <Contact />
    </>
  );
}
