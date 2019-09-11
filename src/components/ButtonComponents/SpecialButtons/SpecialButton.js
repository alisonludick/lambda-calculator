import React from "react";
import "./special.css";

const SpecialButton = ({special}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="lightblue">{special}</div>
    </>
  );
};

export default SpecialButton; 
