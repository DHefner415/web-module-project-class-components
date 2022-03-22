import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todos: [
          {
            name: 'This name',
            id: 175438,
            completed: false
          },
          {
            name:'That name',
            id:987383,
            completed: false,
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        Todo App
        <Form />
      </div>
    )
  }
}
