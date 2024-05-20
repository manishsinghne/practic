import React,{useState} from 'react'

function Studentinput() {
    const [data,setdata]=useState('')
    function change(e) {
       setdata( e.target.value)
    }
    function submit() {
console.log(data)
    }
    return (
        <div>
            <input type='text' onChange={(e) => change(e)}  />
            <button onClick={submit} >submit</button>
        </div>
    )
}

export default Studentinput