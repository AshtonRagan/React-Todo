import React from 'react';
import Form from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css";

const Todos=[
{name: "AddTodos",
  key: Date.now(),
  finished:false
}


]

class App extends React.Component {
  // you will need a place to store your state in this component.
constructor(){
super()
this.state= {
    todoITems: Todos
 }
}

toggleitem =(key) =>{
const newList = this.state.todoITems.map(ele =>{
  if (ele.key === key){
    return {
      ...ele,
      finished: !ele.finished
    }
  }else{
    return ele
  }
})
this.setState({
  todoITems: newList
})
}

removeFinished =() =>{
this.setState({
  todoITems: this.state.todoITems.filter(ele=> !ele.finished)
})


}

addTodo = (name)=>{
  const newTodo = {
    name : name,
    key : Date.now(),
    finished: false
  };
  this.setState({
    todoITems:[...this.state.todoITems,newTodo]

  })

        

}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Form addATodo={this.addTodo} removeTodos={this.removeFinished}/> 
        <TodoList List={this.state.todoITems} toggleItem={this.toggleitem}/>
        

      </div>
    );
  }
}

export default App;
