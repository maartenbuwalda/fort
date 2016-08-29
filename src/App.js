import React, { Component } from 'react';
// import img1 from './assets/images/1.gif';

import './global.sass';
import Navigation from './components/Navigation';
import SlideShow from './components/SlideShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navigation/>*/}
        <SlideShow/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
