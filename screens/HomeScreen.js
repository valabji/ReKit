import * as React from 'react';
import {Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize:24, marginBottom:10,marginTop:20}}>Welcome To Home Screen</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
