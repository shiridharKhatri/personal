import React, { useEffect, useState } from "react";
import { BiIcons, BsIcons } from "../tools/icons";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const host = "http://localhost:5000";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/blog/fetchBlog`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data.blog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchItems();
  }, [host]);
  return (
    <section className="container blogs">
      <h1 className="headText">Blogs</h1>
      <div className="blogContainer">
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
                <button style={{background:e.color}}>
                  Read more&nbsp;
                  <BiIcons.BiChevronRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
