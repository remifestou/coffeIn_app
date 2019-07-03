import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-tailwind'

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}></ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Search',
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
