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
export default FultonCountyStadiumScreen;

function FultonCountyStadiumScreen( {navigation} ) {
    return (

        <View style={[styles.container, {flexDirection: "column"}]}>
            <View styles={{flex: 1}}>
            <Image
              style={{
                resizeMode: "contain",
              }}
              source={require('../images/fultonCounty.jpg')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});