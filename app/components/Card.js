import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from "react-native";
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ image,thumbnail, title, subtitle, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.card} >
                <Image style={styles.image} uri={image} preview={{uri:thumbnail}} tint='light' />
                <View style={styles.cardContent}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"white",
        marginBottom:20,
        overflow:"hidden"
        
    },
    cardContent:{
        padding:20
    },
    image:{
        width:"100%",
        height:200,
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    title:{
        marginBottom:7,
    }
})

export default Card;