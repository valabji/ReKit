import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import Google from '../assets/svgs/google';

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from '../constants/Colors';
import TextInput from '../components/TextInput';
import { ScrollView } from 'react-native-gesture-handler';

const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 20,
  PADDING: 12,
};

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    navigation.dispatch(StackActions.replace('DrawerNav'))
    setLoading(false);
  });

  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <TextInput
            value={name}
            placeholder="Full name"
            RightIcon={() => <Feather
              color={Colors.BLACK}
              size={18}
              name={'user'}
            />}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            placeholder="Email"
            RightIcon={() => <Feather
              color={Colors.BLACK}
              size={18}
              name={'mail'}
            />}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            RightIcon={() => <Feather
              color={Colors.BLACK}
              size={18}
              name={'lock'}
            />}
            onChangeText={value => setPassword(value)}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.signin} onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
          ) : (
            <Text style={styles.signinLabel}>Register</Text>
          )}
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginTop: 20 }}>
          <View style={{ flex: 1, borderBottomWidth: 1, borderColor: Colors.gray }} />
          <Text style={{ textAlign: "center", color: Colors.gray, width: 140 }}> Or Register Using </Text>
          <View style={{ flex: 1, borderBottomWidth: 1, borderColor: Colors.gray }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.facebookbtn} onPress={() => { }}>
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name='facebook' size={20} color="#00a" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.facebookbtn} onPress={() => { }}>
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name='twitter' size={20} color="#0aa" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.facebookbtn} onPress={() => { }}>
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name='linkedin' size={20} color="#05f" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.facebookbtn} onPress={() => { }}>
            {loading2 ? (
              <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.WHITE} />
            ) : (
              <Text style={styles.facebooklabel}>
                <Feather name='github' size={20} color="#000" />
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.facebookbtn} onPress={() => { }}>
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
    );
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      end={{ x: 1, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      colors={[Colors.BBGreen, Colors.BBGreen]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 300, backgroundColor: Colors.BGreen, justifyContent: 'center' }}>
          <Text style={styles.title2}>Register</Text>
        </View>
        <KeyboardAvoidingView style={styles.container}>
          {renderInputs()}
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.BASE * 4,
  },
  input: {
    borderColor: Colors.BLACK,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    padding: 10,
    color: Colors.BLACK,
    fontSize: SIZES.FONT,
    paddingVertical: SIZES.PADDING * 0.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 1,
  },
  signin: {
    backgroundColor: Colors.BGreen,
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    textAlign: 'center',
  },

  facebookbtn: {
    backgroundColor: Colors.WHITE,
    // width: 150,
    padding: 20,
    borderRadius: 5,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  facebooklabel: {
    color: Colors.BLACK,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  signinLabel: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
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
});