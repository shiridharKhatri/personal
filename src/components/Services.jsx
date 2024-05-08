import React from "react";

export default function Services() {
  return (
    <section className="container service">
      <h1 className="headText">My Services</h1>
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
