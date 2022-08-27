import AsyncStorage from '@react-native-async-storage/async-storage'
import { mystore } from '../redux'
import i18n from 'i18n-js'
import { I18nManager,Platform } from 'react-native'
// import { Restart } from 'fiction-expo-restart'
// import * as Updates from 'expo-updates';

const Restart = ()=>{
    if(Platform.OS=="web")
    {
        window.location.reload()
    }
    else{
        // Updates.reloadAsync();
    }
}

const changed = (restart: boolean = true) => {
  i18n.locale = mystore.getState().obj.lang
  if (i18n.locale == 'ar') {
    I18nManager.forceRTL(true)
    I18nManager.allowRTL(true)
  } else {
    I18nManager.forceRTL(false)
    I18nManager.allowRTL(false)
  }

  AsyncStorage.setItem('lang', mystore.getState().obj.lang).then(() => {
    if (restart) {
      Restart()
    }
  })
}

i18n.translations = {
  en: require('./en.json'),
  ar: require('./ar.json'),
}
i18n.fallbacks = true

export function t(key: string, options: any = {}): string {
  return i18n.t(key, options)
}

export async function initializeTranslationEngine() {
  await AsyncStorage.getItem('lang').then((lang) => {
    global.lang = lang
    if (lang) {
      mystore.dispatch({ type: 'change', obj: { lang: lang } })
    }
    mystore.subscribe(changed)
    changed(false)
    // Set the key-value pairs for the different languages you want to support.
  })
}
