import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 0, todo: 'Talk to Sekar'},
    {id: 1, todo: 'Play toss and catch'},
    {id: 2, todo: 'Drum Exercise'},
    {id: 3, todo: 'Coding'},
    {id: 5, todo: 'Write'},
  ])

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.id !== id)
    })
  }

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        {id: Math.random(), todo: text},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={ styles.container }>
      <Header />
      <AddTodo addTodo={addTodo} />
      <FlatList 
        data={ todos }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem item={item} removeTodo={removeTodo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
