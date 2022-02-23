import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  
  const [name, setName] = useState('Jash')
  const [person, setPerson] = useState({name: 'Akshat', age: 24})

  const changeHandler = () => {
    setName('Arpit')
    setPerson({
      name: 'Jay',
      age: 30
    })
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={changeHandler} />
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
  buttonContainer: {
    marginTop: 20
  }
});
