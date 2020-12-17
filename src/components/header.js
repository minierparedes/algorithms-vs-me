import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './Header.css';



const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/blog">
            blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


