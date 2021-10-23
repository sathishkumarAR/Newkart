import React from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import { FormField, FormikForm, SubmitButtonFormik } from './form';
import messagesApi from "../api/messages";
import useAuthContext from '../hooks/useAuthContext';


const validationSchema= Yup.object().shape({
    message:Yup.string().required().min(2).label("Message")
})



function ContactSellerForm({ listing, closeModal }) {
    const {user} =useAuthContext();

    const handleSubmit= async({message:messageBody}, { resetForm })=>{
        // console.log(listing);
        Keyboard.dismiss();
        const message={
            title:user.name,
            body:messageBody
        }
       
        const response =await messagesApi.sendMessage(message, listing._id);

        if(!response.ok){
            console.log("Error ", response);
            return Alert.alert("Error","Couldn't send the message to seller. Please retry");
        }

        resetForm();
        closeModal();

        Notifications.scheduleNotificationAsync({
            content:{
                title:"Awesome!",
                body:"Your message was sent to the seller"
            },
            trigger:null
        });

    }


    return (
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS=="ios"?0:100} style={styles.container}>
            <FormikForm
                initialValues={{message:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormField 
                    fieldName="message"
                    maxLength={255}
                    multiline
                    numberOfLines={2}
                    placeholder="Type your message to seller..."
                />

                <SubmitButtonFormik title="Send Message" />
            </FormikForm>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})

export default ContactSellerForm;