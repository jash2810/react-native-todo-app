import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react'
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  
  const initTodos = [
    {text: 'buy a coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play minecraft!', key: '3'}
  ]
  const [todos, setTodos] = useState(initTodos)

  const deleteTodoPress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const addTodo = (text) => {
    if(text.length > 3) {
      setTodos([{text: text, key: Math.random().toString() }, ...todos])
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log('dismissed keyboard')
      }}
    >
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo
          addTodo={addTodo}
        />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
                <TodoItem
                  item={item}
                  deleteTodoPress={deleteTodoPress}
                />
            )}
          />
        </View>
      </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: 100,
    // marginLeft: 30
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
