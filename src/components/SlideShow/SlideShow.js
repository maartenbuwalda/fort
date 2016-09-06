import React from 'react';
import styles from './SlideShow.sass';
import { Link } from 'react-router';



import img1 from '../../assets/images/1.gif'

// Move to reducer
const images = [
  {
    img: "http://maartenbuwalda.com/go-fort/1.jpeg",
    text: "Tekstje over foto 1",
    link: ""
  },
  {
    img: "http://maartenbuwalda.com/go-fort/2.jpeg",
    text: "Tekstje over foto 2",
    link: ""
  },
  {
    img: "http://maartenbuwalda.com/go-fort/3.jpeg",
    text: "Tekstje over foto 3",
    link: ""
  },
  {
    img: "http://maartenbuwalda.com/go-fort/4.jpeg",
    text: "Tekstje over foto 4",
    link: ""
  },
  {
    img: "http://maartenbuwalda.com/go-fort/5.jpeg",
    text: "Tekstje over foto 5",
    link: ""
  }
]

class SlideShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.timer = undefined;
  }

  _startSlideshow(index) {
    var index = index;
    var slides = document.getElementsByClassName('slide');
    var bullets = document.getElementsByClassName('bullet');
    var labels = document.getElementsByClassName('label');

    var setId = () => {
      for (var i = 0; i <= slides.length - 1; i++){
        slides[i].id = ''
        bullets[i].id = ''
        labels[i].id = ''
        slides[index].id = styles['active']
        bullets[index].id = styles['active']
        labels[index].id = styles['active']
      }
    }

    this.timer = setInterval(function(){
      if (index >= slides.length - 1){
        index = 0
        setId()
      } else {
        index++
        setId()
      }
    }, 5000);

    setId();
  }

  _selectSlide(i) {
    clearInterval(this.timer)
    this._startSlideshow(i)
  }

  componentDidMount() {
    this._startSlideshow(0);
  }

  render() {
    var self = this;
    return (
      <div className={styles['slideshow']}>
        {images.map(function(item, i){
          return <div className={styles['slide'] + ' slide'} style={{backgroundImage: 'url(' + item.img + ')',}} key={i} alt="test"></div>
        })}
        <div className={styles['slideshow-labels']}>
          {images.map(function(item, i){
            return <div className={styles['label']}><Link to={item.link} key={i}>{item.text}</Link></div>
          })}
        </div>
        <ul className={styles['slideshow-navigation']} id='slideshow'>
          {images.map(function(item, i){
            return <li onClick={() => self._selectSlide(i)} className={styles['slideshow-navigation_bullet'] + ' bullet'} key={i}></li>
          })}
        </ul>
      </div>
    )
  }
}


export default SlideShow
