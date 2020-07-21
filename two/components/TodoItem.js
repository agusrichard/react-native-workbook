import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function TodoItem({ item, removeTodo }) {
  return (
    <TouchableOpacity onPress={() => removeTodo(item.id)}>
      <View style={styles.item}>
        <AntDesign name="delete" size={20} color="#666" />
        <Text style={styles.itemText}>{item.todo}</Text>
      </View>
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
    borderStyle: 'dashed',
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 10
  }
})