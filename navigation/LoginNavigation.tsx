import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen'
import RegScreen from '../screens/Register'
import TabBarIcon from '../components/TabBarIcon';

const BottomNav = createBottomTabNavigator();
export default function BNav() {
  return (
    <BottomNav.Navigator initialRouteName="Login">
      <BottomNav.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarLabelStyle: {
            color: Colors.BGreen,
          },
          tabBarInactiveTintColor: Colors.gray,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-log-in" />,
        }}
      />
      <BottomNav.Screen
        name="Register"
        component={RegScreen}
        options={{
          title: 'Register',
          tabBarLabelStyle: {
            color: Colors.BGreen,
          },
          tabBarInactiveTintColor: Colors.gray,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
        }}
      />
    </BottomNav.Navigator>
  );
}