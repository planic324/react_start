import React, { Component} from 'react';
import './App.css';

import Subject from "./components/Subject"
import Navlist from "./components/Navlist"
import Document from "./components/Document"

class App extends Component{
  render() {
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Navlist></Navlist>
        <Document title="HTML" sub="HTML is HyperText Markup Language."></Document>
      </div>
    );
  }
}

export default App;
