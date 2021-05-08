import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

function About() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderImg>
          <img src="/assets/store/candy1.png" alt="" />
        </SliderImg>
        <SliderImg>
          <img src="/assets/store/candy2.png" alt="" />
        </SliderImg>
        <SliderImg>
          <img src="/assets/store/candy3.png" alt="" />
        </SliderImg>
        <SliderImg>
          <img src="/assets/store/candy4.png" alt="" />
        </SliderImg>
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  height: 100vh;
`;

const SliderImg = styled.div`
  height: 100%;
`;

export default About;
