import React from 'react';
import Shelf from './Shelf';

// on main page 3 shelves
function Mainpage(props) {
  return(
    <div>
      <Shelf
        books={props.books}
        changeShelf={props.changeShelf}
        onshelf="currentlyReading"
        >Reading Right Now</Shelf>
      <Shelf
        books={props.books}
        changeShelf={props.changeShelf}
        onshelf="wantToRead"
        >Desire To Read</Shelf>
      <Shelf
        books={props.books}
        changeShelf={props.changeShelf}
        onshelf="read"
        >Just Finished</Shelf>
    </div>
  )
}

export default Mainpage;
