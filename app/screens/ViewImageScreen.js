import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from "../config/colors"
import {MaterialCommunityIcons } from "@expo/vector-icons"

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.deleteButton}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>    
            <Image 
                resizeMode={'contain'}
                style={styles.image}
                source={
                    require("../assets/chair.jpg")
                } />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        flex:1
    },
    closeButton:{
        position:"absolute",
        top:60,
        right:30,
    },
    deleteButton:{
        position:"absolute",
        top:60,
        left:30,
    },
    image:{
        width:"100%",
        height:"100%",
        
    }
})

export default ViewImageScreen;