import React from "react";
import Slider from "react-slick";

interface AppCarouselProps {
  children: React.ReactNode;
  settings?: object;
}

const AppCarousel: React.FC<AppCarouselProps> = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <Slider
      {...(props.settings ? props.settings : settings)}
      className="h-auto"
    >
      {props.children}
    </Slider>
  );
};

export default AppCarousel;
