import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorValidation from './ErrorValidation';

function FormImagePicker({fieldName}) {

    const {values, errors, touched, setFieldValue } = useFormikContext();


    const handleAddImage= (imageURI)=>{
        setFieldValue(fieldName, [...values[fieldName], imageURI]);
    }

    const handleRemoveImage = (imageURI)=>{
        setFieldValue( fieldName, values[fieldName].filter((uri)=>{
                                        if(uri !== imageURI)
                                        return uri;
                                    })
        )
    }

    return (
        <>
            <ImageInputList 
                imageURIs={values[fieldName]}
                onAddImage={handleAddImage}
                onRemoveImage={handleRemoveImage}

            />
            <ErrorValidation visible={touched[fieldName]}>{errors[fieldName]}</ErrorValidation>

        </>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})

export default FormImagePicker;