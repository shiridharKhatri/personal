import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import Blogs from "./routes/Blogs";
import SearchBlogs from "./routes/SearchBlogs";
import About from "./routes/About";
import Notfound from "./routes/Notfound";
import ScrollToTopLayout from "./components/ScrollToTop";
function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Notfound />,
    },
    {
      element: <ScrollToTopLayout />,
      children: [
        {
          path: "/",
          element: <Root />,
        },
        {
          path: "blogs/:blogId/",
          element: <Blogs />,
        },
        {
          path: "blog/:title",
          element: <SearchBlogs />,
        },
      ],
    },
  ]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
