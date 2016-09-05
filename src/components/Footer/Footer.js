import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Footer.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles['footer']}></footer>
    )
  }
}

export default Footer
