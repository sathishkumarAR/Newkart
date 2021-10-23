import apiClient from "./client";

const getUserDetails=(userId)=>apiClient.post("/users",{userId});

export default {
    getUserDetails
}