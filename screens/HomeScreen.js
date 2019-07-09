import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native-tailwind';
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios'

const api_url = 'https://maps.googleapis.com/maps/api/place';
const latitude = '49.203226787844116';
const longitude = '-0.33338964515555325';
const key = 'AIzaSyC6N99U0C-6VCfHomzIVY08SBmcmuQSPrI';

// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAANdb53Ddbl06z1sVjbQ6tie89aUmqAoBGr_gRxdHUIyIdEGN8WiG3Mxfwh-fIQRuKX2trDeiWH8EzfARx4wEG6uFFnqILAl3c6ss5A59v-ydFNIxLBebi-onUs9SY3YjYEhCj1RJmt2cqh2A9h93wkjv1GhTLshcrC9aEbGoE8cHRh_UJxWeAYQ&key=

class CardPlace extends React.Component {
  constructor(props) {
    super(props)
    this.placesId = []
    this.placesPhotos = []
    this.placesDetails = []
    this.state = {
      isLoading: true
    }
  }

  async getPlaces() {
    const places = await axios.get(api_url + '/nearbysearch/json?location=' + latitude + ',' + longitude + '&rankby=distance&type=cafe&fields=opening_hours&key=' + key)
    const placesId = 
      await places.data.results.map((place) => {
        this.placesId.push({
          id: place.place_id,
        })
      }
    )
    const getDetails = async (id_place) => {
      const place = await axios.get(api_url + '/details/json?placeid=' + id_place + '&fields=name,formatted_phone_number,formatted_address&key=' + key)
      return place.data.result
    }
    const placesDetails = 
      await this.placesId.map((place) => {
        return getDetails(place.id)
      })
    this.placesDetails =  await Promise.all(placesDetails)
    console.log(this.placesId)
  }

  componentDidMount() {
    this.getPlaces().then(() => { 
      this.setState({
        ...this.state,
        isLoading: false
      })
    })
  }

  render() {
    if(!this.state.isLoading) {
      return (
        <FlatList
          data={this.placesDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => 
            <View className='rounded-lg bg-color-white'>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipOFBt3W506n_9gn9VDjKLmfBEqAo9SNsCBprIE5=s1600-w400' }}
                style={{ width: '100%', height: 400 }}
              />
              <Text className="text-blue-200">{item.name} • {item.formatted_address} • {item.formatted_phone_number}</Text>
            </View>
          }
        />
      )
    } else {
      return (
        <Text>loading ...</Text>
      )
    }
    // return (
    //   <Text>Work in progress</Text>
    // )
  }
}

export default function HomeScreen() {
  return (
      <ScrollView className='p-4' style={styles.container}>
        <CardPlace />
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'CoffeeIn',
  headerTitleStyle: {
    textTransform: 'uppercase',
    letterSpacing: 1
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
  }
});
