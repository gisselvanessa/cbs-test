import api from "../api/api";

const url = "/api/user-service/user";

export const isUsername = async (username: string) => {
  try {
    const response = await api.get(`${url}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error al verificar el usuario o el Usuario no existe:", error);
    throw new Error("Usuario no encontrado"); 
  }
};
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await api.post('/api/auth/login', { email, password });
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
