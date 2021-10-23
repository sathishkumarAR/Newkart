import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/contexts/AuthContext';
import authSecureStorage from './app/utility/authSecureStorage';
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {

  const [user, setUser] = useState();
  const [isAppReady, setIsAppReady]= useState(false);

  const restoreUser= async()=>{
    const user = await authSecureStorage.getUser();
    if(user)
      return setUser(user);

  }

  if(!isAppReady){
    return <AppLoading startAsync={restoreUser} onFinish={()=>setIsAppReady(true)} onError={()=>console.log("Error while starting the app")} />
  }

  

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        { user? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}


