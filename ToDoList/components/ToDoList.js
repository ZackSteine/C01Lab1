import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';
import styles from '../styles/ToDoListStyles';

const ToDoList = ({initialValues}) => {
    const [toDos, setToDos] = useState(initialValues.map((taskTitle) => ({id: uuidv4(), title: taskTitle})));

    const addToDo = (newTitle) => {
        const newToDo = {id: uuidv4(), title: newTitle};
        setToDos((prevToDos) => [...prevToDos, newToDo]);
    };

    const removeToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id != id));
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((toDo) => (
                <View style={styles.todoItem} key={toDo.id}>
                    <Text>{toDo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View> 
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: []
};

export default ToDoList;