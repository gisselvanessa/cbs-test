import axios from "axios";
import { User } from "../models/User";

const apiUrl = "http://localhost:8084/api/user-service/users";

export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get(apiUrl);
    return response.data;
};

export const createUser = async (user: User): Promise<User> => {
    const response = await axios.post(apiUrl, user);
    return response.data;
};