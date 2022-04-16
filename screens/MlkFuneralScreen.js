import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Make sure to inclue this export statement here or it won't import properly on App.js
export default MlkFuneralScreen;

function MlkFuneralScreen( {navigation} ) {
    const [bookmarkIcon, setBookMarkIcon ] = React.useState(require('../images/BookmarkHollow.png'));

    React.useLayoutEffect(() => {
        navigation.setOptions({
             headerRight: () => (
             <TouchableOpacity onPress={() => setBookMarkIcon(bookmarkIcon => require('../images/BookmarkSolid.png'))}>
               <Image 
                 style={{width: 30, height: 30}}
                 source={bookmarkIcon} 
                />
             </TouchableOpacity>
              ),
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
                          source={require('../images/mlkFuneral.png')}
                        />
                    </View>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 18, color: 'grey'}}>
                    Citizens of Atlanta fill the streets for over 4 miles, joining together to honor the life of Dr. Martin Luther King Jr.
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratRegular', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    Like many others, Mayor Allen mourned the assassination of Martin Luther King Jr. and feared for its implications. Mayor
                    Allen organized a funeral procession that began on Auburn Avenue in the heart of the city and made its way through Atlanta
                    before concluding at Morehouse's campus
                    {'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 20, color: 'dimgrey'}}>
                    "The assasination of Dr. Martin Luther King Jr. Takes from Atlanta one of its greatest citizens of all time, who
                    honored his home city in the eyes of all the world.
                    {'\n'}{'\n'}
                    This senseless act of violence takes from our nation one of its greatest leaders of all time in the cause of human
                    brotherhood and racial amity, and this tragic misdeed takes from our world one of its greatest advocates of the cause of peace
                    among all nations and all races.
                    {'\n'}{'\n'}
                    Although the physical presence of this eminent American has been torn from us, his soul will go on marching on to inspire all Americans
                    to achieve the goal of equal justice, equal opportunity, and equal citizenship for each and every American, regardless of race, creed, or color.
                    {'\n'}{'\n'}
                    Therefore, I, Ivan Allen Jr., Mayor of the City of Atlanta, do hereby proclaim Monday, April 8, as Martin Luther King Jr. Day of Mourning and call
                    upon all citizens to observe that day in honor of the memory of our eminent fellow citizen and to join with me in praying that, with God's help,
                    our nation may attain the goal of complete racial justice and recial equality for which he gave his life."
                    {'\n'}{'\n'}
                    - Ivan Allen Jr.
                    {'\n'}
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