import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import Draggable from './src/draggable'


const Stack = createStackNavigator()


const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Item title="Draggable" onPress={() => navigation.navigate('Draggable')} />
    </View>
  )
}

const Item = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={styles.item}>
        <Text style={styles.itemText}>{ title }</Text>
      </View>
    </TouchableOpacity>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#490c78',
        },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Draggable" component={Draggable}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad9db',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  item : {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 10,
    textAlign: 'center',
    width: '100%'
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 22
  }
});
