import React from 'react'

function Studentclass({send,get}) {
  const handle=()=>{

alert('hi')
  }
  return (
    <div>
      <form onClick={handle} >
        <input type='text'  />
        <button>submit</button>
        <h1>{send}</h1>
        <h1>{get}</h1>
      </form>
    </div>
  )
}

export default Studentclass