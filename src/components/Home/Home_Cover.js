import React from 'react';
import './Home.css';
import { Slide } from 'react-slideshow-image';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
// const slideImages = [
//     './4.jpg',
//     './2.jpg',
//     './9.jpg'
//   ];
//   const properties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     arrows: true,
//     onChange: (oldIndex, newIndex) => {
//       console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//     }
//   }
const Home_Cover = () => {
    return (
        <div id="home-cover">
          {/* <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide> */}
          {/* <Carousel
            autoPlay={2000}
            animationSpeed={1000}
            infinite
            >
            <img src={"./9.jpg"} />
            <img src={"./4.jpg"} />
            <img src={"./2.jpg"} />
            </Carousel> */}

        </div>
      )
}

export default Home_Cover;