import axios from 'axios';

const API = axios.create({ baseURL: 'https://fakestoreapi.com/products'});

API.interceptors.request.use((req) => {
    return req;
})

export const fetchProducts = (page) => API.get(`/products`);