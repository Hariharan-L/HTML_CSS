import React from "react";

const Prop = (props) =>{
  return(
    <div className="bg-blue-500 text-white p-4">
      <h2>
        This is my name: {props.name}
      </h2>
    </div>
  )
};
export default Prop