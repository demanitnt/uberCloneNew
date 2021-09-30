import React from 'react'
import { StyleSheet,Image, Text, View, FlatList, TouchableOPacity, Button, Pressable } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => {

  const navigation = useNavigation();
    const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title:"Order food",
        image:"https://links.papareact.com/28w"
    }
]
    return (
   
      <FlatList
      horizontal
      data = {data}
      keyExtractor = {(item) => item.id}
      renderItem ={( {item}) => 
      (
         <Pressable 
         style={tw`p-5 bg-gray-200 m-2`}
         onPress={()=> navigation.navigate(item.screen)}>
        <View >
          <Image 
          source={{ uri:item.image}}
          style={{ width: 120, height : 120, resizeMode: "contain"}}
          
          />
          <Text style={tw` pl-5 text-lg font-semibold`}>{item.title}</Text>
          <FontAwesome5 name="arrow-circle-right" 
          style={tw`pl-10 `}
          size={30} color="black" />
        </View>
          </Pressable>
      )}

      />
    

    )
}

export default NavOptions


