import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

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

        <Marker
        coordinate={{latitude: 33.739, longitude: -84.389}} 
        title={'Fulton County Stadium'}
        description={'Original home of both the Atlanta Braves and Atlanta Falcons'}
        >
          <Callout tooltip>
            <View>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>Fulton County Stadium</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('./images/fultonCounty.jpg')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

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