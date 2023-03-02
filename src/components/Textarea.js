import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import "./Textarea.css";
import { v4 as uuidv4 } from 'uuid';

function Textarea(props) {
  const [inputText, setInputText] = useState("");

  const handleSave = () => {
    let id=uuidv4()
    props?.setData([
      ...props?.data,
      {
        id,
        date: `02 / 03 / 23`,
        comments: inputText,
      },
    ]);
  };
  const handelCancel = () => {
    setInputText("");
  };

  return (
    <div className="Container">
      <div className="wrapper">
        <div className="leftPane">
          <div className="userIcon">
            <FaUserAlt />
          </div>
          <div className="name">Kumar</div>
          <div className="date">01/03/23</div>
        </div>
        <div className="rightPane">
          <textarea
            name=""
            className="textarea"
            id=""
            cols="105"
            rows="4"
            onChange={(e) => setInputText(e.target.value)}
            value={props?.item?.comments ? props?.item?.comments : inputText}
          ></textarea>
          {props?.item?.comments ? (
            ""
          ) : (
            <div className="bottom">
              <button onClick={handelCancel}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Textarea;
