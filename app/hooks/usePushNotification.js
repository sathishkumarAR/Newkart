import { useEffect } from 'react';
import * as Notifications from "expo-notifications";

import expoPushTokenApi from "../api/expoPushToken";
import navigation from "../navigation/rootNavigation";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

const usePushNotification =()=>{

    useEffect(()=>{
        registerForPushNotifications();

        // This listener is fired whenever a push notification is clicked
            Notifications.addNotificationResponseReceivedListener(notification=>{
                navigation.navigate("Account", {screen:"Messages"});
        });
    },[]);
    
    const registerForPushNotifications= async()=>{

        try {
            const response =await Notifications.requestPermissionsAsync();
            if(!response.granted) return;
    
            const { data:pushToken } =await Notifications.getExpoPushTokenAsync();
            // console.log(pushToken);
            expoPushTokenApi.storePushToken(pushToken);
            
        } catch (error) {
            console.log(error);
        }
    }  
}

export default usePushNotification;