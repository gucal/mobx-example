import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { observer } from 'mobx-react'
import PersonStore from '../store/PersonStore'

@observer
export default class Person extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {PersonStore.fullName}</Text>
        <Button
          title={"İsim değiştir"}
          onPress={() => PersonStore.changeName()}
        />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    margin: 5

  }
})