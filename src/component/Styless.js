import React from 'react'
import style from './custom.module.css'
const desig={
    color:'orange'

}

function Styless() {

  return (
    <div>Styless
        <h1 className={ style.nn}>this is custom</h1>
        <h1 style={ desig}>this is custom</h1>
    </div>
  )
}

export default Styless