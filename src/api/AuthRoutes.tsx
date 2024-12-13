import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const authRoutes = ["/"];

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (authRoutes.includes(location.pathname) && !accessToken) {
      navigate("/login");
    }
    console.log(location.pathname);
  }, [location]);
