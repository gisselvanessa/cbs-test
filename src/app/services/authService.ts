import { User } from "../models/User";
import api from "./api";

const url = "/api/user-service/user";

export const isUsername = async (username: string): Promise<User | null> => {
  try {
    const response = await api.get(`${url}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error al verificar el usuario o el Usuario no existe:", error);
    throw new Error("Usuario no encontrado");
  }
};
