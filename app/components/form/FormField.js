import React from 'react';
import { useFormikContext } from "formik";

import AppTextInput from '../AppTextInput';
import ErrorValidation from './ErrorValidation';

function FormField({fieldName, width,style, ...otherProps}) {

    const { setFieldTouched,setFieldValue, handleChange, errors,values, touched } = useFormikContext();

    return (
        <>
            <AppTextInput 
                onChangeText={(text)=>setFieldValue(fieldName,text)}
                onBlur={()=>setFieldTouched(fieldName)}
                value={values[fieldName]}
                width={width}
                style={style}
                {...otherProps}
            />
            <ErrorValidation visible={touched[fieldName]}>{errors[fieldName]}</ErrorValidation>

        </>
    );
}

export default FormField;