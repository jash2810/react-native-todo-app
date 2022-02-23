import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function TodoItem({item, deleteTodoPress}) {
    return(
        <TouchableOpacity onPress={() => deleteTodoPress(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        backgroundColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})