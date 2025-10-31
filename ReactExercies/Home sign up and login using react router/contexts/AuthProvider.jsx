import { useState } from "react";
import  AuthContext  from "./AuthContext";
import myAxios from "../api/myAxios";

 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem("accessToken") || null;
    });

    const login = async (formData) => {
        
             const response = await myAxios.post("/auth/login", formData);
            const { user , accessToken } = response.data.data;
            setUser(user);
            setAccessToken(accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("accessToken", accessToken);
            return response;
       
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    };

    return(
        <AuthContext.Provider value={{ user, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
   
};

export default AuthProvider;

