import { Navigate,Outlet } from "react-router-dom";
import  useAuth  from "../contexts/AuthUse.jsx";

export default function PrivateRoute() {
   const { accessToken } = useAuth();

   return accessToken ? <Outlet /> : <Navigate to="/login" />;
};  