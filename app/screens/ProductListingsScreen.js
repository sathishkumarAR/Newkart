import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MaterialIcons} from "@expo/vector-icons"

import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Loader from '../components/Loader';
import useApi from '../hooks/useApi';



// const products=[
//     {
//         id:1,
//         title:"Red Tshirt for sale!",
//         price:100,
//         image:require("../assets/red-tshirt.jpg")
//     },
//     {
//         id:2,
//         title:"Beautiful flower pot",
//         price:200,
//         image:require("../assets/pot-2.jpg")
//     }
// ]





function ProductListingsScreen({ navigation }) {

    const {data:products, error, loading, request:loadProducts} =useApi(listingsApi.getListings);
    const [defaultLoader, setDefaultLoader]= useState(false);

    useEffect(()=>{
        loadProducts();
    },[]);

  
    return (
        <Screen style={styles.screen}>

            {
                error && 
                <View style={styles.errorContainer}>
                    <MaterialIcons name="error-outline" size={60} />
                    <AppText style={styles.errorText}>Sorry, couldn't retrieve the listings</AppText>
                    <AppButton title="Retry" onPress={loadProducts} />            
                </View>
            }

            <Loader style={styles.loader} visible={!defaultLoader && loading } />

            {
                !error &&
                    <FlatList 
                        data={products}
                        keyExtractor={product=>product._id.toString()}
                        renderItem={({item})=>(
                            <Card 
                                title={item.title}
                                subtitle={"$"+item.price}
                                image={item.images[0].url}
                                thumbnail={item.images[0].thumbnailUrl}
                                onPress={()=> navigation.navigate(routes.LISTING_DETAILS,item)}
                            />
                        )}
                        refreshing={defaultLoader}
                        onRefresh={async()=>{
                            setDefaultLoader(true);
                            await loadProducts();
                            setDefaultLoader(false);
                            }}
                    />
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light,
        paddingHorizontal: 10,
    },
    errorContainer:{
        width:"80%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        flex:1,
        // marginTop:"30%"
    },
    errorText:{
        marginVertical:10,
        fontSize:16
    },
    loader:{
        flex:1,
        justifyContent:"center",
        
    }
})

export default ProductListingsScreen;