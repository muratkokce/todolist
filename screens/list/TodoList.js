import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

const TodoList = ({ toDos, toggleTodo }) => (
    <View>
        {toDos.map(todo =>
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text style={{ fontSize: 20, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
        </TouchableOpacity>
        )}
    </View>
)

export default TodoList;