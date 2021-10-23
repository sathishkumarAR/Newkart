import apiClient from "./client";

const sendMessage =(message, listingId)=>apiClient.post("/messages",{message, listingId});

export default {
    sendMessage
};