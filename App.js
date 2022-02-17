import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

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

//Screen of the Unguided Tour Map
function MapScreen( {navigation}) {
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

        <Marker
        coordinate={{latitude: 33.739, longitude: -84.389}} 
        title={'Fulton County Stadium'}
        description={'Original home of both the Atlanta Braves and Atlanta Falcons'}
        >
          <Callout tooltip>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Fulton County Stadium')}>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>Fulton County Stadium</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('./images/fultonCounty.jpg')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

//Screen for Fulton County Stadium
function FultonCountyStadiumScreen( {navigation} ) {
    return (

        <View style={[styles.container, {flexDirection: "column"}]}>
            <View styles={{flex: 1}}>
            <Image
              style={{
                resizeMode: "contain",
              }}
              source={require('./images/fultonCounty.jpg')}
            />
            </View>
            <View style={{ flex: 3, backgroundColor: 'white' }}>
            <ScrollView style={{marginVertical: 14, marginHorizontal: 14}} >
            <Text style={{ fontFamily:'Montserrat_400Regular', textAlign: 'center', fontSize: 20, color: 'black'}}>
            During his 1961 campaign for mayor of Atlanta, Ivan Allen Jr. promised to build a sports facility to attract a 
            Major League Baseball team. After winning office, Allen chose a 47-acre plot in the Washington-Rawson neighborhood
            for the building site, citing its proximity to the state capitol, downtown businesses, and major highways. Allen and The Atlanta 
            Journal sports editor Furman Bisher attempted to persuade Charlie Finley, owner of the Kansas City Athletics, to move his team to Atlanta. 
            Finley was receptive and began discussing stadium design plans with Allen. However, the deal ended in July 1963 when the American 
            League did not approve the move.{'\n'}{'\n'}
            In 1964, Mayor Allen announced that an unidentified team had given him a verbal commitment
            to move to Atlanta, provided a stadium was in place by 1966. Soon afterward, the prospective team was revealed to be the
            Milwaukee Braves, who announced in October that they intended to move to Atlanta for the 1965 season. However, court battles 
            kept the Braves in Milwaukee for one last season.{'\n'}{'\n'}
            The new stadium was built on the site of the cleared Washington-Rawson neighborhood,
            which a half-century before had been a wealthy neighborhood home to Georgia's governor, among others, but which by the 1960s had fallen 
            on hard times. Forty-seven dignitaries took part in a groundbreaking ceremony on April 15, 1964, and that November, the Braves signed 
            a 25-year agreement to play there, beginning in 1966. Construction was completed on April 9, 1965, for $18 million, and that night the 
            Milwaukee Braves and Detroit Tigers played an exhibition game in the stadium. During that year the International League's Atlanta 
            Crackers, whose previous home had been Ponce de Leon Park, played their final season in Atlanta Stadium.{'\n'}{'\n'}
            In 1966, both the National League's
            transplanted Braves and the National Football League's Atlanta Falcons, an expansion team, began to use the facilities. In 1967, the Atlanta
            Chiefs of the National Professional Soccer League (re-formed as the North American Soccer League in 1968) began the first of five seasons played
            at the stadium. The venue hosted the second match of the NASL Final 1968 and two matches of the NASL Final 1971.{'\n'}{'\n'}
            On February 11, 1975, the stadium's
            name was changed to the compound Atlanta-Fulton County Stadium after the county threatened to withdraw its financial support. However, the 
            official website of the Atlanta Braves maintains that the name change occurred after Ted Turner purchased the team in 1976.{'\n'}{'\n'}
            The Falcons moved to 
            the Georgia Dome in 1992, while the Braves had to wait until the Olympic Stadium from the 1996 Summer Olympics was transformed into Turner Field to 
            move out at the beginning of the 1997 season. The stadium sat 60,606 for football and 52,007 for baseball. The baseball competition for the 1996 Summer 
            Olympics was held at Atlanta-Fulton County Stadium while the Braves were on a three-week road trip.
            </Text>
            </ScrollView>
            </View>
        </View>
    );
}

//Controls Navigation, Main Function
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
