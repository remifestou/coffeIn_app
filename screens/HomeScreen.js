import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const api_url = 'https://maps.googleapis.com/maps/api/place';
const latitude = '49.203226787844116';
const longitude = '-0.33338964515555325';
const key = 'AIzaSyC6N99U0C-6VCfHomzIVY08SBmcmuQSPrI';

class CardPlace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(api_url + '/nearbysearch/json?location=' + latitude + ',' + longitude + '&rankby=distance&type=cafe&key=' + key)
      .then(response => {
        return response.json()
      })
      .then((responseJson) => {
        this.setState({
          ...this.state,
          places: responseJson.results,
          isLoading: false
        })

      })
  }

  render() {
    if(!this.state.isLoading) {
      return (
        this.state.places.map((place) => {
          return (
            <Text>{place.name}</Text>
          )
        }
      ))
    } else {
      return (
        <Text>loading ...</Text>
      )
    }
  }
}

export default function HomeScreen() {
  return (
      <ScrollView style={styles.container}>
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
