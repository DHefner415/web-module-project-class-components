import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo props={props} key={todo.id} todo={todo} />
      ))}
      TodoList
    </div>
  )
}
