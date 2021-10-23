import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from "expo-constants";

function Screen(props) {
    return (
        <SafeAreaView style={[styles.screen,props.style]}>
            <View style={styles.view}>{props.children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight+5,
        flex:1,
    },
    view:{
        flex:1
    }
})

export default Screen;