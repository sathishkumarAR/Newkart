import React from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";

function AddListingButton({ onPress }){

    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container}>
                <MaterialCommunityIcons name="plus" size={40} color="white" />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width:70,
        height:70,
        borderRadius:40,
        bottom:20,
        borderColor:"white",
        borderWidth:7,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default AddListingButton;