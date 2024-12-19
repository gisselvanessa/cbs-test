/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../api/api";

const url = "/api/user-service/users";

export const isUsername = async (userName: string) => {
  try {
    const response = await api.get(`${url}/${userName}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
        switch (error.response.status) {
          
          case 404:
            throw new Error("Not Found - No se encontró el usuario con el ID proporcionado. Verifique si el ID es correcto.");
          case 500:
            throw new Error("Internal Server Error - Ocurrió un error inesperado al buscar el usuario.");
          default:
            throw new Error("Ha ocurrido un error inesperado.");
        }
      } else {
        throw new Error("Error de red o configuración.");
      }
    }
};
export const loginUser = async (userNameId: string, password: string, roleId: string) => {
    try {
        const response = await api.post('/api/auth/login', { userNameId, password, roleId });
        return response; 
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw new Error('No se pudo iniciar sesión');
    }
};
export const logoutUser = async () => {
    try {
        const response = await api.post('/api/auth/logout');
        return response; 
    } catch (error) {
        console.error('Error en el logout:', error);
    }
};
