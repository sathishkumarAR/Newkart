import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color="primary", style}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}, style]} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10,
        alignSelf:"center"
    },
    text:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    }
})

export default AppButton;