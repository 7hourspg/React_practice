import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function App() {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState("");
  const [title, setTitle] = useState("");
  const handleData = () => {
    axios.get("http://localhost:8080/data").then((res) => setData(res.data));
  };
  useEffect(() => {
    handleData();
  }, [data]);

  const handleSubmit = () => {
    let date = "24/02/23";
    let status = false;
    let dp =
      "https://images.pexels.com/photos/11201518/pexels-photo-11201518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    axios.post("http://localhost:8080/data", {
      id: 4,
      firstName: first,
      lastName: first,
      date,
      title,
      status,
      dp,
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Todo List</h1>
        <div className="inputBx">
          <input
            type="text"
            onChange={(e) => setFirst(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="inputBx">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>

        <div className="inputBx">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="data_wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>DP</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>
                      {item.status ? (
                        <Button variant="success">Done</Button>
                      ) : (
                        <Button variant="warning">Pending</Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
