import { create } from "apisauce";

import authSecureStorage from "../utility/authSecureStorage";
import cache from "../utility/cache";
import findEnvironment from "../config/envSetting";

const {apiUrl} =findEnvironment();

const apiClient = create({
    
    baseURL:apiUrl,
    timeout: 3000
});

apiClient.addAsyncRequestTransform(async(request)=>{
    const token= await authSecureStorage.getToken();
    if(!token) return;

    //We can define any string as header name
    request.headers["x-auth-token"]=token;

})

//Modifying the default "get" method to implement caching
const get = apiClient.get;

apiClient.get = async(url,params, axiosConfig)=>{

    const response= await get(url,params, axiosConfig);
    if(response.ok){
        cache.store(url,response.data);
        return response;
    }

    const data = await cache.get(url);
    return data? {ok:true, data} : response;
    
}



export default apiClient;