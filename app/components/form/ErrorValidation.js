import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

function ErrorValidation({ children, visible }) {
    if(!children || !visible){
        return null;
    }

    return (
        <AppText style={styles.error}>{children}</AppText>
    );
}

const styles = StyleSheet.create({
    error:{
        fontSize:15,
        paddingLeft:10,
        color:"red"
    }
})

export default ErrorValidation;