import React from 'react'
import Childprop from './Childprop'

function Studentprop() {
  function myfun(data,data1){
    console.log(' send data:', data,data1)
  }
  return (
    <div>Studentprop

      <Childprop passdata={myfun} />
    </div>
  )
}

export default Studentprop