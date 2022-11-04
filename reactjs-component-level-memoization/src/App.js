import { useState } from "react";
import Demo from "./components/Demo";
import DemoWithCustomComparator from "./components/DemoWithCustomComparator";
import DemoWithComplexProp from './components/DemoWithComplexProp';

function App() {
  console.log("From App Component");
  //const [user, setUser] = useState("Venu");  
  const [user, setUser] = useState({ userName: "Venu", age: 37 });
  

  const clickHandler = () => {
    //setUser("Venu");   // automatic memoization - updating primitive value with same value will not trigger a re-render
    //setUser((prevState) => { return { ...prevState, userName: "venu" }});
    setUser((prevState) => { return { ...prevState, userName: "Venu" }});
  }

  return (
    <div>
      {/* <Demo name={user.userName}/> */}
      {/* <DemoWithCustomComparator name={user.userName}/> */}
      <DemoWithComplexProp user={user}/>
      <button onClick={clickHandler}>Update name</button>
    </div>
  );
}

export default App;
