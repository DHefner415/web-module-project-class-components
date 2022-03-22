import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      todoItem:'',
    }
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state.todoItem)
    this.setState({
      todoItem:'',
    })
  }

  render() {
    return (
      <div>
        Form
        <form onSubmit={this.onSubmit}>
          <label htmlFor='todo-input' >Add New Todo: </label>
          <input 
            id='todo-input'
            name='todoItem'
            value={this.state.todoItem}
            onChange={this.onChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
