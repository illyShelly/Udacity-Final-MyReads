import React from 'react';
import Shelf from './Shelf';

// on main page 3 shelves
function Mainpage(props) {
  return(
    <div>
      <Shelf
        books={props.books}
        shelf="currentlyReading"
        >Reading Right Now</Shelf>
      <Shelf
        books={props.books}
        shelf="wantToRead"
        >Desire To Read</Shelf>
      <Shelf
        books={props.books}
        shelf="read"
        >Just Finished</Shelf>
    </div>
  )
}

export default Mainpage;
