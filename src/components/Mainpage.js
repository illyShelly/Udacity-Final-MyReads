import React from 'react';
import Shelf from './Shelf';

// on main page 3 shelves
function Mainpage(props) {
  return(
    <div>
      <Shelf
        books={props.books}
        shelf="currentlyReading"
        >Currently Reading</Shelf>
      <Shelf
        books={props.books}
        shelf="wantToRead"
        >Want to read</Shelf>
      <Shelf
        books={props.books}
        shelf="read"
        >Read</Shelf>
    </div>
  )
}

export default Mainpage;
