import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,  // 페이드 효과 추가
    prevArrow: <PrevArrow />,  // 사용자 정의 이전 화살표
    nextArrow: <NextArrow />   // 사용자 정의 다음 화살표
  };

  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5"
  ];

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="pretty-slider">
        {images.map((img, index) => (
          <div key={index} className="slide-container">
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// 사용자 정의 이전 화살표 컴포넌트
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick} />
  );
};

// 사용자 정의 다음 화살표 컴포넌트
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick} />
  );
};

export default ImageSlider;