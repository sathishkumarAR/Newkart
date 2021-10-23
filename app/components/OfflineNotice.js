import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo"
import AppText from './AppText';
import defaultStyles from '../config/defaultStyles';
import Constants from 'expo-constants';

function OfflineNotice() {

    const netInfo = useNetInfo();
    // console.log(netInfo);

    if(netInfo.type!=="unknown" && netInfo.isInternetReachable===false){
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:defaultStyles.colors.primary,
        position:"absolute",
        top:Constants.statusBarHeight,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1,
        elevation:Platform.OS=="android"? 1:0
    },
    text:{
        color:"white"
    }
})

export default OfflineNotice;