import * as React from 'react';
import CustomHeader from '../components/CHeader'
import {Text, View, SafeAreaView } from 'react-native'
export default function Screen2({navigation}) {
  return (
    <SafeAreaView>
    <CustomHeader title="Screen 3" isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize:24, marginBottom:10,marginTop:20}}>Welcome To Second Screen</Text>
    </View>
    </SafeAreaView>
  );
}