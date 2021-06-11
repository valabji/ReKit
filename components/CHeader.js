import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from 'i18n-js';

export default function CustomHeader({title, isHome, navigation}){
    return(
      <View style={{flexDirection:'row',height:64,backgroundColor:"#ddd"}}>
        {
          isHome?
          <View style={{flex:1,justifyContent:'center'}}>
              <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              >
                <Ionicons
                    name="md-menu"
                    size={30}
                    style={{marginLeft:5}}
                    color="#222"
                />
            </TouchableOpacity>
          </View>
          :
          <View style={{flex:1,justifyContent:'center'}}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={{width:30,height:30,marginLeft:5}}>(=</Text>
              </TouchableOpacity>
          </View>
        }
        <View style={{flex:1.5,justifyContent:'center'}}>
          <Text style={{textAlign:'center',fontWeight:"500",fontSize:18}}>{title}</Text>
        </View>
        <View style={{flex:1}}></View>
      </View>
    )
  }
  