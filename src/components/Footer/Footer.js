import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Footer.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles['footer']}><a href="mailto:info@go-fort.nl">info@go-fort.nl</a></footer>
    )
  }
}

export default Footer
