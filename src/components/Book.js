import React from 'react';

function Book(props) {
  return (
    <div className="book">
      <div
        style={{ width: 128,
          height: 193,
          /*'url("http")'*/
          backgroundImage: `url("${props.book.imageLinks.smallThumbnail}")` }}>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-author">{props.book.authors.join(' | ')}</div>
    </div>
    )
}

export default Book;

// Take away iteration - now iterate through in Shelf
 // {props.books.map(book => (
 //  <li key={book.id}>
 //    <div className="book">
 //        <div
 //          style={{ width: 128,
 //            height: 193,
 //            /*'url("http")'*/
 //            backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}>
 //        </div>
 //        <div className="book-title">{book.title}</div>
 //        <div className="book-author">{book.authors}</div>
 //      </div>
 //  </li>
 //  ))}
