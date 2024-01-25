import React from "react";
import "../external.css";
const Prop = (props) =>{
  return(
    <div >
      <h2 className="color-change">
        This is my name: {props.name}
      </h2>
    </div>
  )
};
export default Prop