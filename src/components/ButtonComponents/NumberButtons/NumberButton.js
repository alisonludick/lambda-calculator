import React from "react";
import "./number.css";

const NumberButton = ({number}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="darkblue">{number}</div>
    </>
  );
};

export default NumberButton; 