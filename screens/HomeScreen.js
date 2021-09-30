import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { setDestination , setOrigin } from '../slices/navSlice';
const HomeScreen = () => {

    const dispatch =  useDispatch()
    return (
        <SafeAreaView style={tw`android: bg-white h-full`}>
        <View style={ tw`android: p-5`}>
            <Image
            source={{ uri: 
            "https://links.papareact.com/gzs"
             }}
             style={{
                 height: 100,
                 width: 100,
                 resizeMode: "contain"
             }}
            
            
            
            />
           
             <GooglePlacesAutocomplete
             styles={{
                 container:{
                     flex:0,
                     gffgColor:"#808080"
                 },
                 textInput:{
                     fontSize:15
                 }
             }}

             nearbyPlacesAPI="GooglePlacesSearch"
             debounce={400}
             fetchDetails={true}
      placeholder='where from'
      minLength={2}
      returnKeyType={"search"}
      enablePoweredByContainer={false}

      onPress={(data, details = null) => {
         dispatch(setOrigin({
             location: details.geometry.location,
             description: data.description
         }))

         dispatch(setDestination(null))
      }}
     
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
            <NavOptions/>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{ 
    
    marginTop: StatusBar.currentHeight
    }
})
