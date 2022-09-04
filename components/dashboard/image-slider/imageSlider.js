import React, { useState } from "react";
import "./imageSlider.scss";

function ImageSlider() {
  const SliderData = [
    {
      image: "images/dashboard/unsplash_girl.png",
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis
          elementum lobortis amet quis diam urna. Nibh in diam faucibus nibh
          dictum sed tempus. <br /> <br />
          Consequat elementum est quam purus, massa. Mauris adipiscing ac massa
          risus tempus ut lacinia nisl. Imperdiet consectetur ac egestas nunc
          eget nunc.
        </>
      ),
    },
    {
      image: "images/dashboard/unsplash_01.png",
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis
          elementum lobortis amet quis diam urna. Nibh in diam faucibus nibh
          dictum sed tempus. <br /> <br />
          Consequat elementum est quam purus, massa. Mauris adipiscing ac massa
          risus tempus ut lacinia nisl. Imperdiet consectetur ac egestas nunc
          eget nunc.
        </>
      ),
    },
    {
      image: "images/dashboard/unsplash_02.png",
      desc: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis
          elementum lobortis amet quis diam urna. Nibh in diam faucibus nibh
          dictum sed tempus. <br /> <br />
          Consequat elementum est quam purus, massa. Mauris adipiscing ac massa
          risus tempus ut lacinia nisl. Imperdiet consectetur ac egestas nunc
          eget nunc.
        </>
      ),
    },
  ];

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  //  console.log(current)
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="main-container">
      <div className="encapsulator">
        <div>
          <img
            src="images/dashboard/left-arow.png"
            alt=""
            onClick={prevSlide}
            className="left-arrow"
          />
        </div>
        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <div className="image-slider-card-container" key={index}>
                  <div className="image-slider-card">
                    <div className="image-slider-card-image">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="quote-section">
                      <div style={{ marginTop: "" }}>
                        {" "}
                        <img src="images/dashboard/apos.png" alt="" />{" "}
                      </div>
                      <p
                        style={{ fontSize: "1rem", padding: "1em" }}
                      >
                        {" "}
                        {slide.desc}{" "}
                      </p>
                      <div
                        style={{
                          marginTop: "-2.2em",
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                        }}
                      >
                        {" "}
                        <img src="images/dashboard/apos.png" alt="" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div>
          <img
            src="images/dashboard/right-arrow.png"
            alt=""
            onClick={nextSlide}
            className="right-arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
