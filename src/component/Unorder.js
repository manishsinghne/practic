import React,{Children, act, createContext, useReducer} from 'react'
const initial={
    name:'manish',
    imaage:''
}

const Reducer=(state,action)=>{
console.log(state,action)
// return state
}
 const creat=createContext()
function Unorder() {
    const [state,dispatch]=useReducer(Reducer,initial)
  return (
    <div>Unorder
 <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
 <button onClick={()=>dispatch({type:'dec'})}>decrement</button>
    </div>
  )
}

export default Unorder