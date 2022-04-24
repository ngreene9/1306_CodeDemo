import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

//Make sure to inclue this export statement here or it won't import properly on App.js
export default HomeScreen;

function HomeScreen( {navigation} ) {
    return (

    // <ImageBackground style={{flex: 1}}source={{
    //       uri: 'https://i.pinimg.com/originals/ad/d9/bf/add9bf15aa43b869e4da487ae23bae4d.jpg',
    //  }}>
    <ImageBackground 
    style={{flex: 1, justifyContent: 'center'}}
    source={{
        uri: 'https://i.pinimg.com/originals/ad/d9/bf/add9bf15aa43b869e4da487ae23bae4d.jpg',
   }} 
    resizeMode="cover">

     {/* <Text style={{textAlign: 'center', lineHeight: 560, fontWeight: 'bold', color: 'white', fontSize: 43, textShadowColor: 'black', textShadowOffset: {width: 1, height: 4 }, textShadowRadius: 10}}>
        Ivan Allen's Atlanta
      </Text> */}
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontWeight: '600', color: 'white', fontSize: 55, textShadowColor: 'black', textShadowOffset: {width: 1, height: 4 }, textShadowRadius: 10 }}>
          Ivan Allen's
        </Text>
        <Text style={{textAlign: 'center', fontWeight: '600', color: 'white', fontSize: 55, textShadowColor: 'black', textShadowOffset: {width: 1, height: 4 }, textShadowRadius: 10 }}>
          Atlanta
        </Text>
      </View>

     <View style={styles.container}>
        <TouchableOpacity
          //Add button functionality to navigate to guided tour page
          onPress={() => navigation.navigate('Guided Start')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});