import React, { useState } from 'react';
import * as Yup from "yup";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useHeaderHeight } from "@react-navigation/elements";


import { FormikForm, FormField, FormPicker, SubmitButtonFormik } from '../components/form';
import Screen from '../components/Screen';
import IconPickerItem from '../components/IconPickerItem';
import FormImagePicker from '../components/form/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
import uploadImage from '../components/UploadImage';
import useAuthContext from '../hooks/useAuthContext';

const initialValues={
    title:"",
    price:"",
    description:"",
    category:null,
    images:[]
}

const categories=[
    {label:"Furniture", value:1, backgroundColor:"#eb6365", iconName:"floor-lamp"},
    {label:"Clothing", value:2, backgroundColor:"#83d173", iconName:"shoe-heel"} ,
    {label:"Electronics", value:3, backgroundColor:"#ed91e1", iconName:"speaker"},
    {label:"Cars", value:4, backgroundColor:"#fcba03", iconName:"car"} ,
    {label:"Cameras", value:5, backgroundColor:"#737cd1", iconName:"camera"},
    {label:"Sports", value:6, backgroundColor:"#cc876c", iconName:"cricket"},
    {label:"Books", value:7, backgroundColor:"#ad73d1", iconName:"book-open-variant"} ,
    {label:"Movies & Music", value:8, backgroundColor:"#73ced1", iconName:"headphones"} ,
    {label:"Other", value:9, backgroundColor:"#a8a7a8", iconName:"checkbox-blank-outline"}
]

const validationSchema= Yup.object().shape({
    title:Yup.string().required().min(2).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().nullable().required().label("Category"),
    images:Yup.array().min(1,"Please select atleast one image")
})



function AddListingScreen({navigation}) {

    const location = useLocation();
    const [uploadScreenVisible, setUploadScreenVisible]= useState(false);
    const [progress, setProgress]=useState(0);
    const [done, setDone]= useState(false);
    const headerHeight= useHeaderHeight();
    const {user}= useAuthContext();

    const uploadProgress=(progress)=>{
        setProgress(progress);
    }

    const handleSubmit= async (listing, resetForm)=>{
        setProgress(0);
        setDone(false);
        setUploadScreenVisible(true);
        // console.log(listing);
        listing.location=location;
        listing.userId=user.userId;

        uploadImage(listing.images,async(imagesArray)=>{
            listing.images=imagesArray;
            // console.log(listing);
            const response =await listingsApi.addListing({...listing}, uploadProgress);
            // console.log(response);
            // const response = await axios.post("http://192.168.1.6:3000/listings",listing,{onUploadProgress:(progress)=>console.log(progress)});
            // console.log(response);
            
            // fetch("http://192.168.1.6:3000/listings",{
            //     method:"post",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify({
            //         ...listing,
            //         userId:user.userId
            //     })
            // })
            // .then(res=>res.json())
            // .then(result=>{
            //     console.log("Saved Successfully");
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
            
            if(!response.ok){
                setUploadScreenVisible(false);
                resetForm();
                return alert("Could not add the listing. Please retry");
            }else{
                setDone(true);
                setTimeout(()=>{
                    resetForm();
                    navigation.navigate("Feed");
                },500)
            }
        });
    }
    

    return (
        <Screen style={styles.container}>

            <UploadScreen done={done} onDone={()=>setUploadScreenVisible(false)} visible={uploadScreenVisible} progress={progress} />
            <KeyboardAvoidingView keyboardVerticalOffset = {headerHeight + Constants.statusBarHeight} behavior={Platform.OS==='ios'?"padding":""}>
               <ScrollView>
                <FormikForm
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm })=>handleSubmit(values,resetForm)}
                    validationSchema={validationSchema}
                >

                    <FormImagePicker 
                        fieldName="images"
                    />

                    <FormField 
                        fieldName="title"
                        placeholder="Title"
                        maxLength={255}

                    />

                    <FormField 
                        fieldName="price"
                        placeholder="Price"
                        keyboardType="numeric"
                        maxLength={8}
                        width={120}
                    />

                    <FormPicker 
                        fieldName="category"
                        items={categories}
                        placeholder="Category"
                        width="50%"
                        numberOfColumns={3}
                        PickerItemComponent={IconPickerItem}
                    />

                    <FormField 
                        fieldName="description"
                        maxLength={255}
                        placeholder="Description"
                        multiline
                        numberOfLines={3}

                    />

                    <SubmitButtonFormik title="Post" />


                </FormikForm>
                </ScrollView>
            </KeyboardAvoidingView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})

export default AddListingScreen;