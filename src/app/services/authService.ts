/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../api/api";

const url = "/api/auth-service/";

export const preLogin = async (userName: string) => {
  try {
    const response = await api.get(`${url}/pre-login/${userName}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
        switch (error.response.status) {
          case 404:
            throw new Error("Not Found - No se encontró el usuario con el ID proporcionado. Verifique si el ID es correcto.");
          default:
            throw new Error("Ha ocurrido un error inesperado.");
        }
      } else {
        throw new Error("Error de red o configuración.");
      }
    }
};
export const loginUser = async (credentials: any) => {
    try {
        const response = await api.post(`${url}/login`, credentials);
        return response; 
    } catch (error:any) {
        if (error.response) {
            switch (error.response.status) {
              case 401:
                throw new Error("UnAuthorized - Usuarion y/o Contraseña incorrectos.");
              default:
                throw new Error("Ha ocurrido un error inesperado.");
            }
          } else {
            throw new Error("Error de red o configuración.");
          }
        }
    
}
export const logoutUser = async () => {
    try {
        const response = await api.post('/api/auth/logout');
        return response; 
    } catch (error) {
        console.error('Error en el logout:', error);
    }
};
