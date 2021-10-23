import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({backgroundColor="black", size=40, iconName, iconColor="white"}) {
    return (
        <View style={{
            backgroundColor:backgroundColor,
            width:size,
            height:size,
            borderRadius:size/2,
            justifyContent:"center",
            alignItems:"center"

        }}>
            <MaterialCommunityIcons name={iconName} size={size/2} color={iconColor} />
        </View>
    );
}


export default Icon;