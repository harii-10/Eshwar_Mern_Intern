import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./slices/userslice";

const About = () => {
  const dispatch = useDispatch(); 
  const count = useSelector((state) => state.inc.count); 

  const inc = () => {
    console.log(count);
    dispatch(add());
  };

  return (
    <div>
      <img
        src="https://th.bing.com/th?id=OIP.swEXMUfoDH-P_-MR8JLSiAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt=""
      />
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>


      
    </div>
  );
};

export default About;