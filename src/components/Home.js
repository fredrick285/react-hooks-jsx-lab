import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const myStyle={color:"firebrick"}
  // update the JSX being returned!
  return <div id="home">
    <h1 style={ myStyle}> {name} is a Web Developer from  {city}</h1>
   
   
  </div>
}

export default Home;
