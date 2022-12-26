import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliderr = ({ image }) => {
  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: false,
  };
  return (
    <div
      style={{
        background: "lightgray",
        padding: "10px",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <div style={{ height: "65vh" }}>
        <Slider {...settings}>
          {image.map((item) => {
            return (
              <div
                style={{
                  width: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              >
                <img
                  src={item.imgUrl}
                  style={{
                    height: "55vh",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                />
                <p>{item.detail}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Sliderr;
