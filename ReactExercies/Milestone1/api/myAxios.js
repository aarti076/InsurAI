import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

 const myAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

myAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acessoken");
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default myAxios;
