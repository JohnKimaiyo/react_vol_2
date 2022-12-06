import React from "react";

const Title = (props) => {
  console.log(props);
  return (
    <div>
      <h1>My TiTLE {props.name}</h1>
    </div>
  );
};

export default Title;
