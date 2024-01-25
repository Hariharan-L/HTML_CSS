import React from "react";

// Define the TestComp component
var TestComp = () => {
  return (
    <h1>Hello React</h1>
  );
};
class Iterator extends React.Component{
  render(){
    return(
      <div>
        <h5 style={{color:"white"}}>Hi</h5> 
        <TestComp/> 
      </div>
    )
  }
}
export default Iterator;