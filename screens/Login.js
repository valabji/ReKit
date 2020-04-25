import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var user = "";
var pass = "";
const resizeMode = 'cover';
const text = 'LOGIN';
export default function Home({ navigation }) {
    return (

      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={require('../assets/bg_app.png')}
          />

        </View>


        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <KeyboardAwareScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icon.png')} style={styles.image} />

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                }}
              >
                {text}
              </Text>
            </View>

            <View style={styles.main}>
              <TextInput underlineColorAndroid='transparent' onChangeText={text => user=text} style={styles.input} placeholder="Username" />

              <TextInput underlineColorAndroid='transparent' onChangeText={text => pass=text} style={styles.input} placeholder="Password" secureTextEntry={true} />

              <TouchableOpacity style={styles.buttonContainer} onPress={() => { 
                  if(pass=="1234"){
                      navigation.navigate('Home')
                  }else{
                      alert("Wrong password for user "+user)
                  }
          }} >
                <Text style={styles.buttonText}>Login </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer2} onPress={() => { 
                  if(pass=="1234"){
                      navigation.navigate('BotNav')
                  }else{
                      alert("Wrong password for user "+user)
                  }
          }}>
                <Text style={styles.buttonText}> Register </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>

        <Text style={styles.copyright}>Copyright © The Code 2019</Text>

        <Text style={styles.footer}>React Native · A framework for building native apps using React </Text>

      </View>
    );
  }

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 20,
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 80,
    width: 80,

  },
  buttonContainer: {
    backgroundColor: '#5194ff',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonContainer2: {
    backgroundColor: '#fcc358',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  footer: {
    height: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'gray',

  },
  copyright: {
    textAlign: 'center',
    margin: 20,
    fontSize: 14,
  },
});
