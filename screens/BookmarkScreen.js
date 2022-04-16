import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Make sure to inclue this export statement here or it won't import properly on App.js
export default BookmarkScreen;

function BookmarkScreen( {navigation}) {
  return (
    <ScrollView>
        <View style={[styles.container, {flexDirection: 'column', backgroundColor: 'beige'},]} >
            <View style = {{height: '20%', width: '100%', justifyContent: 'center', padding: 1}}>
                <TouchableOpacity onPressOut={() => navigation.navigate("Fulton County Stadium")} style={{ flex: 1, borderWidth: 3, borderColor: 'black', alignItems: 'center', padding: 4}}>
                    <Text style={{fontFamily:'montserratBold', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    Fulton County Stadium
                    </Text>
                    <Image style={styles.image} source={require('../images/fultonCounty.jpg')}/>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    height: 140,
    width: 200,
    resizeMode: 'center',
  },
});