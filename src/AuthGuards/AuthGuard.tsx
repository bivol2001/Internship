import { Outlet, Navigate } from "react-router-dom";

const accessToken = localStorage.getItem("accessToken")
const ProtectedRoutes = () => {
    
    return accessToken ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectedRoutes;