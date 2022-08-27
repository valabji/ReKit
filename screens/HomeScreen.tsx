import * as React from 'react'
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native'
import Fonts from '../constants/Fonts'
// import { Card, Icon } from '@material-ui/core'
import { Card } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import toast from '../util/toast'
import { t } from '../language/engine'

export default function HomeScreen({ navigation }): JSX.Element {
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
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>Home</Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>
                List View
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
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>Home</Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>Home</Text>
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
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>Home</Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card
              style={{
                display: 'flex',
                width: 170,
                height: 170,
                borderRadius: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" style={{ fontSize: 64 }} />
              <Text style={{ fontSize: 20, fontFamily: t('bold') }}>Home</Text>
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
