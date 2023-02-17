import React from 'react'
import Slider  from "react-slick";

import './slider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SearchComponent from '../searchComponent/SearchComponent';


type Props = {}

const SlideComponent = (props: Props) => {
 
  
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   arrows: true,
  //   padding: 0,
  //   margin:0,
  //   speed: 500,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   fade: true,
  //   adaptiveHeight: true
  // };

  let ImageList:{url?:string}[] = [{
    url:'/assets/wallpaper1.png'
   },
   {
    url:'/assets/joker.jpg'
   },
   {
    url:'/assets/game_of_thrones.jpg'
   },
  {
    url:'/assets/house-of-dragon.jpg'
  }]
  

  const settings={
   
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    // fade: true,
    padding: 0,
   margin:0,
   
   adaptiveHeight: true,
   customPaging: function(i:number) {
    return  <div className='dots'>{i} </div>
    
  },
  }
 

  
  return (
   <>
    
      <div className='slider-wrapper' >
        {/* <Slider {...settings}> */}

        <Slider  dotsClass="slick-dots line-indicator" {...settings}>
          {
            ImageList.map( (data,i) => {
              return( 
               
                <div className='image-container' key={i}>


                    <img src={data.url} alt='cover'  className='cover-image'  />

                                     
                       
                </div>
                 
                
              )
            } )
          }
        </Slider>

        <div className='search-container'>
                 <SearchComponent />
                 
               </div>  
      </div>
   </>
  )
}

export default SlideComponent;