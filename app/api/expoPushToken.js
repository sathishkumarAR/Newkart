import apiClient from "./client";

const storePushToken =(pushToken)=> apiClient.put("/expoPushTokens",{ token: pushToken});

export default {
    storePushToken
}