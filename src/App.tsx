import { Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import Page404 from "./page/Page404";
import HomePage from "./page/HomePage";
import ForgoutPassword from "./page/ForgotPassword";
import ProtectedRoutes from "./AuthGuards/AuthGuard";


const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgout" element={<ForgoutPassword />} />
        <Route path="*" element={<Page404 />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<HomePage/>} />
          </Route >
      </Routes>
    </div>
  );
};

export default App;
