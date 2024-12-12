import { User } from "../models/User";
import api from "./api";

// const apiUrl = "http://192.168.0.29:8084/api/users-service/users"; 
const url = "/api/user-service/user"; 

// export const fetchUsers = async (): Promise<User[]> => {
//     const response = await api.get(url);
//     return response.data;
// };

export const createUser = async (userData: User): Promise<User> => {
    const response = await api.post<User>(url, userData);
    return response.data;
};