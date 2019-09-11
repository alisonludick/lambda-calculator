import React, {useState} from "react";
import NumberButton from './NumberButton'; 
//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../data'; 
console.log(numbers); 

const Numbers = () => {
  // STEP 2 - add the imported data to state
 const [numberState, setNumberState] = useState(numbers);  
 console.log(numberState); 
  return (
    <div>
      {numberState.map((number) => {
        return(
          <NumberButton number={number} key={number}/>
        ) 
      }) 
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers; 
