import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "./../assets/image/slider_1.png";
import image2 from "./../assets/image/slider_2.png";
import image3 from "./../assets/image/slider_3.png";

const SLider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // adjust height based on slide content
  };

  return (
    <section className="relative top-0 mx-auto pt-20 pb-14 overflow-x-hidden">
      <Slider {...settings}>
        {[image1, image2, image3].map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full object-cover max-h-[500px] mx-auto"
              style={{ borderRadius: '8px' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SLider;
