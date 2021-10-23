import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useAuthContext from '../hooks/useAuthContext';
import routes from '../navigation/routes';

const items=[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
        },
        targetScreen:"My Listings"

    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        },
        targetScreen:routes.MESSAGES
    }
]

function AccountScreen({ navigation }) {

    const { user, logOut }= useAuthContext();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title= {user.name}
                    subtitle= {user.email}
                    image={require("../assets/girl-4.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={items}
                    keyExtractor={item=>item.title}
                    renderItem={({item})=> (
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    iconName={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={()=>navigation.navigate(item.targetScreen)}
                        />
                        )
                    }
                    
                    // ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <ListItem 
                title="Log out"
                IconComponent={
                    <Icon 
                        iconName="logout"
                        backgroundColor="#ffe66d"
                    />
                }
                onPress={logOut}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})

export default AccountScreen;