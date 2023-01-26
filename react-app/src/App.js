import React, { Component} from 'react';
import './App.css';

// import Subject from "./components/Subject"
import Navlist from "./components/Navlist"
import Document from "./components/Document"

class App extends Component{
  // 컴포넌트를 초기화 시키는 함수
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title: 'welcome', desc: 'hellow. React!!'},
      contents: [
        {id:1, title:'html', desc:'HTML is Hyper...'},
        {id:2, title:'css', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'},
      ]
    }
  }

  render() {
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}></Subject> */}
        <header>
            <h1>
              <a href="/" onClick={function(e){ // 'e' 이벤트 함수를 사용할때 사용해주는 것, 만약 이것을 추가 안하는 경우 페이지가 re road된다.
                console.log(e)
                e.preventDefault(); // 태그의 기본 동작을 막기위해 사용하는 명령어
                // this.state.mode = 'welcome' >> 이와 같이 사용하면 리액트 문법에 맞지 않는다. 
                this.setState({
                  mode: 'welcome'
                });
              }.bind(this)}>{this.state.subject.title}</a>
            </h1>
            {this.props.sub}
        </header>
        <Navlist data={this.state.contents}></Navlist>
        <Document title={_title} desc={_desc}></Document>
      </div>
    );
  }
}

export default App;
