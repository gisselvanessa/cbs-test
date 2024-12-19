/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../models/User";
import api from "../api/api";

// const apiUrl = "http://192.168.0.29:8084/api/users-service/users"; 
const url = "/api/user-service/users";

export const createUser = async (userData: User) => {
    try {
      const response = await api.post<User>(url, userData);
      return response.data; 
    } catch (error:any) {
        if (error.response) {
            switch (error.response.status) {
              case 400:
                throw new Error("Bad Request - Error en la validación de los datos proporcionados. Verifique que todos los campos requeridos estén presentes y correctamente formateados.");
              case 404:
                throw new Error("Not Found - El recurso solicitado no se ha encontrado. Puede que la URL esté mal formada o el recurso no exista.");
              case 500:
                throw new Error("Internal Server Error - Ocurrió un error inesperado en el servidor. Por favor, inténtelo de nuevo más tarde o contacte al administrador si el problema persiste.");
              case 502:
                throw new Error("Bad Gateway - Error de comunicación entre servidores. Verifique la conectividad entre los servicios.");
              case 503:
                throw new Error("Service Unavailable - El servicio está temporalmente fuera de servicio. Intente nuevamente más tarde.");
              default:
                throw new Error("Ha ocurrido un error inesperado.");
            }
          } else {
            // Errores relacionados con la red o configuración
            throw new Error("Error de red o configuración.");
          }
    }
  };
  