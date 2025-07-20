"use client"

import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Footer from "./components/Footer"
import AOS from "aos"
import { useEffect } from "react"
import Blogs from "./routes/Blogs"
import SearchBlogs from "./routes/SearchBlogs"
import Notfound from "./routes/Notfound"
import ScrollToTopLayout from "./components/ScrollToTop"
import Gallery from "./routes/Gallery" // Import the new Gallery component
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
        {
          path: "gallery", // Add the new gallery route
          element: <Gallery />,
        },
      ],
    },
  ])
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
