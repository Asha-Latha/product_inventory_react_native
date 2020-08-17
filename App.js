import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>React Native! <Text>Style Inheritance </Text></Text>
      <Text>React Native is easy.Open up App.js to start working on your app!</Text>
      <Text>I can deploy for multiple devices!!!!</Text>
      <Text>Tunnel Works!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'pink',
    color:'blue'
  },
  textstyle:{
    color:'red',
    fontSize:22
  }
});
