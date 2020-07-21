import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'


export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('')

  const handlePress = () => {
    addTodo(text)
    setText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        value={text}
        placeholder="New Todo..." 
        onChangeText={(val) => setText(val)}
      />
      <Button title="Add+" color="indigo" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10
  }
})