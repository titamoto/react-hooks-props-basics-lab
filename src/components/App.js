import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color="firebrick" name={user.name} city={user.city} />
      <About
        bio={user.bio}
        //bioPassed={user.bio !== null || user.bio !== "" ? true : false}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default App;
