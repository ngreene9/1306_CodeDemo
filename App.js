import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = { uri: 'https://www.georgiaencyclopedia.org/wp-content/uploads/2021/02/ivan-allen-jr_002-740x1080.jpg' };
const Stack = createNativeStackNavigator();

function HomeScreen({navigation} ) {
    return (

    <ImageBackground style={{flex: 1}}source={{
          uri: 'https://i.pinimg.com/originals/ad/d9/bf/add9bf15aa43b869e4da487ae23bae4d.jpg',
     }}>

     <Text style={{textAlign: 'center', lineHeight: '560', fontWeight: 'bold', color: 'white', fontSize: 43, textShadowColor: 'black', textShadowOffset: {width: 1, height: 4 }, textShadowRadius: 10}}>
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

function MapScreen() {
  return (
    <View style={mapStyles.container}>
      <MapView style={{alignSelf: 'stretch', height: '100%'}} 
      region={{
      latitude: 33.739,
      longitude: -84.389,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04,
      }}
      >
        <Marker coordinate={{latitude: 33.739, longitude: -84.389}} title='Fulton County Stadium' />
      </MapView>
    </View>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, 
  },
});
