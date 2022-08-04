
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput as Ti, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function TextInput(props) {
    const { LeftIcon = () => (<View />), secureTextEntry = false, RightIcon = () => (<View />) } = props
    const [showPassword, setShowPassword] = useState(!secureTextEntry)
    return (
        <View style={{
            flexDirection: "row",
            borderRadius: 12,
            padding: 10,
            height: 60,
            backgroundColor: Colors.WHITE,
            ...props.containerStyle
        }} >
            <View style={{ justifyContent: "center" }}>
                <LeftIcon />
            </View>
            <Ti
                placeholderTextColor={Colors.gray}
                {...props}

                style={{
                    flex: 1,
                    color: Colors.BLACK,
                    fontSize: 18,
                    paddingLeft: 10,
                    ...props.style,
                }}
                secureTextEntry={!showPassword}
            />
            <View style={{ justifyContent: "center" }}>
                {secureTextEntry &&
                    <TouchableOpacity
                    style={{paddingRight: 10}}
                        onPress={() => setShowPassword(!showPassword)}>
                        <Feather
                            color={Colors.BLACK}
                            size={18}
                            name={!showPassword ? 'eye' : 'eye-off'}
                        />
                    </TouchableOpacity>
                }
            </View>

            <View style={{ justifyContent: "center" }}>
                <RightIcon />
            </View>
        </View>
    )
}