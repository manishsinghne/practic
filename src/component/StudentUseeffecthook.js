import React, { Component } from 'react'

export class StudentUseeffecthook extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  incre=()=>{
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div>StudentUseeffecthook
        <h1>th; {this.state.count}</h1>
        <button onClick={this.incre}>add</button>
      </div>
    )
  }
}

export default StudentUseeffecthook