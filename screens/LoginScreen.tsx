import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useCallback } from 'react'
import { StackActions } from '@react-navigation/native'
import Colors from '../constants/Colors'
import Google from '../assets/svgs/google'
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native'

import TextInput from '../components/TextInput'
import { ScrollView } from 'react-native-gesture-handler'
import { post } from '../util/network'
import toast from '../util/toast'
import styles, { SIZES } from '../constants/Style'
import LoadingButton from '../components/LoadingButton'

export default function Main({ navigation }): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    if (email == '') {
      toast('Please enter email')
      return
    }
    if (password == '') {
      toast('Please enter password')
      return
    }
    await post({ url: 'login', body: { email, password } }).then((r) => {
      // email: eve.holt@reqres.in
      // password: cityslicka
      if (r.token) {
        navigation.dispatch(StackActions.replace('DrawerNav'))
      } else {
        toast('Wrong password for ' + email, 'error')
      }
    })
  }

  const renderInputs = () => {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            placeholder="Email"
            // style={styles.input}
            placeholderTextColor={Colors.BLACK}
            RightIcon={() => (
              <Feather color={Colors.BLACK} size={18} name={'mail'} />
            )}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            // style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.BLACK}
            secureTextEntry={true}
            RightIcon={() => (
              <Feather color={Colors.BLACK} size={18} name={'lock'} />
            )}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <TouchableOpacity
          onPress={() => toast("Go to 'Forgot Password' screen")}
        >
          <Text
            style={{
              textAlign: 'right',
              fontWeight: '300',
              color: Colors.BLACK,
              fontSize: SIZES.BASE * 1.6,
              paddingBottom: SIZES.PADDING * 2,
            }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <LoadingButton onClick={handleLogin} text="Login" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <View
            style={{ flex: 1, borderBottomWidth: 1, borderColor: Colors.gray }}
          />
          <Text style={{ textAlign: 'center', color: Colors.gray, width: 120 }}>
            {' '}
            Or Login Using{' '}
          </Text>
          <View
            style={{ flex: 1, borderBottomWidth: 1, borderColor: Colors.gray }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookbtn}
            onPress={() => {}}
          >
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name="facebook" size={20} color="#00a" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookbtn}
            onPress={() => {}}
          >
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name="twitter" size={20} color="#0aa" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookbtn}
            onPress={() => {}}
          >
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name="linkedin" size={20} color="#05f" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookbtn}
            onPress={() => {}}
          >
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name="github" size={20} color="#000" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookbtn}
            onPress={() => {}}
          >
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Google />
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      end={{ x: 1, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      colors={[Colors.BBGreen, Colors.BBGreen]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: 300,
            backgroundColor: Colors.BGreen,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.title2}>Login</Text>
        </View>
        <KeyboardAvoidingView style={styles.container}>
          {renderInputs()}
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  )
}
