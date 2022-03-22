import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      todoItem: '',
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state.todoItem)
    this.setState({
      todoItem: '',
    })
  }

  // onCompleted = e => {
  //   e.preventDefault()
  //   this.props.removeItem(this.state.todoItem)
  //   this.setState()
  // }

  render() {
    return (
      <div>
        Form
        <form onSubmit={this.onSubmit}>
          <label htmlFor='todo-input'>Add New Todo: </label>
          <input
            id='todo-input'
            name='todoItem'
            value={this.state.todoItem}
            onChange={this.onChange}
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
