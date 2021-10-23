
import { useState } from "react";

const useApi=(apiFunc)=>{
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const request= async()=>{
        setLoading(true);
        setError(false);
        const response = await apiFunc();
        setLoading(false);
        
        setError(!response.ok)
        setData(response.data);
        return response;
    };

    return { data, error, loading, request };
}

export default useApi;