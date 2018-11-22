import React from 'react';

function Switcher(props) {
  return (
    <div className="switcher">
      <select onChange={(event) =>
        props.changeShelf(console.log(props.book), event.target.value)
      }
        value={props.onshelf}
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

export default Switcher;

// error - I forget pass props!!!             >
