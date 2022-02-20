
import React, { useEffect, useRef, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import './Form.css';
import modal from './Modals';
type Props = {
	todo: modal;
	todos: modal[];
	setTodos:React.Dispatch<React.SetStateAction<modal[]>>;
};

const Singletodo: React.FC<Props> = ({ todo, todos ,setTodos}) => {
	const [edit,setEdit]=useState<boolean>(false);
	const [editTodo,setEditTodo]=useState<string>(todo.todo);
	const inputfocus=useRef<HTMLInputElement>(null);
	useEffect(
		()=>{
			inputfocus.current?.focus();
		},[edit]
	);

const handleOn=(id:number)=>{
   setTodos(todos.map((todo)=> todo.id===id ? {...todo,isDone:!todo.isDone}:todo     ) )
};
const ondelet=(id:number)=> setTodos(todos.filter((todo)=> todo.id !==id));
const formhandle=(e: React.FormEvent<EventTarget>,id:number)=>{
     e.preventDefault();
	 setTodos(todos.map((todo)=> (todo.id===id?{...todo,todo:editTodo}:todo)));
	 setEdit(false);
}
	return (
		<form className='item' key={todo.id}   onSubmit={(e)=>formhandle(e,todo.id)}>
            {edit? <input className='editinput'  value={editTodo} ref={inputfocus}  onChange={(e)=>setEditTodo(e.target.value)}/>:
								todo.isDone? <s>{todo.todo}</s>:<span>{todo.todo}</span>
			}
	
		
			<div className='icon'>
				<span  onClick={()=> {
				if(!edit && !todo.isDone){
	            setEdit(!edit);
				}
			}}>
	
					<AiFillEdit />
				</span>
				<span  onClick={()=>ondelet(todo.id)}>
					<AiFillDelete />
				</span>
                <span onClick={()=>handleOn(todo.id)}>
                    <AiOutlineCheck  />
                </span>
			</div>
		</form>
	);
};
export default Singletodo;
