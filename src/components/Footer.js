import React from 'react';
import styles from './Footer.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => (
    <footer className="footer" >
        <div className={styles.container}>
            <div>
                <a className="twitter"
                    href={"https://twitter.com/minierparedes"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter link"
                ><FaTwitter /></a>
                <a className="github"
                    href={"https://github.com/minierparedes"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github link"
                ><FaGithub /></a>
                <a className="linkedin"
                    href={"https://www.linkedin.com/in/minierparedes/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin link"
                ><FaLinkedinIn /></a>
            </div>
            <div className={styles.copyright}><p>
                Minierparedes
© {new Date().getFullYear()}
            </p></div>
        </div>
    </footer>
)

export default Footer
