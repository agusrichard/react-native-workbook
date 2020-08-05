import React from 'react'
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
import ListItem from './ListItem'


function Separator() {
  return (
    <View style={ styles.separator }/>
  )
}



export default function SwipeGestures() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ names }
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem 
            title={ item.name }
            onSwipeFromLeft={() => alert('Swipped from left')}
            onPressRight={() => alert('Swipped from right')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1
  },
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: 'yellow',
    marginLeft: 10
  }
})

const names = [
  { id: '1', name: 'Agus Richard Lubis'},
  { id: '2', name: 'J.R.R Tolkien'},
  { id: '3', name: 'Stephen Hawking'},
  { id: '4', name: 'Donald Trump'},
  { id: '5', name: 'Sherlock Holmes'},
  { id: '6', name: 'John Watson'},
  { id: '7', name: 'Barrack Obama'},
  { id: '8', name: 'Hillary Clinton'},
  { id: '9', name: 'Vladimir Putin'},
  { id: '10', name: 'Harper Lee'},
  { id: '11', name: 'Margareth Hamilton'},
  { id: '12', name: 'Louis Armstrong'},
  { id: '13', name: 'Ella Fitzgerald'},
  { id: '14', name: 'John Lennon'},
  { id: '15', name: 'Paul McCartney'},
  { id: '16', name: 'George Harrison'},
  { id: '17', name: 'Ringo Starr'},
]