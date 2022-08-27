import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useCallback, useEffect } from 'react'
import Colors from '../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import CustomHeader from '../components/CHeader'
import { get } from '../util/network'
import log from '../util/log'
import { Text, View } from 'react-native'

export default function Main({ navigation }) {
  useEffect(() => {
    get({url:"unknown"}).then((r) => {
        log(r)
    })
  }, [])
  return (
    <LinearGradient
      style={{ flex: 1 }}
      end={{ x: 1, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      colors={[Colors.BBGreen, Colors.BBGreen]}
    >
      <CustomHeader isHome={true} title="" navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 12 }}>
          <Text>Main</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
