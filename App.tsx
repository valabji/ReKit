import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import Constants from 'expo-constants'
import MainNavigation from './navigation/MainNavigation'
import { initializeTranslationEngine } from './language/engine'
import { initializeFonts } from './util/fontsLoader'
import Toast from 'react-native-toast-message';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()
        await initializeFonts()
        await initializeTranslationEngine()
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }
    loadResourcesAndDataAsync()
  }, [])
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <MainNavigation />
          <Toast />
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
})
