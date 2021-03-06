import React from 'react';
import Switcher from './Switcher';

function Book(props) {
  const placeholder = "http://via.placeholder.com/128x193?text=No%20Cover";

  return (
    <div className="book">
      <Switcher
        changeShelf={props.changeShelf}
        onshelf={props.onshelf}
        book={props.book} // forget to add book id does not work in Switcher
      />

      <div>
      <img src={props.book.imageLinks ? props.book.imageLinks.smallThumbnail : `${placeholder}`}
          alt={props.book.title}/>
      </div>
      <div className="book-title">
        {props.book.title}
      </div>
      <div className="book-author">
       {props.book.authors ? props.book.authors.join(' | ') : ''}
      </div>
      <div className="book-title">
        {props.book.publishedDate}
      </div>
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

// backgroundImage:`url(${book.imageLinks && book.imageLinks.thumbnail?`${book.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})`
