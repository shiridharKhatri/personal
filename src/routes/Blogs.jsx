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
  const host = "https://personalbackend.onrender.com";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/blog/fetchBlog/${params.blogId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data.blog);
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
          <h1 className="headText">Blog</h1>
          <div className="blogContainer">
            <img
              style={{ width: "100%" }}
              src={`${host}/img/${blogs.image}`}
              alt="image"
            />
            <h2>{blogs.title}</h2>
            <p>{blogs.description}</p>
            <div className="points">
              <h3>Some points:</h3>
              <ul>
                {Array.isArray(blogs.points) &&
                  blogs.points.slice(0, -1).map((e) => {
                    return (
                      <li key={e._id}>
                        &nbsp;
                        <p>
                          <b>{e.title}:</b>&nbsp;{e.description}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <p style={{ fontWeight: "bold" }}>
              {blogs.points[blogs.points?.length - 1].description}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
