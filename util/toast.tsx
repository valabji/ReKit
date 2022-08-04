import Toast from 'react-native-toast-message'

export default function toast(
  message: string,
  type: 'success' | 'error' | 'info' = 'info',
  text2: string = '',
) {
  if (text2 == '') {
    Toast.show({
      type,
      text1: message,
    })
  } else {
    Toast.show({
      type,
      text1: message,
      text2,
    })
  }
}
