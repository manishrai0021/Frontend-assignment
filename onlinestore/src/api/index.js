import axios from 'axios';

const API = axios.create({ baseURL: 'https://fakestoreapi.com/'});

API.interceptors.request.use((req) => {
    return req;
})

export const fetchProducts = () => API.get(`/products`);