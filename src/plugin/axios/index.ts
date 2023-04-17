import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem('token');
//   if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
