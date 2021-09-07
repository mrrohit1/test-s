import React, { useRef } from 'react'
import Slider from "react-slick";

export default function Banner({data}) {

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000
};

    return (
     <div className="card__container">
      <Slider {...settings} className="card__container--inner">
   
          {data.map((item, index) => {
            return (
              <div className="card__container" key={index}>

                <div class="hs__item"> 
        <div class="hs__item__content__wrapper">
        <a class="single-item-wrapper non-decor" href={item.url} target="_blank">
        <img class="item-banner-image" alt="csd" src={item.banner}/>
        </a>
           </div>
        </div>
              </div>
            );
          })}
        </Slider>
      
     </div>
       
    );
  }
