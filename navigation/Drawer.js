import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

//import other screens here
import BookmarkScreen from'../screens/BookmarkScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import FultonCountyStadiumScreen from '../screens/FultonCountyStadiumScreen';

import HomeStack from './HomeStack.js';
import BookmarkStack from './BookmarkStack.js';
import MapStack from './MapStack.js';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerStack = () => {
	return (
		<Drawer.Navigator screenOptions={{headerShown: false}} edgeWidth={500} initialRouteName="Home" >
			<Drawer.Screen name="Home" component={HomeStack} />
			<Drawer.Screen name="Bookmarks" component={BookmarkStack} />
			<Drawer.Screen name="Map" component={MapStack} />
			<Drawer.Screen name="Guided Tour" component={BookmarkScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerStack;