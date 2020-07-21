import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  return (
    <View style={ styles.container }>
      <View>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g Sekardayu"
          onChangeText={(val) => setName(val)}
        />
      </View>
      <View>
        <Text>Enter age:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g 21"
          keyboardType="numeric"
          onChangeText={(val) => setAge(val)}
        />
      </View>
      <View>
        <Text>name: { name }, age: { age }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#555',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 200,
    marginBottom: 5
  }
});
