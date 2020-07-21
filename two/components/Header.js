import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'indigo',
    paddingTop: 20,
    height: 80
  },
  title: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 10
  }
})