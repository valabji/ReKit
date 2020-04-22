import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginScreen from './screens/LoginScreen'
import RegScreen from './screens/Register'
import TabBarIcon from './components/TabBarIcon';
import Screen3 from './screens/Screen3'
import useLinking from './navigation/useLinking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        setInitialNavigationState(await getInitialState());
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BNav} options={{title:"ReKit / Login",headerShown:false ,headerStyle:{backgroundColor:"#ddd"}}} />
            <Stack.Screen name="BotNav" component={DNav} options={{title:"Main Screen",headerShown:false , headerStyle:{backgroundColor:"#ddd"}}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const Drawer = createDrawerNavigator();
function DNav(){
  return(
    <Drawer.Navigator initialRouteName="Home"> 
      <Drawer.Screen name="Home" component={BottomTabNavigator}/>
      <Drawer.Screen name="Screen3" component={Screen3}/>
    </Drawer.Navigator>
  );
}

const BottomNav = createBottomTabNavigator();
function BNav(){
  return (
    <BottomNav.Navigator initialRouteName="Login">
      <BottomNav.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-log-in" />,
        }}
      />
      <BottomNav.Screen
        name="Register"
        component={RegScreen}
        options={{
          title: 'Register',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
        }}
      />
    </BottomNav.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
