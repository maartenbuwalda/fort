import React from 'react';
import styles from './SlideShow.sass';

import img1 from '../../assets/images/1.gif'

const images = [
  "http://placehold.it/1080x400",
  "http://placehold.it/1080x400",
  "http://placehold.it/1080x400"
]

class SlideShow extends React.Component {

  constructor(props) {
    super(props)
    this._startShow = this._startShow.bind(this)
    this._showSlide = this._showSlide.bind(this)
    this._hideSlide = this._hideSlide.bind(this)
    this._selectSlide = this._selectSlide.bind(this)

    this.state = {}
  }

  _startShow(slides) {
    var index = 0;
    slides[index].id = styles['active'];
    setInterval(function(){
      console.log("Hello", index);
      if(index >= slides.length - 1){
        index = 0
      } else {
        index++
      }
      // this._showSlide(index)
    }, 1000);
  }

  _showSlide(slide) {
    console.log("show slide")
    // slide.id = styles['active'];
  }

  _hideSlide(slide) {
    slide.id = '';
  }

  _selectSlide(i) {
    console.log(i)
  }

  componentDidMount() {
    var slides = document.getElementsByClassName('slide');
    this._startShow(slides)
  }

  render() {
    var self = this;
    return (
      <div className={styles['slideshow']}>
        {images.map(function(item, i){
          return <div className={styles['slide'] + ' slide'} style={{backgroundImage: 'url(' + item + ')',}} key={i} alt="test"></div>
        })}
        <ul className={styles['slideshow-navigation']} id='slideshow'>
          {images.map(function(item, i){
            return <li onClick={() => self._selectSlide(i)} className={styles['slideshow-navigation_bullet']} key={i}></li>
          })}
        </ul>
      </div>
    )
  }
}

export default SlideShow
