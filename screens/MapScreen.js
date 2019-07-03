import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// class Maps extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error:null,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//        (position) => {
//          console.log("wokeeey");
//          console.log(position);
//          this.setState({
//            latitude: position.coords.latitude,
//            longitude: position.coords.longitude,
//            error: null,
//          });
//        },
//        (error) => this.setState({ error: error.message }),
//        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//      );
//    }


//   render() {
//     if (this.state.latitude !== '' && this.state.longitude !== '') {
//       return (
//         <MapView
//           showsUserLocation={true}
//           style={{flex: 1}}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 1,
//             longitudeDelta: 1,
//           }}
//         />
//       );
//     } else {
//       <MapView
//           showsUserLocation={true}
//           style={{flex: 1}}
//           region={{
//             latitude: 49.203226787844116,
//             longitude: -0.33338964515555325,
//             latitudeDelta: 1,
//             longitudeDelta: 1,
//           }}
//         />
//     }
    
//   }
// }

export default function MapScreen() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={{flex: 1}}
      region={{
        latitude: 49.203226787844116,
        longitude: -0.33338964515555325,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
      customMapStyle={mapStyle}
    />
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
  headerTitleStyle: {
    textTransform: 'uppercase',
    letterSpacing: 1
  }
};

mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "saturation": -20
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#edf2f7"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
