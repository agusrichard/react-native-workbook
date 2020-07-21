import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem({ item, removeTodo }) {
  return (
    <TouchableOpacity onPress={() => removeTodo(item.id)}>
      <Text style={styles.item}>{item.todo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderStyle: 'dashed'
  }
})