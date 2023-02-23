import React, {useState, useEffect} from "react";
import Child from "./Child";

function App() {
  const [state, setState] = useState(20);
  const [name, setName] = useState("");

  const handleCLick = () => {
    setState((prev) => prev + 1);
  };
  const handleName = () => {
    setName("Priyesh");
  };

  // setTimeout(() => {
  //   setState(state + 10);
  // }, 2000);
  // setInterval

  // let stop = setInterval(() => {
  //   console.log("Hello");
  // }, 2000);
  // const handleStop = () => {
  //   clearInterval(stop);
  // };

  // useEffect(() => {
  //   console.log("Hello");
  // }, [name]);
  const hanleChage = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  let arr = [
    {
      name: "rajiv",
      roll: 20,
    },
  ];

  console.log(...arr);
  return (
    <div>
      <input type="text" onChange={hanleChage} />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
