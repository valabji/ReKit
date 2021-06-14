import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback } from 'react';
import { StackActions } from '@react-navigation/native';
import Colors from '../constants/Colors';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import Ti from '../components/TextInput';

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
};

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('valabji@gmail.com');
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
      if("1234".match(password)){
        navigation.dispatch(StackActions.replace('BotNav'))
        }else{
            alert("Wrong password for user "+email)
        }
    setLoading(false);
  });

  const renderInputs = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Ti
            value={email}
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={Colors.WHITE}
            onChangeText={value => setEmail(value)}
            leftIcon={()=><View style={{width:32,height:32,backgroundColor:"red"}} />}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.WHITE}
            secureTextEntry={!showPassword}
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity
            style={{
              right: 10,
              // top: SIZES.BASE+7,
              position: 'absolute',
              justifyContent:"center",
              width:18,
              height:30,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Feather
              color={Colors.WHITE}
              size={18}
              name={!showPassword ? 'eye' : 'eye-off'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => alert("Go to 'Forgot Password' screen")}>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: '300',
              color: Colors.WHITE,
              fontSize: SIZES.BASE * 1.6,
              paddingBottom: SIZES.PADDING * 2,
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.signin} onPress={() => handleLogin()}>
          {loading ? (
            <ActivityIndicator size={SIZES.FONT * 1.2} color={Colors.PURPLE} />
          ) : (
            <Text style={styles.signinLabel}>Sign in</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      end={{ x: 1, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      colors={[Colors.BLUE, Colors.PURPLE]}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={{ flex: 0.5, justifyContent: 'center' }}>
            <Text style={styles.title}>Sign in</Text>
          </View>
          {renderInputs()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.BASE * 4,
  },
  input: {
    borderColor: Colors.WHITE,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:12,
    padding:10,
    color: Colors.WHITE,
    fontSize: SIZES.FONT,
    paddingVertical: SIZES.PADDING * 0.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 2,
  },
  signin: {
    backgroundColor: Colors.WHITE,
    borderRadius: SIZES.BASE * 5,
    paddingVertical: SIZES.PADDING,
    textAlign: 'center',
  },
  signinLabel: {
    color: Colors.PURPLE,
    fontSize: SIZES.FONT,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: SIZES.TITLE,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
});