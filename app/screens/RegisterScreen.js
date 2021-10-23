import React, { useState } from 'react';
import { StyleSheet, Image, Keyboard } from 'react-native';
import * as Yup from "yup";


import { ErrorValidation, FormField, FormikForm, SubmitButtonFormik } from '../components/form';
import Screen from '../components/Screen';
import authApi from "../api/auth";
import useAuthContext from '../hooks/useAuthContext';
import Loader from "../components/Loader"



const initialValues={
    name:"",
    email:"",
    password:"",
    // confirmPassword:""
}
const validationSchema=Yup.object().shape({
    name:Yup.string().required().min(2).label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
    // confirmPassword:Yup.string().required().min(4).label("Confirm Password")
})

function RegisterScreen() {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const {login} = useAuthContext();

    const handleSubmit=async(userData)=>{
        Keyboard.dismiss();
        setError(undefined);
        setLoading(true);
        // console.log(email, name, password);
        const response = await authApi.register(userData);
        setLoading(false);
        // console.log(response);
        if(!response.ok) {
            if(response.data)
             return setError(response.data.error);

            return setError("An unexpected error occurred. Please Retry");
        }

        setLoading(true);
        const {ok,data: token} =await authApi.login(userData.email, userData.password);
        setLoading(false);
        if(ok){
            login(token);
        }

    }


    return (
        <>
            <Loader  visible ={loading} style={styles.loader} />
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>

                <FormikForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <FormField 
                        fieldName="name"
                        iconName="account"
                        placeholder="Name"
                        autoCorrect={false}
                    />

                    <FormField 
                        fieldName="email"
                        placeholder="Email"
                        iconName="email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />

                    <FormField 
                        fieldName="password"
                        placeholder="Password"
                        iconName="lock"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        textContentType="password"
                    />
                    {/* <FormField 
                        fieldName="confirmPassword"
                        placeholder="Confirm Password"
                        iconName="lock"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        textContentType="password"
                    /> */}

                    <ErrorValidation visible={error}>{error}</ErrorValidation>

                    <SubmitButtonFormik title="Register" />


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

export default RegisterScreen;