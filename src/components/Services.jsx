import React from "react";

export default function Services() {
  return (
    <section className="container service">
      <div className="textHead">
        <h1>
          I confidently offer <span>services</span>, with some of the
          highlighted offerings listed below.
        </h1>
      </div>
      <div className="servicesContainer ">
        <div className="primaryCard">
          <div className="cards">
            <lord-icon
              src="https://cdn.lordicon.com/kgvlhryh.json"
              trigger="hover"
              style={{ width: "15rem", height: "15rem" }}
            ></lord-icon>
            <h3>Web Designing</h3>
          </div>
        </div>
        <div className="primaryCard">
          <div className="cards">
            <lord-icon
              src="https://cdn.lordicon.com/iuemcjza.json"
              trigger="hover"
              style={{ width: "15rem", height: "15rem" }}
            ></lord-icon>
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="primaryCard">
          <div className="cards">
            <lord-icon
              src="https://cdn.lordicon.com/qnwzeeae.json"
              trigger="hover"
              style={{ width: "15rem", height: "15rem" }}
            ></lord-icon>
            <h3>Ecommerce Development</h3>
          </div>
        </div>
        <div className="primaryCard">
          <div className="cards">
            <lord-icon
              src="https://cdn.lordicon.com/ybaojceo.json"
              trigger="hover"
              style={{ width: "15rem", height: "15rem" }}
            ></lord-icon>
            <h3>SEO specialist</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
