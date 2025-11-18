import { Navigate,Outlet } from "react-router-dom";
import  useAuth  from "../contexts/AuthUse.jsx";

export default function RoleRoute({ allowedRoles }) {
    const { user } = useAuth();
    return user && allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/login" />;
};
