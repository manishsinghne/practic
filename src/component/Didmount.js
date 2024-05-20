import React, { Component } from 'react'

 class Didmount extends Component {
  render() {
    constructor(){
        super(){
            this. setState(count=0)
        }
    }
  console.log('render is working')
  return<h1>react lifecylcle class </h1>
  }
  componentDidMount(){
    console.log('componentdidmount is working')
  }
  render(){
    console.log('render is run')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate is updating')
  }
}

export default Didmount


// render run before didupdate fun
// constructer run once 
// didupdate run when dom updata
// shouldupdate