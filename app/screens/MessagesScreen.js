import React, {useState} from 'react';
import { FlatList,StyleSheet } from 'react-native';

import ListItem from "../components/ListItem";
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';

const initialData=[
    {
        id:1,
        title:"Andrea Jeremiah",
        description:"Hello Sathish !",
        image:require("../assets/girl-4.jpg")
    }
] 



function MessagesScreen() {
    
    const [data, setData] = useState(initialData);
    const [refresh, setRefresh] = useState(false);

    function handleDelete(item){
        setData(data.filter((singleData)=>{
            if(singleData!==item)
                return singleData;
        }))
    }

    return (
        <Screen>

            <FlatList 
                data={data}
                keyExtractor={item=>item.id.toString()}
                renderItem={
                    ({item})=> 
                        <ListItem 
                            title={item.title}
                            subtitle={item.description}
                            image={item.image}
                            onPress={()=>{console.log("item clicked")}}
                            renderRightActions={()=><ListItemDelete onPress={()=>{handleDelete(item)}} />}
                        />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refresh}
                onRefresh={()=>{
                    setData([
                        {
                            id:1,
                            title:"Andrea Jeremiah",
                            description:"Hello Sathish !",
                            image:require("../assets/girl-4.jpg")
                        },
                        {
                            id:2,
                            title:"Sienna Santer",
                            description:"May I know who you are",
                            image:require("../assets/girl-1.jpg")
                        }
                    ])
                }
                    
                }

            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;