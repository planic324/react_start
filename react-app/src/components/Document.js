import React, { Component} from 'react';

class Document extends Component {
    render (){
      return(
          <article>
              <h2>{this.props.title}</h2>
              {/* {this.props.sub} */}
              {this.props.desc}
          </article>
      );
    }
  }

  export default Document;