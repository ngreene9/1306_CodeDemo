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
export default SummerhillRiotScreen;

function SummerhillRiotScreen( {navigation} ) {
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
                          source={require('../images/allenSummerhill.png')}
                        />
                    </View>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 18, color: 'grey'}}>
                    An image clipped from a newspaper showing Allen right before riot begins. The picture shows the African American
                    protestors surrounding Allen, who looks straight ahead calmly.
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratRegular', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    The Summerhill Riot, also known as the Atlanta Rebellion, is a series of events that began on 
                    September 6, 1966 in the majority black neighborhood of Summerhill following the police shooting of 
                    an unarmed black man, Harold Prather.
                    {'\n'}{'\n'}
                    A group of Summerhill residents, which grew to over a thousand
                    people, gathered together in response to the shooting to protest longterm local problems related to 
                    ongoing inequities, including discriminatory policing, poor housing, inadequate public services, the 
                    urban renewal policies that had afffected the neighborhood, and the recent construction of the 
                    Atlanta-Fulton County Stadium on the edge of Summerhill. 
                    {'\n'}{'\n'}
                    The Student Nonviolent Coordinating Committee (SNCC),
                    which had been active in Atlanta since its founding in 1960, became involved when members of the 
                    organization joined the protests. A heavy police presence was met with resistance by protestors, 
                    which resulted in the image of the events as a "riot." 
                    {'\n'}{'\n'}
                    As the situation escalated, Mayor Allen visited 
                    the neighborhood of Summerhill to address protestors directly. Allen placed blame for the events directly
                    on SNCC. Members of SNCC, including Carmichael, would be arrested soon after. The Summerhill uprising was 
                    reported in the national media and Mayor Allen would receive widespread praise for his response.
                    {'\n'}{'\n'}
                    A chapter in Allen's memoir, Mayor: Notes on the Sixties, titled "Riot" provides his account of the events in Summerhill.
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