import { User } from "../models/User";
import api from "./api";

// const apiUrl = "http://192.168.0.29:8084/api/users-service/users"; 
const url = "/api/user-service/user";

export const createUser = async (userData: User) => {
    try {
      const response = await api.post<User>(url, userData);
      return response; 
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw new Error("No se pudo crear el usuario");
    }
  };
  