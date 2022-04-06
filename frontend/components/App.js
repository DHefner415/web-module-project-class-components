import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          name: 'This name',
          id: 175438,
          completed: false,
        },
        {
          name: 'That name',
          id: 987383,
          completed: false,
        },
      ],
    }
  }

  addItem = todoName => {
    const newTodo = {
      name: todoName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          }
        } else {
          return todo
        }
      }),
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>

        <Form addItem={this.addItem} />
      </div>
    )
  }
}
