import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function ListItemDelete(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={30} color="white" />
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:70,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default ListItemDelete;