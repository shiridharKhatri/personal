import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../tools/Loader";
import { FaIcons } from "../tools/icons";

export default function Blogs() {
  const [blogs, setBlogs] = useState({});
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const containerRef = useRef(null);
  const host = "https://unusual-jay-hoodie.cyclic.app";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(
          `${host}/blog/fetchBlogs/search?q=${params.title}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
        console.log(data);
        if (data.success === true) {
          setLoader(false);
        } else {
          setLoader(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchItems();
  }, [host]);

  useEffect(() => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar position="relative" />
      {loader === true ? (
        <section ref={containerRef} className="container indBlog">
          <div className="blogContainer">
            <Loader />
          </div>
        </section>
      ) : (
        <section ref={containerRef} className="container indBlog">
          <h1
            style={{ marginBottom: "3rem", marginTop: "12rem" }}
            className="headText"
          >
            {params.title}
          </h1>
          <h3
            style={{
              marginBottom: "8rem",
              width: " 100%",
              textAlign: "center",
              color: "var(--color)",
            }}
          >
            {blogs.total} Result found.
          </h3>
          {blogs.results?.map((e) => {
            return (
              <div key={e._id} className="blogContainer">
                <img
                  style={{ width: "100%" }}
                  src={`${host}/img/${e.image}`}
                  alt="image"
                />
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                <div className="points">
                  <h3>Some points:</h3>
                  <ul>
                    {Array.isArray(e.points) &&
                      e.points.slice(0, -1).map((el) => {
                        return (
                          <li key={el._id}>
                            <p>
                              <b style={{ color: e.color }}>{el.title}:</b>
                              &nbsp;{el.description}
                            </p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <p style={{ fontWeight: "bold" }}>
                  {e.points[e.points?.length - 1].description}
                </p>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}
