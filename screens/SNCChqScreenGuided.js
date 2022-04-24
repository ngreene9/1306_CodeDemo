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
export default SNCChqScreenGuided;

function SNCChqScreenGuided( {navigation} ) {

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (<Button onPress={() => navigation.navigate('Guided 5')} title="Next"/>)
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
                          source={require('../images/snccHQ.jpg')}
                        />
                    </View>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 18, color: 'grey'}}>
                    James Forman leads singing in the SNCC office on Raymond street in Atlanta
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratRegular', textAlign: 'center', fontSize: 20, color: 'black'}}>
                    SNCC's National Office in Atlanta was set up to help organize the organizers. The National Office was there
                    to help sustain the field staff, providing them with the tools and information they needed to do the work. The 
                    person behind the National Office structure was SNCC's executive secreatary, James Forman (pictured above). 
                    {'\n'}
                    </Text>
                    <Text style={{ fontFamily:'montserratLightItalic', textAlign: 'center', fontSize: 20, color: 'dimgrey'}}>
                    "I felt a deep responsibility to the field people, who were not as safe as I was in Atlanta. It was always
                    clear to me that our office in the cityi was, first and foremost, there to service the field and to provide
                    a link between them and the outside world." 
                    {'\n'}
                    - James Forman
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