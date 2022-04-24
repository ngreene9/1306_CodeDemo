import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, Linking} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Make sure to inclue this export statement here or it won't import properly on App.js
export default FultonCountyStadiumScreenGuided;

function FultonCountyStadiumScreenGuided( {navigation} ) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (<Button onPress={() => navigation.navigate('Guided 3')} title="Next"/>)
        }, [navigation]);
    })
    return (

        <View style={[styles.container, {flexDirection: "column"}]}>
            
            <View style={{ flex: 3, backgroundColor: 'white' }}>
                <ScrollView style={{marginVertical: 14, marginHorizontal: 14}} >
                    <View styles={{flex: 1}}>
                        <Image
                          style={{
                            resizeMode: "contain",
                          }}
                          source={require('../images/fultonCounty.jpg')}
                        />
                    </View>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 18, color: 'grey'}}>
                    An aerial view of the newly constructed Fulton County Stadium
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratRegular', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    During his 1961 campaign for mayor of Atlanta, Ivan Allen Jr. promised to build a sports facility to attract a 
                    Major League Baseball team. After winning office, Allen chose a 47-acre plot in the Washington-Rawson neighborhood
                    for the building site, citing its proximity to the state capitol, downtown businesses, and major highways. 
                    {'\n'}{'\n'}
                    In 1964, Mayor Allen announced that an unidentified team had given him a verbal commitment
                    to move to Atlanta, provided a stadium was in place by 1966. Soon afterward, the prospective team was revealed to be the
                    Milwaukee Braves, who announced in October that they intended to move to Atlanta for the 1965 season.
                    {'\n'}{'\n'}
                    </Text>
                    <View styles={{flex: 1}}>
                        <Image
                          style={{
                            resizeMode: "contain",
                          }}
                          source={require('../images/allenBravesGame.png')}
                        />
                    </View>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 18, color: 'grey'}}>
                    Mayor Ivan Allen at the first Atlanta Braves game, 1966
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratRegular', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    The new stadium was built on the site of the cleared Washington-Rawson neighborhood,
                    which a half-century before had been a wealthy neighborhood home to Georgia's governor, among others, but which by the 1960s had fallen 
                    on hard times. Forty-seven dignitaries took part in a groundbreaking ceremony on April 15, 1964, and that November, the Braves signed 
                    a 25-year agreement to play there, beginning in 1966. Construction was completed on April 9, 1965, for $18 million, and that night the 
                    Milwaukee Braves and Detroit Tigers played an exhibition game in the stadium.
                    {'\n'}{'\n'}
                    On February 11, 1975, the stadium's
                    name was changed to the compound Atlanta-Fulton County Stadium after the county threatened to withdraw its financial support.
                    {'\n'}{'\n'}

                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});