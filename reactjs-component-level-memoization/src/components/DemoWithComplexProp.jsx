import React from 'react';

const DemoWithComplexProp = (props) => {
  console.log("From Demo Component");
  return (
    <>
      <h1>Welcome {props.user.userName.toUpperCase()} !</h1>
      <h2>You are {props.user.age} years old...</h2>
    </>
    
  )
}

const areSame = (prevProp, newProp) => {
   if(prevProp.userName === newProp.userName && prevProp.age === newProp.age){
    return true;
   } else {
    return false;
   }
   
}

export default React.memo(DemoWithComplexProp, areSame);   
