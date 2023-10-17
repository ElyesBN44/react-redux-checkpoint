import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { add } from "./redux/Todo";
function AddTask(){
    const todo=useSelector((state)=>state.todo)
    console.log(todo);
    const Dispatch=useDispatch()
    const [input,setInput]=useState=("")
    const HandelAdd=()=>{
        Dispatch(add(input))

    }
    return (
        <div className="d-flex justify-content-center p-2 mb-3" style={{gap:"1em"}}>
            <input placeholder="Enter task here" onChange={(e)=>setInput(e.target.value)}></input>
                <Button variant="success" onClick={HandelAdd}>Add Task</Button>
        </div>    
    )
}
export default AddTask;