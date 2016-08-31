import React, { Component } from 'react';
// import img1 from './assets/images/1.gif';

import './global.sass';
import Navigation from './components/Navigation';
import SlideShow from './components/SlideShow';
import Footer from './components/Footer';

class App extends Component {
  willTransitionTo(transition, params, query, callback){
    console.log('test')
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <SlideShow/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
