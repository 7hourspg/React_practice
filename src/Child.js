import React from "react";

function Child(props) {
  let {kch, naam} = props;
  console.log(naam);
  //   console.log(kch);
  console.log("I am child");
  return <div>Hello</div>;
}

export default Child;
