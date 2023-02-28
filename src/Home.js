import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState("");
  const [title, setTitle] = useState("");
  let nav=useNavigate()
  const handleData = () => {
    axios.get("http://localhost:8080/data").then((res) => setData(res.data));
  };
  useEffect(() => {
    handleData();
  }, []);

  const handleSubmit = () => {
    let date = new Date();
    let nameArr = first.split(" ");
    let Day = date.getDate();
    let Month = date.getMonth() + 1;
    let Year = date.getFullYear();
    let completeDate = `${Day}/${Month}/${Year}`;

    let status = false;
    let id = uuidv4();
    let dp =
      "https://images.pexels.com/photos/11201518/pexels-photo-11201518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    axios
      .post("http://localhost:8080/data", {
        id,
        firstName: nameArr[0],
        lastName: nameArr[1],
        date: completeDate,
        title,
        status,
        dp,
      })
      .then(() => {
        handleData();
      });
  };

  const handleDelte = (id) => {
    axios.delete(`http://localhost:8080/data/${id}`).then(() => handleData());
  };

  const handleStatus = (id) => {
    data.forEach((item) => {
      if (item.id == id) {
        axios
          .put(`http://localhost:8080/data/${id}`, {...item, status: true})
          .then(handleData);
      }
    });
  };
  const handleEdit = (id) => {
    data.forEach((item) => {
      if (item.id == id) {
        // axios
        //   .put(`http://localhost:8080/data/${id}`, {...item,
        // })
        //   .then(handleData);
      }
    });
  };

  const handleNav = (item) => {
     nav(`edit/${item.id}`, {state: item});
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
                <th>*</th>
                <th>*</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>
                      {item.status ? (
                        <Button variant="success">Done</Button>
                      ) : (
                        <Button
                          variant="warning"
                          onClick={() => handleStatus(item.id)}
                        >
                          Pending
                        </Button>
                      )}
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelte(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      
                        <Button onClick={()=>handleNav(item)}>
                          Edit
                        </Button>
                     
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
};

export default Home;
