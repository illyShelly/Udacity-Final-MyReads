import React from 'react';

function Switcher(props) {
  return (
    <div className="switcher switcher-icon">
      <select onChange={(event) =>
        props.changeShelf(props.book, event.target.value)}
      // current value of the book's shelf
      // added for Search page to have default shelf-value for searched book
        value={props.book.shelf || 'none'}
      >
      <option value="move" disabled>JUMP to...</option>
      <option value="currentlyReading">Reading Right Now</option>
      <option value="wantToRead">Desire To Read</option>
      <option value="read">Just Finished</option>
      <option value="none">None</option>
      </select>
    </div>
    )
}

export default Switcher;

// error - I forget pass props!!!             >
// missing Book component in switcher to pass down


// import React, { Component } from 'react';
// class Switcher extends Component {

//   render() {
//     return (
//       <div className="switcher">
//       <select onChange={(event) => this.props.changeShelf(this.props.book, event.target.value )}
//         value={this.props.book.shelf}
//       >
//       <option value="move" disabled>Move to...</option>
//       <option value="currentlyReading">Currently Reading</option>
//       <option value="wantToRead">Want to Read</option>
//       <option value="read">Read</option>
//       <option value="none">None</option>
//       </select>
//       </div>
//     )
//   }
// }
