import React from "react";
import "./operator.css";

const OperatorButton = ({operator}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="midblue">{operator}</div>
    </>
  );
};

export default OperatorButton; 
