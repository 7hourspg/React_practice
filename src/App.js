import React, {useState} from "react";
import arr from "./DummyData";
import "./App.css";

function App() {
  const [data, setData] = useState(arr);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const hanldleSubmit = () => {
    let id = data.length + 1;
    setData([...data, {id: id, title: input}]);
  };
  return (
    <>
      <div className="container">
        <div className="inputBx">
          <input type="text" placeholder="enter text" onChange={handleInput} />
          <button onClick={hanldleSubmit} className="btn">
            Submit
          </button>
        </div>
        <div className="innerContainer">
          {data?.map((item) => {
            return (
              <div key={item.id} className="wrapper">
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
