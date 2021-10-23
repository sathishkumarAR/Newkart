import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();


function AccountNavigator(){
    return (
        <Stack.Navigator >
            <Stack.Screen name= "AccountScreen" component={AccountScreen} />
            <Stack.Screen name= "Messages" component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;