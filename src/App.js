import React from "react"
import NavBar from './Components/NavBar/NavBar';
import { originals,action } from "./Components/urls";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix originals"/>
      <Rowpost url={action} title="action" isSmall />
       </div>
  );
}

export default App;
