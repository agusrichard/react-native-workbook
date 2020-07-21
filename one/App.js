import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Agus')
  const [person, setPerson] = useState({ name: 'Agus', age: 18 })

  const handlePress = () => {
    setName('Richard')
    setPerson({ name: 'Sekardayu Hana Pradiani', age: 22 })
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput style={styles.input}/>
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
  input: {
    margin: 10,
    borderColor: '#777',
    borderWidth: 1,
    padding: 2,
    width: 200
  }
});
