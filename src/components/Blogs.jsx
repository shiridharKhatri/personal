import React, { useEffect, useState } from "react";
import { BiIcons } from "../tools/icons";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [success, setSuccess] = useState(false);
  const HOST = import.meta.env.VITE_HOST;
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${HOST}/blog/fetchBlog`);
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
  }, [HOST]);
  return (
    <section id="blogs" className="container blogs">
      <div className="textHead">

        <h1>
          Read our <span>latest blog</span> posts, updated to keep you informed
          and engaged.
        </h1>
      </div>
      <div className="blogContainer">
        {success === true ? (
          <>
            {blogs?.slice(-4).map((e) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${HOST}/img/${e.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  key={e._id}
                  className="blogCards"
                >
                  <div className="details">
                    <h2>{e.title}</h2>
                    <Link to={`blogs/${e._id}/${e.title}`}>
                      <button style={{ background: e.color }}>
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
