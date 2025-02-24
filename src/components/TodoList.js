
import React, { Component } from 'react'
import TodoItem  from './TodoItem'

export default class TodoList extends Component {
 
  render() {
    
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} todo={todo} markComplete={this.props.markComplete} delete={this.props.delete}/>
    ));
  }
}






