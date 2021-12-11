// @flow
import React from "react"

import './App.css';
import { welcomeMessage } from "../src/modules"

function App(): function {
  return (
    <div className="App">
     <p>Getting Started Flow</p>
      {welcomeMessage("yussan", 12)}
    </div>
  );
}

export default App;
