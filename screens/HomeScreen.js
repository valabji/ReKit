import * as React from 'react';
import CustomHeader from '../components/CHeader'
import {Text, View, SafeAreaView } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
    <CustomHeader title="Home" isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize:24, marginBottom:10,marginTop:20}} onPress={() => {
      
    }} >Welcome To Home 2 Screen</Text>
    <Text style={{ fontSize:24, marginBottom:10,marginTop:20,fontFamily:Fonts.black}} onPress={() => navigation.toggleDrawer()} >Welcome To 4 Home Screen</Text>
    <Text style={{ fontSize:14, marginBottom:10,marginTop:60}} onPress={() => navigation.dispatch(StackActions.replace('Root'))} >Logout</Text>
    </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
