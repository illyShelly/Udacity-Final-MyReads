import React from 'react';

function Book(props) {
  return (
    <div>
     <ul className="books-template">
       {props.books.map(book => (
        <li key={book.id}>
          <div className="book">

              <div
                style={{ width: 128,
                  height: 193,
                  /*'url("http")'*/
                  backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.authors}</div>
            </div>
        </li>
        ))}
      </ul>
    </div>
    )
}

export default Book
