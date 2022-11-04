import React from 'react';

const DemoWithCustomComparator = (props) => {
  console.log("From Demo Component");
  return (
    <h1>Welcome {props.name.toUpperCase()}</h1>
  )
}

const areSame = (prevProps, newProps) => {
    let pProps = prevProps.toString().toUpperCase();   // "Venu" converts to "VENU" 
    let nProps = newProps.toString().toUpperCase();    // "venu" converts to "VENU"
    if (pProps === nProps){
        return true;
    } else {
        return false;
    }
};

export default React.memo(DemoWithCustomComparator, areSame);   