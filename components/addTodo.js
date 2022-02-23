import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

export default function AddTodo({addTodo}) {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
                value={text}
                style={styles.input}
                placeholder='new todo ...'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button title='Add' onPress={() => {
                setText('')
                return addTodo(text)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})