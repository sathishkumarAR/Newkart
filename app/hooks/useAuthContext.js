import jwtDecode from 'jwt-decode';
import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';
import authSecureStorage from '../utility/authSecureStorage';


function useAuthContext(props) {
    const {user, setUser} =useContext(AuthContext);

    const logOut=()=>{
        setUser(null);
        authSecureStorage.removeToken();
    }

    const login=(token)=>{
        const userData = jwtDecode(token);
        setUser(userData);
        authSecureStorage.storeToken(token);
    }

    return {user, setUser, login, logOut }

}


export default useAuthContext;