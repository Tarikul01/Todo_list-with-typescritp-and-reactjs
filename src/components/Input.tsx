import React, { useRef } from 'react';
import  './Form.css';
interface Props{
    todo:string | number;
    // setTodo:()=>void;
    setTodo :React.Dispatch<React.SetStateAction<string>>;
    onHandle:(e: React.FormEvent<EventTarget>)=>void;
}

const Input:React.FC<Props>=({todo,setTodo,onHandle})=>{
    const inputRef=useRef<HTMLInputElement>(null);
    return(
      <form className="form" onSubmit={(e)=>{
          onHandle(e);
          inputRef.current?.blur();
        }
          }>
       <input  ref={inputRef} type="text" className="input" placeholder="Enter some data..." value={todo} onChange={(e)=>setTodo(e.target.value)} />
       <button type="submit">Add</button>
      </form>
    )
}
export default Input;