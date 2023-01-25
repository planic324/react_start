import React, { Component} from 'react';

class Navlist extends Component {
    render () {
      const lists = [];
      let data = this.props.data;
      let i = 0;

      while (i < data.langth) {
        lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

export default Navlist;