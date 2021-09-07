import React, { useRef } from 'react'
import Slider from "react-slick";

export default function Card({title,data}) {
  
const sliderRef = useRef();

const [countIndex, setIndexCount] = React.useState(0); 

const gotoNext = () => {
    sliderRef.current.slickNext();
}

const gotoPrev = () => {
    sliderRef.current.slickPrev()
}

const afterChange = ( index) => {
  setIndexCount(index);
};

const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    
    afterChange: afterChange.bind(this),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
     <div className="card__container">
       <div class="header-container">
    <h2 className="header-title">{title}</h2>
              <div class="hs__arrows">
                <a className={'arrow arrow-prev '+ (countIndex == 0 ? 'disabled' : '')} onClick={gotoPrev.bind(this)}></a>
                {console.log(countIndex + " " + (data.length -4) )}
                <a class={'arrow arrow-next ' + (countIndex == (data.length-4) ? 'disabled' : '') } onClick={gotoNext.bind(this)}></a>
              </div>
        </div>

      <Slider ref={sliderRef} {...settings} className="card__container--inner">
   
          {data.map((item, index) => {
            return (
              <div
              className="card__container--inner--card" key={index}>

                <div class="hs__item"> 
                <a class="single-item-wrapper non-decor" href={item.url} target="_blank">
		        			<img class="item-image" alt={item.name} src={item.icon}/>
		        			<div>
		        				<div class="item-title"><h2> {item.name} </h2> </div>
		        				<div class="item-description"> <p class="p1">{item.description}</p> </div>
		        			</div>
		        		</a>
        </div>
              </div>
            );
          })}
        </Slider>
      
     </div>
       
    );
  }
