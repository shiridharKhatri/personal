import React, { useEffect, useState } from "react";
import { BiIcons, BsIcons } from "../tools/icons";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [success, setSuccess] = useState(false);
  const host = "https://unusual-jay-hoodie.cyclic.app";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/blog/fetchBlog`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data.blog);
        if (data.success === true) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchItems();
  }, [host]);
  return (
    <section className="container blogs">
      <h1 className="headText">Latest Blogs</h1>
      <div className="blogContainer">
        {success === true ? (
          <>
            {blogs?.slice(-4).map((e) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${host}/img/${e.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  key={e._id}
                  className="blogCards"
                >
                  <div className="details">
                    <h2>{e.title}</h2>
                    <Link to={`blogs/${e._id}/${e.title}`} ><button style={{ background: e.color }}>
                      Read more&nbsp;
                      <BiIcons.BiChevronRight />
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
