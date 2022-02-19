import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

//import other screens here
import MapScreen from './screens/MapScreen';
import FultonCountyStadiumScreen from './screens/FultonCountyStadiumScreen';

const Stack = createNativeStackNavigator();

function HomeScreen( {navigation} ) {
    return (

    <ImageBackground style={{flex: 1}}source={{
          uri: 'https://i.pinimg.com/originals/ad/d9/bf/add9bf15aa43b869e4da487ae23bae4d.jpg',
     }}>

     <Text style={{textAlign: 'center', lineHeight: 560, fontWeight: 'bold', color: 'white', fontSize: 43, textShadowColor: 'black', textShadowOffset: {width: 1, height: 4 }, textShadowRadius: 10}}>
        Ivan Allen's Atlanta
      </Text>

     <View style={styles.container}>
        <TouchableOpacity
          //Add button functionality to navigate to guided tour page
          style={{ backgroundColor: 'beige', borderWidth: 2, borderBottomWidth: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8, width: 280, height: 46 }}>
          <Text style={{ textAlign: 'center', fontSize: 28, color: 'black', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: {width: 1, height: 1} }}>Take Our Guided Tour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          style={{ backgroundColor: 'beige', borderWidth: 2, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, width: 280, height: 46 }}>
          <Text style={{ textAlign: 'center', fontSize: 28, color: 'black', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: {width: 1, height: 1} }}>Explore on Your Own</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />

     </View>
    </ImageBackground>
  );
}


//Controls Navigation, Main Function
//Add new screens within the return statement as <Stack.Screen>, with the component being the name of the class the screen belongs to
export default function App() {
  
  let [fontsLoaded]=useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold
  });

  return (
    <NavigationContainer style={{headerTransparent: true}}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Fulton County Stadium" component={FultonCountyStadiumScreen} />
      </Stack.Navigator>
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
