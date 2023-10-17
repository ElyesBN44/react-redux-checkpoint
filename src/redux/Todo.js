import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid';
const todoslice = createSlice({
name: 'todos',
initialState: [{
id: uuidv4(),
description: "I wake up early",
isDone: true,
},
{
id: uuidv4(),
description: "I make my coffee and smoke my cig",
isDone: false,
},
{
id: uuidv4(),
description: "I arrive late",
isDone: true,
}],
reducers: {

add: (state, action)=>{
    const newTask={
        id:uuidv4(),
        description:action.payload,
        isDone:false
    }
    state.push(newTask)
},

delet: (state,action) =>{
    return state.filter((e)=>e.id !==action.payload)
},

toggletodo: (state, action) =>{
    return state.map((e)=>{
        if(e.id==action.payload){
        return {...e, isDone:!e.isDone}
        } else { return e}
    })

},

edittodo: (state, action) =>{
    const index = state.findIndex((e)=>e.id==action.payload)
        state[index].description = prompt('Test');
},
},
},)

export const {add, delet, toggletodo, edittodo} = todoslice.actions;
export default todoslice.reducer