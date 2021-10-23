import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from "../api/auth";
import { FormikForm, FormField, SubmitButtonFormik, ErrorValidation } from '../components/form';
import Loader from '../components/Loader';
import Screen from '../components/Screen';
import useAuthContext from '../hooks/useAuthContext';

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})


function LoginScreen() {

    const [error, setError] = useState();
    const {login} =useAuthContext();
    const [loading, setLoading]= useState(false);
    
    const handleSubmit=async({email, password})=>{
        Keyboard.dismiss();
        setLoading(true);
        const response= await authApi.login(email, password);
        setLoading(false);

        if(!response.ok)
            return setError(response.data.error);

        setError(undefined);
        // console.log(response.data)
        login(response.data);
    }


    return (
        <>
            <Loader visible={loading} style={styles.loader} />

            <Screen style={styles.container}>

                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>

                <FormikForm 
                    initialValues={{email:"", password:""}} 
                    onSubmit={handleSubmit} 
                    validationSchema={validationSchema}    
                >

                    <FormField 
                        iconName="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        textContentType="emailAddress" // works only for iOS
                        fieldName="email"
                    />
                    <FormField 
                        iconName="lock"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="password"
                        secureTextEntry
                        textContentType="password" // works only for iOS
                        fieldName="password"
                    />

                    <ErrorValidation visible={error}>{error}</ErrorValidation>

                    <SubmitButtonFormik title="Login" />

                </FormikForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
    },
    loader:{
        backgroundColor:"white",
        flex:1,
        opacity:0.7,
    }
})

export default LoginScreen;