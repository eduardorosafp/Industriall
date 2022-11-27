import axios from 'axios';


const api = axios.create({
    baseURL: 'https://desafio-iall.azurewebsites.net/api/swagger/v1/swagger.json'
});

export default api;


// import axios, {AxiosError}from 'axios';
// import {parseCookies} from 'nookies'
// import { api } from './apiClient';

// export function setupAPIClient(ctx = undefined){
//     let cookies = parseCookies(ctx);



//     const api = axios.create({
//             baseURL: 'https://desafio-iall.azurewebsites.net/api/swagger/v1/swagger.json'
//         });

// api.interceptors.response.use(response => {
//     return response;

// })

// return api;
// }

// export default api;