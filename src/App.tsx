import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import model from  './components/Modals';
import Singletodo from './components/Singletodo';

const App: React.FC= ()=>{
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<model[]>([]);
  const onHandle=(e: React.FormEvent<EventTarget>)=>{
      e.preventDefault();
      if(todo){
              setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
              setTodo("");
      }


  }

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Todo Lists</h1>
			</header>
      <div className='todo' >
        <Input  todo={todo} setTodo={setTodo} onHandle={onHandle}/>
      </div>
      <div className="todolist">
          {todos.map((todo)=>
           <Singletodo key={todo.id}  todo={todo} todos={todos} setTodos={setTodos} />
          // <li>{todo.todo}</li>
           ) }
      </div>
		</div>
	);
}

export default App;
