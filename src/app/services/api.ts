import axios from 'axios';

const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Define esto en .env.local
  baseURL: "http://192.168.0.29:7193", 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores 
// api.interceptors.request.use(
//   (config) => {
//     // Agregar un token si es necesario
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('API Error:', error.response || error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
