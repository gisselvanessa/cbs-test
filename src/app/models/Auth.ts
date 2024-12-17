import { User } from "./User";

 export interface AuthApiResponse {
    data: User;  // El objeto de tipo User que contiene la información del usuario
    message: string;  // El mensaje de la respuesta
  }