import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {

        return (
            <ul>
                {props.todos.map( todo => (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    setUpdate={props.setUpdate}
                    deleteTodoProps={props.deleteTodoProps}>
                    </TodoItem>
                ))}
            </ul>
        )
    
}
export default TodoList;