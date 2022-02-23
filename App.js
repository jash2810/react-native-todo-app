import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  
  const [people, setPeople] = useState([
    {name: 'Jash', key: '1'},
    {name: 'Arpit', key: '2'},
    {name: 'Kartik', key: '3'},
    {name: 'Jay', key: '4'},
    {name: 'Jay new', key: '5'},
    {name: 'Adwait', key: '6'},
    {name: 'Urchit', key: '7'},
    {name: 'Akshay', key: '8'},
  ])

  return (
    <View style={styles.container}>

    <ScrollView>
      {people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
