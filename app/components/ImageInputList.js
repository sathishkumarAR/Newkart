import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageURIs=[] , onAddImage, onRemoveImage}) {
    const scrollView = useRef();
    const {width} = useWindowDimensions();

    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={(currentWidth,height)=>{
                if(currentWidth>=width){
                    scrollView.current.scrollToEnd();
                }
                
            }}>

                <View style={styles.container}>
                
                        {
                            imageURIs.map((imageURI, index)=>(
                                
                                <View style={styles.image} key={index}>
                                    <ImageInput
                                        imageURI={imageURI}
                                        onChangeImage={()=>onRemoveImage(imageURI)}

                                    />
                                </View>
                            )) 
                        }
                    
                    <ImageInput 
                        onChangeImage={(uri)=>onAddImage(uri)}
                        
                    />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    image:{
        marginRight:10
    }
})

export default ImageInputList;