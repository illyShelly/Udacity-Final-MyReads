import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Mainpage from './components/Mainpage';
import Searchpage from './components/Searchpage';

class App extends Component {
  state = {
    // testbooks: ["how", "are", "you", "all"],
    books: []
  }

  // fetch book from API
  componentDidMount() {
    BooksAPI.getAll()
    .then(data => {
      // check contains of data
      // console.log(data);
      this.setState({ books: data })
    })
    .catch(error => console.log(error + " this error happend"))
  }

  // update state when calling event method on switcher
  // without refresh method -> pass other promise
  // pass the method as props through the app
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      console.log(` "${book.title}" moving to: "${shelf}" `);
      BooksAPI.getAll()
      .then((books) => {
        this.setState({books: books})
      })
    })
    .catch(error => console.log(error + " this error happend"));
  }


// do not write (book) => {} wrong syntax
// Each child in an array unique "key" prop.
// id looks like: id: "nggnmAEACAAJ"
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/" className="nav-link">HOME</Link>
          <h1>MyReads</h1>
          <Link to="/search"
          className="nav-link"><span>+</span> Add book</Link>
        </nav>

         {/*<p>{this.state.testbooks[0]}</p> */}
             <Route exact path='/' render={() => (
                <Mainpage
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
              )}
              />
            {/* <Book books={this.state.books} />*/}
            <Route exact path='/search' render={() => (
              <Searchpage
                  // books={this.state.books}
                  changeShelf={this.changeShelf}
                  books={this.state.books}
                />
              )}
            />
      {/*<footer>
        <p>Created by:
          <Link to="https://github.com/illyShelly"
          className="footer-link"> <i>illyShelly</i></Link>
        </p>
        </footer>*/}
      </div>
    );
  }
}

export default App;

// allowAnonLogging: true
// authors: ["William E. Shotts, Jr."]
// averageRating: 4
// canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ"
// categories: ["COMPUTERS"]
// contentVersion: "1.2.2.0.preview.2"
// description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin""
// id: "nggnmAEACAAJ"
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 480
// panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
// previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2012"
// publisher: "No Starch Press"
// ratingsCount: 2
// readingModes: {text: true, image: false}
// shelf: "currentlyReading"
// subtitle: "A Complete Introduction"
// title: "The Linux Command Line"
// __proto__: Object
