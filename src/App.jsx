import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import Blogs from "./routes/Blogs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "blog/:blogId/:title",
      element: <Blogs/>,
    },
  ]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
