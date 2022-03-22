import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        Todo App
        <Form />
      </div>
    )
  }
}
