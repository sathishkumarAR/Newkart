import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image , View, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

import colors from '../config/colors';


function ImageInput({imageURI, onChangeImage}) {

    const handlePress=()=>{
        if(!imageURI){
            selectImage();
        }
        else{
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                {text:"Yes", onPress: ()=>{ onChangeImage(imageURI)}},
                {text:"No"}
            ])
        }
    }

    const selectImage= async ()=>{

        try {
    
          const request= await ImagePicker.requestMediaLibraryPermissionsAsync();
          if(!request.granted){
            Alert.alert("You need to give storage permission to upload images!");
            return;
          }
    
          const result= await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images, //default value\
              quality: 0.5
          });

          if(!result.cancelled){
            //   console.log("image added")
              onChangeImage(result.uri);
          }
          
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>

            <View style={styles.container}>
                { imageURI ? 
                     
                    <Image source={{uri:((typeof imageURI)=="string" ? imageURI:imageURI.uri)}} style={styles.image} />
                    :
                    <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />
                }

            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:15,
        height:100,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    image:{
        height:"100%",
        width:"100%",
        
    }
})

export default ImageInput;