// import Cookies from "js-cookie";
// import axios from "axios";
// import {useAuthStore} from "@/store/auth/auth.store";
// import axiosRetry from "axios-retry";

// const BASE_API_URL = "https://www.itemsatis.com/api";

// const authHeader = () => ({
//     Authorization: `Bearer ${Cookies.get("access_token")}`
// })

// const http = axios.create({
//     baseURL: BASE_API_URL,
//     withCredentials: true
// })

// const https = axios.create({
//     baseURL: BASE_API_URL,
//     withCredentials: true,
//     headers: {}
// })

// https.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// https.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
// https.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Requested-With";


// https.interceptors.request.use(config => {
//     const authStore = useAuthStore();
//     const token = authStore.token; //kullanıcıda bildirim olmadığı için bildirim olan kullanıcın tokenini almamız gerekiyor.
//     //const token ="IyLQm+Vz2wO6RH/l9mM8cuKHAdIbBQNXesFngb1emp11Y0X1ERj2j3ZmbH+2aPyScewRVFrmvhzmXWhRfmgXIwqPDh+XmBbXYIhFFt1ClzHGgzBM/xPdLqZVduJwAeYrt4ZZc8QRRHnalMpQsSTJv6iPJChx8K1S2Y8n44cgHvw="
//     if(!token) return config;
//     if(config.data === undefined) {
//         config.data = `token=${token}`
//         return config;
//     }
//     if(typeof config.data === 'string') {
//         config.data = config.data + `&token=${token}`
//         return config;
//     }
//     if(config.data instanceof FormData) {
//         config.data.append("token", token);
//         return config;
//     }else if(typeof config.data === 'object' && config.data.constructor.name === 'Object') {
//         config.data.token = token;
//     }
//     return config;
// }, err => {
//     return Promise.reject({fail: true, success: false, redirect: false, vpnPossible: false})
// })

// https.interceptors.response.use(response => {
//     return response
// }, err => {
//     return Promise.reject({fail: true, success: false, redirect: true, vpnPossible: true});
// })

// axiosRetry(https, {
//     retries: 3
// })

// export const useHttps = () => {
//     return https;
// }

// export const useHttp = () => {
//     return http;
// }