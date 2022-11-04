import React from 'react';

const Demo = (props) => {
  console.log("From Demo Component");
  return (
    <h1>Welcome {props.name.toUpperCase()}</h1>
  )
}

export default React.memo(Demo);   // Prev prop : name="venu" ; New prop : name="venu"