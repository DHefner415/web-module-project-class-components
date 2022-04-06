import React from 'react'

export default class Todo extends React.Component {
  
  onClick = e => {
    console.log('clicked')
    this.toggleComplete(this.props.todo.id)
  }

  render() {
    return (
      <div>
        <p onClick={this.onClick}>{this.props.todo.name}</p>
      </div>
    )
  }
}
