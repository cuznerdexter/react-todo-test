import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    state = {
        todos: [],
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map( todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }))
    };

    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    setUpdate = (updatedTitle, id) => {
        console.log(updatedTitle, id)
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    };

    delTodo = (id) => {
        this.setState(prevState => ({
            todos: [
                ...prevState.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        }))
    };

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }


    render () {
        return (
            <div className='container'>
                <div className='inner'>
                    <Header></Header>
                    <InputTodo 
                        addTodoProps={this.addTodoItem}>
                    </InputTodo>
                    <TodoList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        setUpdate={this.setUpdate}
                        deleteTodoProps={this.delTodo}>
                    </TodoList>
                </div>
            </div>
        )
    }
}
export default TodoContainer;