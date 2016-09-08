import React from 'react';
import { IndexLink, Link, willTransitionTo } from 'react-router';
import styles from './Navigation.sass';

import logo from '../../logo.svg';

import DropdownMenuItem from '../DropdownMenuItem'

class Navigation extends React.Component {

  _handleClick() {
    document.getElementById('hidden-checkbox').checked = false;
  }

  render() {
    return (
      <div className={styles['navigation-wrapper']}>
        <IndexLink onClick={this._handleClick} id={styles['logo']} className={styles['main-nav_link']} to=''><img src={logo} alt='logo'/></IndexLink>
        <label className={styles['mobile-menu-button']} htmlFor='hidden-checkbox'></label>
        <input className={styles['mobile-menu-checkbox']} id='hidden-checkbox' type="checkbox"/>
        <nav className={styles['navigation']}>
          <IndexLink onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to=''>Home</IndexLink>
          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='agenda'>Agenda</Link>
          <DropdownMenuItem onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} index='/cursussen' label='Cursussen'>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/1'>Cursus 1</Link>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/2'>Cursus 2</Link>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/3'>Cursus 3</Link>
          </DropdownMenuItem>

          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='seminars'>Seminars</Link>
          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='locatie-verhuur'>Locatie verhuur</Link>
          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='offerte-aanvraag'>Offerte aanvraag</Link>
        </nav>
      </div>
    )
  }
}

export default Navigation
