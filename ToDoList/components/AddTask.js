import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/AddTaskStyles';

const AddTask = ({ onAddTask }) => {
    const [ title, setTitle ] = useState('');

    const handleAddTask = () => {
        if (title.trim() !== '') {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="Enter task title"
                value={title}
                onChangeText={(text) => setTitle(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask}/>
        </View>
    );
};

export default AddTask;