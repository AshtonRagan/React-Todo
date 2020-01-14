import React from "react";

class TodoForm extends React.Component {
constructor(){
    super()
    this.state ={
        toDoText:""
    }
}

handelChange =(e)=>{

    this.setState({
        toDoText: e.target.value
    })
}

handelSubmit = (e)=>{
e.preventDefault()
this.props.addATodo(this.state.toDoText)
this.setState({
    toDoText:""
})
}

handelRemove =(e) =>{
    e.preventDefault()
    this.props.removeTodos();
}
render(){

    return(
    <form>
        <input type="text" placeholder="Input Todo" value={this.state.toDoText} onChange={this.handelChange}/>
        <button onClick={this.handelSubmit} >Add</button>
        <button onClick={this.handelRemove}>Delete</button>
    </form>)
}

}



export default TodoForm