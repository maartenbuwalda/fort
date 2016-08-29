import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Navigation.sass';

import DropdownMenuItem from '../DropdownMenuItem'

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles['navigation']}>
        <IndexLink activeClassName={styles['active']} className={styles['main-nav_link']} to=''>Logo</IndexLink>
        <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='agenda'>Agenda</Link>
        <DropdownMenuItem activeClassName={styles['active']} className={styles['main-nav_link']} index='/cursussen' label='Cursussen'>
          <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/1'>Cursus 1</Link>
          <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/2'>Cursus 2</Link>
          <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/3'>Cursus 3</Link>
        </DropdownMenuItem>

        <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='seminars'>Seminars</Link>
        <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='fort-challenge'>Fort Challenge</Link>
        <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='locatie-verhuur'>Locatie verhuur</Link>
        <Link activeClassName={styles['active']} className={styles['main-nav_link']} to='offerte-aanvraag'>Offerte aanvraag</Link>
      </nav>
    )
  }
}

export default Navigation
