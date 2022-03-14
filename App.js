import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat';
//import { useFonts } from 'expo-font';
import useFonts from'./useFonts.js';
import * as Font from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

//import other screens here
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen';
import FultonCountyStadiumScreen from './screens/FultonCountyStadiumScreen';

import HomeStack from './navigation/HomeStack.js';
import DrawerStack from './navigation/Drawer.js';
import BookmarkStack from './navigation/BookmarkStack.js';
import MapStack from './navigation/MapStack.js';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

/*
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Fulton County Stadium" component={FultonCountyStadiumScreen} />
         </Stack.Navigator>
    );
}
*/
//Controls Navigation, Main Function
//Add new screens within the return statement as <Stack.Screen>, with the component being the name of the class the screen belongs to
export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const LoadFonts = async () => {
    await useFonts();  // Here we will have to await the call
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
   
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
    
  );
}

//styles contain default info for styling for text, shapes, viewboxes, etc
//You can write out all the details here as a style constant and then use it later for neater code formatting when you have a component used multiple times that should have the same appearance (like text)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding:15,
    width: 150,
  },
  arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
  },
  arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
  },
  name: {
        fontSize: 16,
        marginBottom: 5,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, 
  },
  image: {
        width: 120,
        height: 80,
  },
});
