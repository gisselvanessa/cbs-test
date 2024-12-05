import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';

const apiUrl = "http://localhost:8084/api/user-service/users";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === "GET") {
            const response = await axios.get(apiUrl);
            return res.status(200).json(response.data);
        }

        if (req.method === "POST") {
            const response = await axios.post(apiUrl, req.body);
            return res.status(201).json(response.data);
        }
    } catch (error) {
        return res.status(500).json({ message: "Error en la solicitud" + error });
    }
}