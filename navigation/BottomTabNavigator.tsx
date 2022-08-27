import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import Colors from '../constants/Colors'
import { Text, View } from 'react-native'
import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }): JSX.Element {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        tabBarStyle: { 
          height:80
        },
      }}
      tabBarOptions={{
        activeBackgroundColor: Colors.DGreen,
        inactiveBackgroundColor: Colors.DGreen,
      }}
    >
      <BottomTab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <View><Text></Text></View>
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  width: 80,
                  alignItems: 'center',
                }}
              >
                <AntDesign
                  name="sync"
                  size={24}
                  color={focused ? Colors.DYellow : Colors.gray}
                />
                <Text
                  style={{
                    fontFamily: 'Cairo_400Regular',
                    color: focused ? Colors.DYellow : Colors.gray,
                  }}
                >
                  المحول
                </Text>
              </View>
            )
          },
        }}
      />
      <BottomTab.Screen
        name="Sc2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <View><Text></Text></View>
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ width: 80, alignItems: 'center' }}>
                <AntDesign
                  name="bars"
                  size={24}
                  color={focused ? Colors.DYellow : Colors.gray}
                />
                <Text
                  style={{
                    fontFamily: 'Cairo_400Regular',
                    color: focused ? Colors.DYellow : Colors.gray,
                  }}
                >
                  قائمة الاسعار
                </Text>
              </View>
            )
          },
        }}
      />
      <BottomTab.Screen
        name="Sc3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <View><Text></Text></View>
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ width: 80, alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name="gold"
                  size={24}
                  color={focused ? Colors.DYellow : Colors.gray}
                />
                <Text
                  style={{
                    fontFamily: 'Cairo_400Regular',
                    color: focused ? Colors.DYellow : Colors.gray,
                  }}
                >
                  الذهب
                </Text>
              </View>
            )
          },
        }}
      />
      <BottomTab.Screen
        name="Sc4"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <View><Text></Text></View>
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ width: 80, alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name="bitcoin"
                  size={24}
                  style={{ paddingTop: 5, paddingBottom: 2 }}
                  color={focused ? Colors.DYellow : Colors.gray}
                />
                <Text
                  style={{
                    fontFamily: 'Cairo_400Regular',
                    color: focused ? Colors.DYellow : Colors.gray,
                  }}
                >
                  ع. رقمية
                </Text>
              </View>
            )
          },
        }}
      />
      <BottomTab.Screen
        name="Sc5"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <View><Text></Text></View>
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ width: 80, alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name="diamond"
                  size={24}
                  style={{ paddingTop: 5, paddingBottom: 2 }}
                  color={focused ? Colors.DYellow : Colors.gray}
                />
                <Text
                  style={{
                    fontFamily: 'Cairo_400Regular',
                    color: focused ? Colors.DYellow : Colors.gray,
                  }}
                >
                  المعادن
                </Text>
              </View>
            )
          },
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Home Page'
    case 'Sc2':
      return 'Page 2'
    case 'Sc3':
      return 'Page 3'
  }
}
