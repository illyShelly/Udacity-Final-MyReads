import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';
import Book from './Book'

class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apibooks: [], // data get from Api search method
      search: '' // at the beggining empty string
    }
  }

  handleSearch(event) {
    // console.log(event) // shows typed string
     BooksAPI.search(event)
     // receive data matched search input string
    .then(data => {
      // console.log(data) // shows found array of objects
      // console.log(this.props.books); // get books from mainpage - NEED TO compare if already displayed
      // let filteredData =
      //   data.map(dat => (this.props.books.filter((book) =>
      //     book.id === dat.id)
      //     .map(book => dat.shelf === book.shelf)))
      // console.log(filteredData);
      this.setState(
        { apibooks: data })
        // { apibooks: filteredData })
    })

    // when search input is empty -> cannot read property .map
    .catch(error => console.log(error + " something went wrong"));
    this.setState({ search: event })
    }

  render() {
    return(
      <div className="search">
        <input
          type="text"
          placeholder="Search by author or title of the book..."
          onChange={(event) => this.handleSearch(event.target.value)}
          // onChange={this.handleSearch}
          value={this.state.search}
        />
        {/*needs to be above - otherwise - each book is in <ul>*/}
        <ul className="books-template">
            {this.state.apibooks.map((book) =>
                <li key={book.id}>
                  <Book
                    book={book}
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

{/*(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {title: "Experience And Education", authors: Array(1), publisher: "Simon and Schuster", publishedDate: "2007-11-01", description: "Experience and Education is the best concise state… historical and social, both orderly and dynamic.", …}
1: {title: "Opening Up Education", subtitle: "The Collective Advancement of Education Through Open Technology, Open Content, and Open Knowledge", authors: Array(2), publisher: "MIT Press", publishedDate: "2008", …}
2: {title: "Emile", subtitle: "Or, On Education", authors: Array(1), publisher: "Basic Books", publishedDate: "1979", …}
3: {title: "Issues in Education Research", subtitle: "Problems and Possibilities", authors: Array(2), publisher: "Jossey-Bass", publishedDate: "1999-06-29", …}
4: {title: "Knowledge, Politics and the History of Education", authors: Array(1), publisher: "LIT Verlag Münster", publishedDate: "2012", description: "The humanities and social science disciplines have…ame time? (Series: Studies on Education - Vol. 2)", …}
5: {title: "On Education", authors: Array(1), publisher: "Psychology Press", publishedDate: "1985-01", description: "'With admirable clarity, Mrs Peters sums up what d…ches to its teaching.' -Times Literary Supplement", …}
6: {title: "On Education", authors: Array(2), publisher: "Courier Corporation", publishedDate: "2003-12", description: ""One of the greatest problems of education," Kant …evel — an innovative notion for the 18th century.", …}
7: {title: "The Race Between Education and Technology", authors: Array(2), publisher: "Harvard University Press", publishedDate: "2008", description: "This book provides a careful historical analysis o…low-down and what might be done to ameliorate it.", …}
8: {title: "Real Education", subtitle: "Four Simple Truths for Bringing America's Schools Back to Reality", authors: Array(1), publisher: "Crown Forum", publishedDate: "2008-08-19", …}
9: {title: "The Way of Mindful Education: Cultivating Well-Being in Teachers and Students", authors: Array(1), publisher: "W. W. Norton & Company", publishedDate: "2014-06-08", description: "A new educational paradigm for youth mindfulness. …ssionate, ethical, and effective way of teaching.", …}
10: {title: "The Process of Education, Revised Edition", authors: Array(1), publisher: "Harvard University Press", publishedDate: "2009-06-30", industryIdentifiers: Array(2), …}
11: {title: "On Education", authors: Array(1), publisher: "Transaction Publishers", publishedDate: "1977", industryIdentifiers: Array(2), …}
12: {title: "Irish Education", subtitle: "Its History and Structure", authors: Array(1), publisher: "Institute of Public Administration", publishedDate: "1981", …}
13: {title: "Education at the Crossroads", authors: Array(1), publisher: "Yale University Press", publishedDate: "1943", description: "The author, a modern Catholic writer-philosopher, sets forth his views on Christian education.", …}
14: {title: "The Mcdonaldization of Higher Education", authors: Array(1), publisher: "IAP", publishedDate: "2006", industryIdentifiers: Array(2), …}
15: {title: "Instead of Education", subtitle: "Ways to Help People Do Things Better", authors: Array(2), publisher: "Sentient Publications", publishedDate: "2004", …}
16: {title: "Locke's Education for Liberty", authors: Array(1), publisher: "Lexington Books", publishedDate: "1999-01-01", description: "Locke's Education for Liberty presents an analysis…unity heretofore unrecognized in Locke's thought.", …}
17: {title: "Early Childhood Education [Four Volumes]", authors: Array(2), publisher: "Greenwood Publishing Group", publishedDate: "2006-12-01", industryIdentifiers: Array(2), …}
18: {title: "Changing Perspectives on International Education", authors: Array(3), publisher: "Indiana University Press", publishedDate: "2001", description: "More than 40 years ago, recognizing that higher ed…xtensive bibliography of international resources.", …}
19: {title: "Theory and Principles of Education", authors: Array(1), publisher: "Discovery Publishing House", publishedDate: "2004-01-01", description: "Contents: Meaning, Nature and Scope of Education, … National and Emotional Integration by Education.", …}
length: 20
__proto__: Array(0)
*/}
