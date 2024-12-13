import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});


api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api;

