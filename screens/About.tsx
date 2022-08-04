import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useCallback } from 'react'
import { StackActions } from '@react-navigation/native'
import Colors from '../constants/Colors'
import Google from '../assets/svgs/google'
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native'

import TextInput from '../components/TextInput'
import { ScrollView } from 'react-native-gesture-handler'
import CustomHeader from '../components/CHeader'

/* const Colors = {
  WHITE: '#000',
  BLACK: '#FFF',
  BLUE: '#ddd',
  PURPLE: '#FFF',
}; */

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 20,
  PADDING: 12,
}

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <LinearGradient
      style={{ flex: 1 }}
      end={{ x: 1, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      colors={[Colors.BBGreen, Colors.BBGreen]}
    >
      <CustomHeader isHome={true} title='' navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: 300,
            backgroundColor: Colors.BGreen,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.title2}>About</Text>
        </View>
        <View style={{ flex: 1, padding: SIZES.PADDING }}>
          <View
            style={{
              height: 300,
              borderRadius:10,
              backgroundColor: Colors.WHITE,
              justifyContent: 'center',
            }}
          >
            <Text style={styles.title3}>Some text here</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.BASE * 4,
  },
  title: {
    color: Colors.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
  title2: {
    color: Colors.WHITE,
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
  title3: {
    color: Colors.BLACK,
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
})
