import {__DEV__} from "react-native"
import Constants from "expo-constants";

//Very usefull when we have different base url for different environments. I have used same for all now
const setting={
    dev:{
        apiUrl:"https://newkart-express-server.herokuapp.com"
    },
    stage:{
        apiUrl:"https://newkart-express-server.herokuapp.com"
    },
    prod:{
        apiUrl:"https://newkart-express-server.herokuapp.com"
    },
}

const findEnvironment=()=>{
    if(__DEV__) return setting.dev;
    if(Constants.manifest.releaseChannel==="staging") return setting.stage;
    return setting.prod;
}

export default findEnvironment;

