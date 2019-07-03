import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}></ScrollView>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
  headerTitleStyle: {
    textTransform: 'uppercase',
    letterSpacing: 1
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#EDF2F7',
  },
});
