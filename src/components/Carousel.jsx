import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import residenciesData from "../utils/Slider.json"

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
const swiperSettings = {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 50,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      // spaceBetween: 20
    },
    780: {
      slidesPerView: 3,
      // spaceBetween: 20
    },
    1100: {
      slidesPerView: 4,
      // spaceBetween: 20
    },
  }
}
const Carousel = () => {
   const swiper = useSwiper()
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth c-container">
      <div className='flexColStart c-head'>
        <span className='orangeText'>Best Choices</span>
        <span className='primaryText'>Popular Residencies</span>
      </div>

    <Swiper
      {...swiperSettings}
    >
      <SliderButton />
      {residenciesData.map((data,index) => <SwiperSlide><Card {...data} key={index}/></SwiperSlide>)}
    </Swiper>
    </div>
    </div>
  );
};

export default Carousel;

export const SliderButton = ()=>{
  const swiper = useSwiper()
  const [isDisabled , setIsDisabled] = useState(false)
  
  const handleLeft = () =>{
    swiper.slidePrev()
    if(swiper.isBeginning){
      setIsDisabled("left")
    }else{
      setIsDisabled(false)
    }
  }

  const handleRight = () =>{
    swiper.slideNext()
    if(swiper.isEnd){
      setIsDisabled("right")
    }else{
      setIsDisabled(false)
    }
  }

  return(
    <div className="flexCenter c-button">
      <button onClick={handleLeft} disabled={isDisabled === "left"}>&lt;</button>
      <button onClick={handleRight} disabled={isDisabled === "right"} >&gt;</button>
    </div>
  )
}


export const Card = ({name,price,detail,image}) =>{
  return(
    
      <div className="flexColStart card-container">
          <img src={image} alt={name} />
          <div className='secondaryText'>
            <span>$</span>
            <span>{price}</span>
          </div>
          <span className="primaryText">
            {name}
          </span>
          <span className="secondaryText">
            {detail}
          </span>
        </div>
  )
}