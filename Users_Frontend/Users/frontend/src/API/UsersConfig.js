import axios from "axios"
import {create} from "zustand"

const API_URL = "http://localhost:8080/api/v1/User"

axios.defaults.withCredentials = true;


export const UserAuthStore = create((set) => ({
    user: null,
    error: null,
    message: null,
    success: false,

    
    singnup: async (username, email, password) => {
        try {
            const response = await axios.post(`${API_URL}/create`, { username, email, password });
            set({ error: null, user: response.data.user, message: "user created successfully", success: true});
        } catch (error) {
            set({ error: error.response.data.message || "Error in creating the new user", success: false });
            throw error;
        }
    }
}))