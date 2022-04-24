import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, Button, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

//import other screens here
import FultonCountyStadiumScreenGuided from '../screens/FultonCountyStadiumScreenGuided';
import SummerhillRiotScreenGuided from '../screens/SummerhillRiotScreenGuided';
import SNCChqScreenGuided from '../screens/SNCChqScreenGuided';
import MlkFuneralScreenGuided from '../screens/MlkFuneralScreenGuided';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headershown:false}} initialRouteName="Guided Start">
            <Stack.Screen name="Guided Start" component={SummerhillRiotScreenGuided} options={{headerTitle: 'Summerhill Riots', gestureEnabled: false}}/>
            <Stack.Screen name="Guided 2" component={FultonCountyStadiumScreenGuided} options={{headerTitle: 'Fulton County Stadium', gestureEnabled: false}}/>
            <Stack.Screen name="Guided 3" component={MlkFuneralScreenGuided} options={{headerTitle: 'MLK Funeral', gestureEnabled: false}}/>
            <Stack.Screen name="Guided 4" component={SNCChqScreenGuided} options={{headerTitle: 'SNCC Headquarters', gestureEnabled: false}}/>
         </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

export default HomeStack;