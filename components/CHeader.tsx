import * as React from 'react'
import { Text, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import i18n from 'i18n-js'
import Colors from '../constants/Colors'
// import { Card } from '@material-ui/core'
import TextInput from './TextInput'
import { Card } from 'react-native-paper'
export default function CustomHeader({
  title,
  isHome = false,
  isSearch = false,
  onSearch = (searchText) => {},
  navigation,
  Right = () => <View />,
}) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const inputRef = React.useRef(0)
  const searchItem = (
    <TouchableOpacity
      style={{
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        setIsSearchOpen(true)
      }}
    >
      <Feather name="search" size={24} color={Colors.BLACK} />
    </TouchableOpacity>
  )
  return (
    <Card
      style={{
        backgroundColor: Colors.BBGreen,
      }}
    >
      <View
        style={{
          display: !isSearchOpen ? 'flex' : 'none',
          flexDirection: 'row',
          height: 64,
        }}
      >
        {isHome ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              style={{
                width: 64,
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.toggleDrawer()}
            >
              <Feather name="menu" size={30} color={Colors.BLACK} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ width: 30, height: 30, marginLeft: 5 }}>
                <Feather name="chevron-left" size={30} color={Colors.BLACK} />
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ flex: 1.5, justifyContent: 'center' }}>
          <Text
            style={{ textAlign: 'center', fontWeight: '500', fontSize: 18 }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
        >
          {isSearch ? searchItem : <Right />}
        </View>
      </View>
      <View
        style={{
          display: isSearchOpen ? 'flex' : 'none',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
          paddingRight: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <TextInput
            ref={inputRef}
            containerStyle={{ height: 44 }}
            placeholder="Search..."
            RightIcon={() => (
              <Feather name="search" size={24} color={Colors.BLACK} />
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setIsSearchOpen(false)
          }}
        >
          <Feather name="x" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    </Card>
  )
}
