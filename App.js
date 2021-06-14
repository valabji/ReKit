import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Share, I18nManager } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Feather, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginScreen from './screens/LoginScreen'
import RegScreen from './screens/Register'
import TabBarIcon from './components/TabBarIcon';
import Screen3 from './screens/Screen3'
import useLinking from './navigation/useLinking';
import Colors from './constants/Colors';
import Constants from 'expo-constants';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Tajawal_400Regular,
  Tajawal_700Bold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';
import { Cairo_400Regular, Cairo_700Bold, Cairo_900Black } from '@expo-google-fonts/cairo'
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Fonts from './constants/Fonts';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { Restart } from 'fiction-expo-restart';

const change = createAction('change')
const changeReducer = createReducer({ "obj": { "x": "y", "ActiveS": true, "lang": "ar", "RandomNoti": 2342 } }, {
  [change]: (state, action) => {
    state.obj = action.obj
    return state
  },
})
export const mystore = configureStore({ reducer: changeReducer })
/*
mystore.dispatch({ type: 'change', "obj": { "lang": "ar" } })

const [ft, setFt] = React.useState(true)
const [Azkar, setAzkar] = React.useState(mystore.getState().obj.Azkar)


const chaged = () => {
    try {
        setAzkar(mystore.getState().obj.Azkar)
    } catch (e) {

    }
}

if (ft) {
    setFt(false)
    mystore.subscribe(chaged)
}
*/
const Stack = createStackNavigator();
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: require("./language/en.json"),
  ar: require("./language/ar.json"),
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "ar";
global.lang = "ar"
I18nManager.forceRTL = true
if (I18nManager.isRTL && i18n.locale == "ar") {
  I18nManager.forceRTL = true
  I18nManager.allowRTL = true
  // Restart()
}else{
  I18nManager.forceRTL = false
  I18nManager.allowRTL = false
  // Restart()
}

console.log(i18n.locale)
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  let [fontsLoaded] = useFonts({
    Tajawal_400Regular,
    Tajawal_700Bold,
    Tajawal_900Black,
    Cairo_900Black,
    Cairo_700Bold,
    Cairo_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        setInitialNavigationState(await getInitialState());
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !fontsLoaded && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BNav} options={{ title: "ReKit / Login", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} />
            <Stack.Screen name="BotNav" component={DNav} options={{ title: "Main Screen", headerShown: false, headerStyle: { backgroundColor: "#ddd" } }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const Drawer = createDrawerNavigator();
function DNav() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerPosition="right"
      drawerContent={({ navigation }) => <View
        style={{ width: "100%", height: "100%", backgroundColor: Colors.BGreen }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Image
            source={require("./assets/images/icon.png")}
            style={{ width: 128, height: 128 }}
          />
        </View>
        <Text style={{ textAlign: 'center', fontFamily: "Cairo_400Regular", fontWeight: "500", color: Colors.BYellow, fontSize: 18 }}>{"تطبيق ذِكْر"}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3")
          }}
          style={{
            // width: "100%",
            height: 64,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 30,
            backgroundColor: Colors.DGreen,
            flexDirection: "row-reverse",
          }}>
          <Image
            source={require("./assets/images/icon.png")}
            style={{
              width: 64, height: 64
            }}
          />
          <Text style={{
            color: Colors.BYellow,
            fontSize: 22,
            marginTop: 7,
            fontFamily: i18n.t('regular'),
          }}>{i18n.t('hello')}</Text>
          <View style={{ flex: 1 }} />
          <Feather name="target" size={24} color={Colors.BYellow} style={{ marginTop: 17, marginLeft: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Fav")
          }}
          style={{
            // width: "100%",
            height: 64,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            backgroundColor: Colors.DGreen,
            flexDirection: "row-reverse",
          }}>
          <Image
            source={require("./assets/images/icon.png")}
            style={{
              width: 64, height: 64
            }}
          />
          <Text style={{
            color: Colors.BYellow,
            fontSize: 22,
            marginTop: 7,
            fontFamily: "Cairo_400Regular",
          }}>{"الاذكار المفضلة"}</Text>
          <View style={{ flex: 1 }} />
          <Feather name="heart" size={24} color={Colors.BYellow} style={{ marginTop: 17, marginLeft: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
          }}
          style={{
            // width: "100%",
            height: 64,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            backgroundColor: Colors.DGreen,
            flexDirection: "row-reverse",
          }}>
          <Image
            source={require("./assets/images/icon.png")}
            style={{
              width: 64, height: 64
            }}
          />
          <Text style={{
            color: Colors.BYellow,
            fontSize: 22,
            marginTop: 7,
            fontFamily: "Cairo_400Regular",
          }}>{"كل الاذكار"}</Text>
          <View style={{ flex: 1 }} />
          <Feather name="list" size={24} color={Colors.BYellow} style={{ marginTop: 17, marginLeft: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Share.share({
              message:
                'حمل تطبيق الاذكار وانشره لغيرك لتعم الفائدة وتنال الثواب\nhttps://play.google.com/store/apps/details?id=com.valabji.khamsat.zikr',
            });
          }}
          style={{
            // width: "100%",
            height: 64,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            backgroundColor: Colors.DGreen,
            flexDirection: "row-reverse",
          }}>
          <Image
            source={require("./assets/images/icon.png")}
            style={{
              width: 64, height: 64
            }}
          />
          <Text style={{
            color: Colors.BYellow,
            fontSize: 22,
            marginTop: 7,
            fontFamily: "Cairo_400Regular",
          }}>{"مشاركة التطبيق"}</Text>
          <View style={{ flex: 1 }} />
          <Feather name="share-2" size={24} color={Colors.BYellow} style={{ marginTop: 17, marginLeft: 20 }} />
        </TouchableOpacity>
      </View>}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
  );
}

const BottomNav = createBottomTabNavigator();
function BNav() {
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
    paddingTop: Constants.statusBarHeight,
  },
});
