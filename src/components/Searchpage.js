import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import Shelf from './Shelf';


class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apibooks: [], // data get from Api search method
      search: '' // at the beggining empty string
    }
  }
  // 1. handle event from input search
  // 2. method get API data - display all when search
    //  - promise all OK / catch error
    //  - change state for search string
  // 3. solving if/else statement - when search input is empty - deleted
  // 4. display all books on search page with assigning shelf value
    // - compare book.id with apibook.id from data
    // - when match -> assign book.shelf value to searched book's shelf
 // 5. solve default shelf for data apibooks - in Switcher

  handleSearch(event) {
    if(event) {
     // console.log(event) // shows typed string
     BooksAPI.search(event)
     // receive data matched search input string
    .then(data => {
      // console.log(data)
      // console.log(data.map(dat => dat.shelf)) // testing array of objects
      // console.log(this.props.books.map(book => book.id) + " from main");
      let value='none'
      let assignShelfById = data.filter(dat => (this.props.books.filter((book) => book.id === dat.id).map(bo => dat.shelf = bo.shelf)));
      this.setState(
        // { apibooks: data })
        { apibooks: assignShelfById
        })
    })
    // when search input is empty -> cannot read property .map
    .catch(error => console.log(error + " something went wrong"));
    // change state when search input contain any string/letter
    this.setState({ search: event })
    }
    // delete string from input search - back to empty state => no error .map
    else {
      this.setState({
        search: '',
        apibooks: []
      })
    }
 }

  render() {
    return(
      <div className="search">
        <input
          type="text"
          placeholder="Search by author or title of the book ..."
          onChange={(event) => this.handleSearch(event.target.value)}
          // onChange={this.handleSearch}
          value={this.state.search}
        />
        {/*needs to be above - otherwise - each book is in <ul>*/}
        <ul className="books-template">
            {this.state.apibooks.map((apibook) =>
              <li key={apibook.id}>
                <Book
                  book={apibook}
                  changeShelf={this.props.changeShelf}
                />
              </li>
            )}
        </ul>
    </div>
    )
  }
}

export default Searchpage;

// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {title: "Experience And Education", authors: Array(1), publisher: "Simon and Schuster", publishedDate: "2007-11-01", description: "Experience and Education is the best concise state… historical and social, both orderly and dynamic.", …
