import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';


function WelcomeScreen({ navigation }) {
    console.log(DefaultTheme)
    return (
        <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={require("../../app/assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")} 
                />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=> navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={()=>navigation.navigate(routes.REGISTER)} />
            </View>
            

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonContainer:{
        width:"100%",
        padding: 20
    },
    logo:{
        width:70,
        height:70,
        
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
    },
    tagline:{
        fontSize:20,
        fontWeight:"700",
        paddingVertical:20,
    }
})

export default WelcomeScreen;