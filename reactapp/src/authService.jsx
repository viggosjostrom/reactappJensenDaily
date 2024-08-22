import axios from 'axios';
import * as jwt_decode from 'jwt-decode';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const register = async (name, email, password) => {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
};

export const getCurrentUser = () => {
    try {
        const token = localStorage.getItem('token');
        return jwt_decode(token);
    } catch (ex) {
        return null;
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const { exp } = jwt_decode(token);
        if (Date.now() >= exp * 1000) {
            logout();
            return false;
        }
        return true;
    } catch (ex) {
        return false;
    }
};