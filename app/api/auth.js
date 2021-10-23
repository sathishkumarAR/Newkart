import apiClient from "./client";

const login = (email, password)=> apiClient.post("/login",{email, password});

const register = (userData)=>apiClient.post("/register",userData);

export default { login, register };
