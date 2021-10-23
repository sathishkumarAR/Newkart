import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddListingScreen from "../screens/AddListingScreen"
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import AddListingButton from './AddListingButton';
import routes from './routes';
import usePushNotification from '../hooks/usePushNotification';



const Tab = createBottomTabNavigator();



function AppNavigator(){

    usePushNotification();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}  
                options={{
                    headerShown:false,
                    tabBarIcon: ({size,color})=>(
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Add Listing" component={AddListingScreen} 
                options={({navigation})=>({
                    tabBarButton: ()=> <AddListingButton onPress={()=>navigation.navigate(routes.ADD_LISTING)} />
                })}
            />
            <Tab.Screen name="Account" component={AccountNavigator} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size,color})=>(
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}

export default AppNavigator;