import axios from "axios";

const url = "https://localhost:44364"

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${url}/api/auth/login`, {
            "emailOrUsername": email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in");
        return null;
    }
};