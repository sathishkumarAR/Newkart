import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem(props) {
    return (
        <Swipeable renderRightActions={props.renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={props.onPress}>
                        <View style={styles.container}>

                            {props.IconComponent}
                            {props.image && <Image
                                                style={styles.image}
                                                source={props.image}/>
                            }

                            <View style={styles.detailsContainer}>
                                <AppText style={styles.title} numberOfLines={1}>{props.title}</AppText>
                                {props.subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{props.subtitle}</AppText>}
                            </View>

                            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />

                        </View>
            </TouchableHighlight>
        </Swipeable>
        
        
    );
}

const styles = StyleSheet.create({
    container:{
       flexDirection:"row",
       alignItems:"center",
       paddingVertical:10,
       paddingHorizontal:15,
       backgroundColor:"white"
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:"center"
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
    },
    title:{
        fontSize:17,
        fontWeight:"500"
    },
    subtitle:{
        color:"#6e6969",
        fontSize:15
    }
})

export default ListItem;