import axios from "axios";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";

function Edit() {
  let nav = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const location = useLocation();
  let passedData = location.state;

  const handleEdit = () => {
    axios.get("http://localhost:8080/data").then((res) => setData(res.data));

    data.forEach((item) => {
      if (item.id == passedData.id) {
        axios
          .put(`http://localhost:8080/data/${passedData.id}`, {
            ...item,
            firstName,
            lastName,
            title,
          })
          .then(nav("/"));
      }
    });
  };

  return (
    <div className="container">
      <input
        placeholder={passedData.firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder={passedData.lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder={passedData.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleEdit}>Submit</Button>
    </div>
  );
}

export default Edit;
