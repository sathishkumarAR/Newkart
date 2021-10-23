import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from "dayjs"

const expiryInMinutes= 5;

const store= async(key, value)=>{
    try {

        const item={
            value,
            timestamp: Date.now()
        }

        await AsyncStorage.setItem(key,JSON.stringify(item));
        
    } catch (error) {
        console.log(error);
    }
}

const get= async(key)=>{

    try {
        const result =await AsyncStorage.getItem(key);
        if(!result) 
            return null;
            
        const item= JSON.parse(result);

        if(isExpired(item)){
            //We are violating Command Query Separation (CQS) principle. But its ok to violate here 
            await AsyncStorage.removeItem(key);
            return null;
        }

        return item.value;
   
    } catch (error) {
        console.log(error);
    }

}

const isExpired= (item)=>{
    //it will return current date and time if we dont pass any argument
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);   
    return now.diff(storedTime, "minute") >expiryInMinutes;
}


export default { store, get };