import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';

var user = "";
var pass = "";
export default function Home({ navigation }) {
    return (
      <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize:24, marginBottom:10,marginTop:20}}>ReKit Login</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Username"
          onChangeText={text => user=text}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          id="passwd"
          secureTextEntry={true}
          onChangeText={text => pass=text}
        />
          <Button style={{height:40}} onPress={() => { 
                  if(pass=="1234"){
                      navigation.navigate('BotNav')
                  }else{
                      alert("Wrong password for user "+user)
                  }
          }} title="Login" />
      </View>
      </View>      
    );
  }
  