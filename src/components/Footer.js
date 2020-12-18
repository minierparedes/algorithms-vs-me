import React from 'react'
import styles from './Footer.css'

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a
          href={"https://twitter.com/minierparedes"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={"https://github.com/minierparedes"}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className={styles.copyright}><p>
Minierparedes
© {new Date().getFullYear()}
{` `}
</p></div>
    </div>
  </footer>
)

export default Footer
