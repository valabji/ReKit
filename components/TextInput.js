
import React from 'react';
import { TextInput as Ti, View } from 'react-native';
import Colors from '../constants/Colors';

export default function TextInput(props) {
    const {leftIcon} = props
    return (
        <View style={{flexDirection:"row",flex:1}} >
            {leftIcon}
            <Ti

                style={{
                    borderColor: Colors.WHITE,
                    borderWidth: 0.5,
                    borderRadius: 12,
                    padding: 10,
                    color: Colors.WHITE,
                    fontSize: 12,
                    paddingVertical: 6,
                    flex:1,
                }}
                placeholderTextColor={Colors.WHITE}
                {...props}

            />
        </View>
    )
}