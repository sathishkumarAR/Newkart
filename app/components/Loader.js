import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function Loader({visible, style}) {
    if(!visible) return null;

    return (
        <LottieView 
            autoPlay
            loop
            source={require("../assets/animations/loader.json")}
            style={[styles.loader,style]}

        />
    );
}

const styles = StyleSheet.create({
    loader:{
        zIndex:1,
        elevation:1,
    }
})

export default Loader;