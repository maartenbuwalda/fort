import React from 'react';
import { IndexLink, Link, willTransitionTo } from 'react-router';
import styles from './Navigation.sass';

import logo from '../../logo.svg';

import DropdownMenuItem from '../DropdownMenuItem'

class Navigation extends React.Component {

  _handleClick() {
    document.getElementById('hidden-checkbox').checked = false;
    window.scrollTo(0, 520);
  }

  render() {
    return (
      <div className={styles['navigation-wrapper']}>
        <div className={styles['logo']}>
          <IndexLink onClick={this._handleClick} id={styles['logo']} className={styles['main-nav_link']} to=''><img src={logo} alt='logo'/></IndexLink>
        </div>
        <input className={styles['mobile-menu-checkbox']} id='hidden-checkbox' type="checkbox"/>
        <label className={styles['mobile-menu-button-wrapper']} htmlFor='hidden-checkbox'>
          <div className={styles['mobile-menu-button']}/>
        </label>
        <nav className={styles['navigation']}>
          <IndexLink onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to=''>Home</IndexLink>
          {/*<Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='agenda'>Agenda</Link>*/}
          <DropdownMenuItem onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} index='/cursussen' label='Cursussen'>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/teambuilding'>Teambuilding</Link>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/praktisch-leiderschap'>Praktisch leiderschap</Link>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/motiverende-gespreksvoering'>Motiverende gespreksvoering</Link>
            <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/cursussen/omgaan-met-agressie'>Omgaan met agressie</Link>
          </DropdownMenuItem>

          {/*<Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/seminars'>Seminars</Link>*/}
          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/locatie-verhuur'>Locatie verhuur</Link>
          <Link onClick={this._handleClick} activeClassName={styles['active']} className={styles['main-nav_link']} to='/offerte-aanvraag'>Offerte aanvraag</Link>
        </nav>
      </div>
    )
  }
}

export default Navigation
