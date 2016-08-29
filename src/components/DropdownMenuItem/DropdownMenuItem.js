import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './DropdownMenuItem.sass';

class DropdownMenuItem extends React.Component {
  render() {
    return (
      <div className={styles['dropdown']}>
        <Link
          className={this.props.className}
          activeClassName={this.props.activeClassName}
          to={this.props.index}>
          {this.props.label}
        </Link>
        <ul className={styles['dropdown-menu']}>
          {this.props.children.map(function(item, i){
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default DropdownMenuItem
