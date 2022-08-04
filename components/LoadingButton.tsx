import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import styles, { SIZES } from '../constants/Style'

export default function LoadingButton(props) {
  const {
    onClick = async () => {},
    text,
    backgroundColor = Colors.BGreen,
    textColor = Colors.WHITE,
  } = props
  const [loading, setLoading] = useState(false)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.signin, { backgroundColor }]}
      onPress={async () => {
        setLoading(true)
        await onClick()
        setLoading(false)
      }}
    >
      {loading ? (
        <ActivityIndicator size={SIZES.FONT * 1.2} color={textColor} />
      ) : (
        <Text style={[styles.signinLabel, { color: textColor }]}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}
