import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import { username } from "../data/user";
import { city } from "../data/user";
import { image } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About image={image}/>
    </div>
  );
}

export default App;
