import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/defaultStyles';



function AppTextInput({iconName, width="100%",style, ...otherProps}) {
    return (
        <View style={[styles.container,{width:width} ]} >
            {iconName && <MaterialCommunityIcons name={iconName} size={20} color={defaultStyles.colors.medium} style={styles.icon}  />}
            
            <TextInput 
                style={[defaultStyles.text, styles.textInput, style]} 
                placeholderTextColor={defaultStyles.colors.medium}
                {...otherProps}  
                
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        // width:"100%",
        borderRadius:25,
        flexDirection:"row",
        paddingHorizontal:15,
        paddingVertical:15,
        marginVertical:10,
        alignItems:"center"
    },
    icon:{
        marginRight:10
    },
    textInput:{
        flex:1
    }

})

export default AppTextInput;