/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../api/api";
import { mockPreLoginResponse } from "../test-data/preLogin.mock";
import { AuthCredentials } from "../types/AuthCredentials.type";

const url = "/api/auth-service";

export const preLogin = async (userName: string): Promise<any> => {
  try {
    if (process.env.NEXT_PUBLIC_API_URL === 'local') {
        return new Promise<any>((resolve) => {
            resolve(mockPreLoginResponse);
        });
    } else {
        const response = await api.get(`${url}/pre-login/${userName}`);
        return response.data;
    }
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
export const loginUser = async (credentials: AuthCredentials): Promise<any> => {
    try {
        if (process.env.NEXT_PUBLIC_API_URL === 'local') {
            return new Promise<any>((resolve) => {
                resolve({
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMjM0NTY3ODkwIiwiUm9sSWQiOiIzIiwiUGFzc3dvcmQiOjEyMzQ1Nn0.o7v_CNrkooCl0QQxUo6HwkizovfgE3fbn6A2sbQ-bk0'
                });
            });
        } else {
            const response = await api.post(`${url}/login`, credentials);
            return response.data; 
        }
    } catch (error:any) {
        if (error.response) {
            switch (error.response.status) {
              case 401:
                throw new Error("UnAuthorized - Usuario y/o Contraseña incorrectos.");
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
