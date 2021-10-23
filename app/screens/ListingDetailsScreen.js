import React, { useState } from 'react';
import { StyleSheet, View} from "react-native";
import { Image } from 'react-native-expo-image-cache';
import AppButton from '../components/AppButton';

import AppText from '../components/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/ListItem';
import ModalCustom from '../components/ModalCustom';
import colors from '../config/colors';
import defaultStyles from '../config/defaultStyles';

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    const [modalVisible, setModalVisible]=useState(false);
    // const [listedUser, setListedUser] = useState();

    // const getListedUser=async()=>{
    //     return await usersApi.getUserDetails(listing.userId);
    // }
    // useEffect(()=>{
    //     setListedUser(getListedUser());
    //     // console.log(listedUser);
    // },[]);
    return (
        <View>

            <Image style={styles.image} uri={listing.images[0].url} preview={{uri:listing.images[0].thumbnailUrl}} />
            <View style={styles.productDetails}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                
                <View style={styles.sellerContainer}>
                    <ListItem
                        image={require("../assets/girl-4.jpg")}
                        title="Andrea Jeremiah"
                        subtitle="5 Listings"
                    />
                </View>

                <AppButton title="Contact Seller" style={styles.contactButton} onPress={()=>setModalVisible(true)}/>

            </View>

            <View>
            <ModalCustom
                        visible={modalVisible}
                        close={()=>setModalVisible(false)}
                        // animationType="slide"
                        transparent={true}
                    >
                        
                        <View style={styles.modalContent}>
                            <AppText style={styles.modalHeader}> Contact Seller </AppText>
                            <AppText style={styles.smallText}>You can ask more details about the product directly from the seller here.</AppText>
                            <View>
                                <ContactSellerForm listing={listing} closeModal={()=>setModalVisible(false)} />
                            </View>
                            
                        </View>
                    </ModalCustom>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300
    },
    productDetails:{
        padding:20
    },
    title:{
        fontSize:20,
        fontWeight:"500"
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        marginVertical:10
    },
    sellerContainer:{
        marginVertical:20
    },
    contactButton:{
        borderRadius:10,
        height:50,
        // width:"80%"
    },
    modalHeader:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:20,
        alignSelf:"center"
    },
    modalContent:{
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingHorizontal:20,
        paddingVertical:30,
        justifyContent:"center",
        
    },
    smallText:{
        fontSize:15,
        textAlign:"center",
        color:defaultStyles.colors.medium
    }
})

export default ListingDetailsScreen;