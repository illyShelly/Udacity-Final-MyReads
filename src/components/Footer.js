import React from 'react';
import { Link } from 'react-router-dom';


// on main page 3 shelves
function Footer() {
  return(
    <footer>
        <p>Created by:
          <Link to="https://github.com/illyShelly"
          className="footer-link"> <i>illyShelly</i></Link>
        </p>
        </footer>
  )
}

export default Footer;
