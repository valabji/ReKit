import * as React from 'react';
import CustomHeader from '../components/CHeader'
import {Text, View, SafeAreaView } from 'react-native'
import { StackActions } from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
    <CustomHeader title="Home" isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize:24, marginBottom:10,marginTop:20}} onPress={() => navigation.toggleDrawer()} >Welcome To Home Screen</Text>
    <Text style={{ fontSize:14, marginBottom:10,marginTop:60}} onPress={() => navigation.dispatch(StackActions.replace('Root'))} >Logout</Text>
    </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
