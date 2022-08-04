import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DNav from './DrawerNavigation';
import BNav from './LoginNavigation';
const Stack = createStackNavigator();
export default () => (
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
