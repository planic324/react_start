import React, { Component} from 'react';
import './App.css';

import Subject from "./components/Subject"
import Navlist from "./components/Navlist"
import Document from "./components/Document"

class App extends Component{
  // 컴포넌트를 초기화 시키는 함수
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome :{title: 'welcome', desc: 'hellow. react!!'},
      contents: [
        {id:1, title:'html', desc:'HTML is Hyper...'},
        {id:2, title:'css', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}></Subject>
        <Navlist data={this.state.contents}></Navlist>
        <Document title="HTML" sub="HTML is HyperText Markup Language."></Document>
      </div>
    );
  }
}

export default App;
