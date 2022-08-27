import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import {
  Tajawal_400Regular,
  Tajawal_700Bold,
  Tajawal_900Black,
  useFonts,
} from '@expo-google-fonts/tajawal'
import {
  Cairo_400Regular,
  Cairo_700Bold,
  Cairo_900Black,
} from '@expo-google-fonts/cairo'
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat'
export async function initializeFonts() {
  await Font.loadAsync({
    ...Ionicons.font,
    Tajawal_400Regular,
    Tajawal_700Bold,
    Tajawal_900Black,
    Cairo_900Black,
    Cairo_700Bold,
    Cairo_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  })
}
