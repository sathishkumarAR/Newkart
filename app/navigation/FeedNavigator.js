import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListingsScreen from '../screens/ProductListingsScreen';
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Listings" component={ProductListingsScreen} />
            <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator;