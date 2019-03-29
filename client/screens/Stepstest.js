import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Pedometer from '../components/Pedometer'

export default class Stepstest extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Pedometer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
