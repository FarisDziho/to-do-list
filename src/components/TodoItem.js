import React, { Component } from 'react'

export default class TodoItem extends Component {
   getStyle = () =>{
       return{
        borderBottom: '1px solid black',
        backgroundColor:this.props.todo.completed ? 'darkgray' : 'lightgray',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'60px',
        color:'black',
        paddingLeft:'20px'
       }
    }
        
    render() {
        
        const buttons={
            marginLeft:'auto',
            display:'flex',
            flexDirection:'row',
            height:'100%',
            width:'15%',
        }
        const btnDone = {
            width:'50%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            backgroundColor:'green',
            border:'none',
            height:'100%',
            fontWeight:'800'
        }
        const btnRemove={
            width:'50%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            backgroundColor:'red',
            border:'none',
            height:'100%',
            webkitUserSelect: 'none',
            fontWeight:'400'
            
        };
        const todoText = {
            textDecoration:this.props.todo.completed ? 'line-through':'none',
        }
        
        const {id , title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p style = {todoText}>{title}</p>
                <div style={buttons}>
                    <div className='disableSelect' style={btnDone} onClick={this.props.markComplete.bind(this,id)}>&#10003;</div>
                    <div className='disableSelect' style={btnRemove} onClick={this.props.delete.bind(this,id)}>X</div>
                </div>  
            </div>
        )
    }
   
}

   

