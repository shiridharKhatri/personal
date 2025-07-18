import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const ScrollToTopLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />;
};

export default ScrollToTopLayout;
