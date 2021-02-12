import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';
import './App.css';

class App extends Component {

  state={
    todos:[]

  } 
markComplete = (id) => {
  this.setState({todos:this.state.todos.map(todo => {
    if(todo.id===id)
      {
        todo.completed=!todo.completed;
      }
      return todo;
  })});
}

delete = (id) => {
  this.setState({todos:this.state.todos.filter(todo => id !== todo.id)})
}

addTodo = (title) =>  {
  const newTodo={
    id: uuid(),
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos, newTodo]});

}

  render(){
    return (
      <div className="App">
        <AddTodo  addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
