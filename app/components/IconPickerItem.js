import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function IconPickerItem({ item, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} size={60} iconName={item.iconName} />
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    text:{
        marginTop:5,
        textAlign:"center"

    }
})

export default IconPickerItem;