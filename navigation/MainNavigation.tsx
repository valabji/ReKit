import * as React from 'react'
import { View,Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DNav from './DrawerNavigation'
import BNav from './LoginNavigation'
const Stack = createStackNavigator()

/* const DNav = () => {
  return (<View><Text>DNAV DNV</Text></View>)
}
const BNav = () => {
  return (<View><Text>DNAV DNV</Text></View>)
} */
export default (): JSX.Element => (
  <Stack.Navigator initialRouteName="LoginNav">
    <Stack.Screen
      name="LoginNav"
      component={BNav}
      options={{
        title: 'ReKit / Login',
        headerShown: false,
        headerStyle: { backgroundColor: '#ddd' },
      }}
    />
    <Stack.Screen
      name="DrawerNav"
      component={DNav}
      options={{
        title: 'Main Screen',
        headerShown: false,
        headerStyle: { backgroundColor: '#ddd' },
      }}
    />
  </Stack.Navigator>
)
