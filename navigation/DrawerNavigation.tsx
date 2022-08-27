import * as React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Colors from '../constants/Colors'
import { Image, Share, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import i18n from 'i18n-js'
import { Feather } from '@expo/vector-icons'
import BottomTabNavigator from './BottomTabNavigator'
import Screen3 from '../screens/Screen3'
import About from '../screens/About'
import { mystore } from '../redux'

const Drawer = createDrawerNavigator()
export default function DNav(): JSX.Element {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerPosition="right"
      drawerContent={({ navigation }) => (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: Colors.BGreen,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <Image
              source={require('../assets/images/icon.png')}
              style={{ width: 128, height: 128 }}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Cairo_400Regular',
              fontWeight: '500',
              color: Colors.BYellow,
              fontSize: 18,
            }}
          >
            {i18n.t('app_name')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={{
              // width: "100%",
              height: 64,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              backgroundColor: Colors.DGreen,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="home"
              size={24}
              color={Colors.BYellow}
              style={{ marginTop: 17, marginLeft: 20, marginRight: 20 }}
            />
            <Text
              style={{
                color: Colors.BYellow,
                fontSize: 22,
                marginTop: 7,
                fontFamily: 'Cairo_400Regular',
              }}
            >
              {i18n.t('home')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About')
            }}
            style={{
              // width: "100%",
              height: 64,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              backgroundColor: Colors.DGreen,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="info"
              size={24}
              color={Colors.BYellow}
              style={{ marginTop: 17, marginLeft: 20, marginRight: 20 }}
            />
            <Text
              style={{
                color: Colors.BYellow,
                fontSize: 22,
                marginTop: 7,
                fontFamily: 'Cairo_400Regular',
              }}
            >
              {i18n.t('about')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Share.share({
                message:
                  'Download Zikr app \n https://play.google.com/store/apps/details?id=com.valabji.khamsat.zikr',
              })
            }}
            style={{
              height: 64,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              backgroundColor: Colors.DGreen,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="share-2"
              size={24}
              color={Colors.BYellow}
              style={{ marginTop: 17, marginLeft: 20, marginRight: 20 }}
            />
            <Text
              style={{
                color: Colors.BYellow,
                fontSize: 22,
                marginTop: 7,
                fontFamily: 'Cairo_400Regular',
              }}
            >
              {'Share'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (global.lang && global.lang == 'en') {
                mystore.dispatch({ type: 'change', obj: { lang: 'ar' } })
              } else {
                mystore.dispatch({ type: 'change', obj: { lang: 'en' } })
              }
            }}
            style={{
              // width: "100%",
              height: 64,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              backgroundColor: Colors.DGreen,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="globe"
              size={24}
              color={Colors.BYellow}
              style={{ marginTop: 17, marginLeft: 20, marginRight: 20 }}
            />
            <Text
              style={{
                color: Colors.BYellow,
                fontSize: 22,
                marginTop: 7,
                fontFamily: 'Cairo_400Regular',
              }}
            >
              {'Change Language'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace('LoginNav'))
            }}
            style={{
              // width: "100%",
              height: 64,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              backgroundColor: Colors.DGreen,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="log-out"
              size={24}
              color={Colors.BYellow}
              style={{ marginTop: 17, marginLeft: 20, marginRight: 20 }}
            />
            <Text
              style={{
                color: Colors.BYellow,
                fontSize: 22,
                marginTop: 7,
                fontFamily: 'Cairo_400Regular',
              }}
            >
              {'Logout'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}
