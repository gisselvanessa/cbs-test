import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Manejo de cookies
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

// export default api;

// Interceptores para incluir encabezados personalizados
// api.interceptors.request.use(
//     (config) => {
//       // Encabezados personalizados
//       const requestId = localStorage.getItem('X-Request-ID') || 'default-request-id';
//       const userId = localStorage.getItem('X-User-ID') || 'default-user-id';
//       const clientId = localStorage.getItem('X-Client-ID') || 'default-client-id';
//       const forwardedFor = localStorage.getItem('X-Forwarded-For') || '';

//       config.headers['X-Request-ID'] = requestId;
//       config.headers['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;
//       config.headers['X-User-ID'] = userId;
//       config.headers['X-Client-ID'] = clientId;
//       config.headers['X-Forwarded-For'] = forwardedFor;

//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

export default api;
