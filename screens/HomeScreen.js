import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
      <ScrollView style={styles.container}></ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'CoffeIn',
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
