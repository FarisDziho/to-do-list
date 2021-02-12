import React, { Component } from 'react'


export class AddTodo extends Component {
    state={
        title:''
    }
    
    onChange = (e) => this.setState({title:e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }


    render() {
        return (
           <form id="addTodoForm" onSubmit={this.onSubmit}>
               <input id="unos" type="text" name="title" placeholder="add todo.." value={this.state.title} onChange={this.onChange}></input>
                <input id="dugme" type="submit" value="Add"></input>
           </form>

        )
    }
}

export default AddTodo
