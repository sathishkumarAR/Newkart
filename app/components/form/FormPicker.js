import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorValidation from './ErrorValidation';

function FormPicker({items, fieldName, width, PickerItemComponent,numberOfColumns,placeholder}) {

    const {errors, touched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <AppPicker 
                items={items}
                selectedItem={values[fieldName]}
                onSelectItem={(item)=> setFieldValue(fieldName, item)}
                placeholder={placeholder}
                width={width}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}

            />
            <ErrorValidation visible={touched[fieldName]}>{errors[fieldName]}</ErrorValidation>
        </>
    );
}

export default FormPicker;