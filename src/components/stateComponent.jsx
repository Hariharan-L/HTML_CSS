import React from "react";
//*******all class or funnction should start with Capital letters*****//
class StateProp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      message: "constructor component"
    }
  }
  render(){
    return(
      <>
        <h1>{this.state.message}</h1>
        <h1>Good bye react</h1>
        <button className="" onClick={()=>this.setState({message:"constructor is changer"})}>Change</button>
      </>
    )
  }
}

export default StateProp