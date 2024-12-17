import { AuthApiResponse } from "../models/Auth";
import api from "./api";

const url = "/api/user-service/user";

export const isUsername = async (username: string): Promise<AuthApiResponse> => {
  return api.get(url, {
    params: { username },
  });
  
};
