import React, {useState} from "react";
import "./App.css";
import Textarea from "./components/Textarea";
import {Data} from "./components/DummyData";
function App() {
  const [data, setData] = useState(Data);
console.log(data)
  return (
    <div className="container">
      <Textarea data={data} setData={setData} />
      {data.map((item) => {
        return <Textarea item={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
