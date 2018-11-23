// import React from 'react';
import React, { Component } from 'react';

class Switcher extends Component {

  render() {
    // console.log(this.props.books); undefined
    return (
      <div className="switcher">
      <select onChange={(event) => this.props.changeShelf(this.props.book, event.target.value )}
        value={this.props.onshelf}
      >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
      </select>
      </div>
    )
  }
}


// function Switcher(props) {
//   return (
//     <div className="switcher">
//       <select onChange={(event) =>
//         this.changeShelf(props.books, event.target.value)
//       }
//         value={props.onshelf}
//       >
//       <option value="move" disabled>Move to...</option>
//       <option value="currentlyReading">Currently Reading</option>
//       <option value="wantToRead">Want to Read</option>
//       <option value="read">Read</option>
//       <option value="none">None</option>
//       </select>
//     </div>
//     )
// }

export default Switcher;

// error - I forget pass props!!!             >
