import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from './Colors'
export const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 20,
  PADDING: 12,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.BASE * 4,
  },
  input: {
    borderColor: Colors.BLACK,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    padding: 10,
    color: Colors.BLACK,
    fontSize: SIZES.FONT,
    paddingVertical: SIZES.PADDING * 0.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 1,
  },
  signin: {
    backgroundColor: Colors.BGreen,
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    textAlign: 'center',
  },

  facebookbtn: {
    backgroundColor: Colors.WHITE,
    // width: 150,
    padding: 20,
    borderRadius: 5,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  facebooklabel: {
    color: Colors.BLACK,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  signinLabel: {
    color: Colors.WHITE,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontSize: SIZES.TITLE,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
  title2: {
    color: Colors.WHITE,
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
})

export default styles
