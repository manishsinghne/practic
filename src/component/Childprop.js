import React from 'react'

function Childprop({passdata}) {
    // console.log(getfun)
    let data='rect';
    let data1='rect1';

  return (
    <div>Childprop 
        <button onClick={()=>passdata(data,data1)}> send</button>
    </div>
  )
}

export default Childprop