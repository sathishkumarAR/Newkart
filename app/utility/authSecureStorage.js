import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key= "authToken";

const storeToken= async(authToken)=>{

    try {
        await SecureStore.setItemAsync(key,authToken);
    } catch (error) {
        console.log("Error adding authToken to SecureStore",error);
    }

}

const getToken= async()=>{
    try {
        const authToken =await SecureStore.getItemAsync(key);
        return authToken;

    } catch (error) {
        console.log("Error getting authToken from SecureStore", error);
    }
}

const getUser=async()=>{
    const token= await getToken();
    return token ? jwtDecode(token): null;
}

const removeToken = async()=>{
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error deleting authToken from SecureStore", error);
    }
}



export default { getToken, getUser, storeToken, removeToken };