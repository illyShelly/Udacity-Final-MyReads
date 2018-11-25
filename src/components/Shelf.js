import React from 'react';
import Book from './Book';

function Shelf(props) {
  return (
    <div className="shelf">
      {/* replace hardcoded text by props shelf Currently Reading ...*/}
      {/* props.children display CONTENT between opening/closing component tag */}
      <h2 className="shelf-title">{props.children}</h2>
      <ul className="books-template">
    {/*display books to the right shelf*/}

        {props.books.filter(book => book.shelf === props.onshelf).map(book => (
            <li key={book.id}>
              <Book
                book={book}
                changeShelf={props.changeShelf}
                onshelf={props.onshelf}
              />
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Shelf;
