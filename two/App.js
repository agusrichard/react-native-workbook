import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {id: 1, name: 'Agus'},
    {id: 2, name: 'Sekar'},
    {id: 3, name: 'Saskia'},
    {id: 4, name: 'Arifa'},
    {id: 5, name: 'Agus'},
    {id: 6, name: 'Sekar'},
    {id: 7, name: 'Saskia'},
    {id: 8, name: 'Arifa'},
  ])

  return (
    <View style={ styles.container }>
      {/* <ScrollView>
        { people.map(person => {
          return (
            <View key={ person.key }>
              <Text style={styles.item}>{ person.name }</Text>
            </View>
          )
        }) }
      </ScrollView> */}

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{ item.name }</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    backgroundColor: '#555',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 24,
    color: '#fff'
  }
});
