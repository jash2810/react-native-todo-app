import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  
  const [people, setPeople] = useState([
    {name: 'Jash', id: '1'},
    {name: 'Arpit', id: '2'},
    {name: 'Kartik', id: '3'},
    {name: 'Jay', id: '4'},
    {name: 'Jay new', id: '5'},
    {name: 'Adwait', id: '6'},
    {name: 'Urchit', id: '7'},
    {name: 'Akshay', id: '8'},
  ])

  return (
    <View style={styles.container}>

    <FlatList 
      keyExtractor={item => item.id}
      numColumns={2}
      data={people}
      renderItem={({item}) => (
        <Text style={styles.item} >{item.name}</Text>
      )}
    />

    {/* <ScrollView>
      {people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      ))}
    </ScrollView> */}

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
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 24
  }
});
