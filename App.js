import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react'
import Header from './components/header';

export default function App() {
  
  const initTodos = [
    {text: 'buy a coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play minecraft!', key: '3'}
  ]
  const [todos, setTodos] = useState(initTodos)

  return (
    <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <View style={styles.list}>
        <FlatList 
          data={todos}
          renderItem={({item}) => (
              <Text style={styles.item} >{item.text}</Text>
          )}
        />
      </View>
    </View>

    </View>
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
