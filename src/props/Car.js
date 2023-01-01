import React from "react";
import { ReactDOM } from "react";
//react props are link function arguments in hjavascript and attributes in HTML
export default function Car(props) {
  return <h2>I am a {props.brand}!</h2>;

  const myElement = <Car brand="Ford" />;
}
