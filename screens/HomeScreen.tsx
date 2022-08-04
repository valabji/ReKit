import * as React from 'react'
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native'
import Fonts from '../constants/Fonts'
import { Card, Icon } from '@material-ui/core'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import toast from '../util/toast'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Home"
        isHome={true}
        isSearch={true}
        onSearch={(r) => {
          toast(r)
        }}
        navigation={navigation}
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 25,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: Fonts.FONT_BOLD }}>
                Home
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}
