import React, { useState } from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';
import FlatPickerItem from './FlatPickerItem';

function AppPicker({
    iconName, 
    placeholder, 
    items, 
    selectedItem, 
    onSelectItem, 
    numberOfColumns=1,
    width="100%",
    PickerItemComponent=FlatPickerItem
}) {
    const [modalVisible, setModalVisible]= useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

                <View style={[styles.container, {width} ]} >
                    {iconName && <MaterialCommunityIcons name={iconName} size={20} color={defaultStyles.colors.medium} style={styles.icon}  />}
                    
                    {
                        selectedItem ? 
                            <AppText style={styles.text}>{selectedItem.label}</AppText>
                            :
                            <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }
                    
                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={defaultStyles.colors.medium}  
                    />

                </View>

            </TouchableWithoutFeedback>
            
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
                <FlatList 
                    data={items}
                    keyExtractor={(item)=>item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item})=>
                        <PickerItemComponent 
                            item={item}
                            onPress={()=>{
                                setModalVisible(false);
                                onSelectItem(item);
                            }
                            }
                        />
                    }
                />
            </Modal>
            
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10,
        alignItems:"center"
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1
    }

})

export default AppPicker;