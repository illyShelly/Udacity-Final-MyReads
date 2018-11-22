import React from 'react';

function Switcher() {
  return (
    <div className="switcher">
      <select>
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
