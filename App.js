import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  
  const [name, setName] = useState('Jash')
  const [age, setAge] = useState('23')

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        onChangeText={(val) => setName(val)}
        placeholder="eg. Arpit"
      />
      <Text>Enter Age:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setAge(val)}
        keyboardType="numeric"
        keyboardAppearance='light'
      />
      <Text>name: {name} age: {age}</Text>
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
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
