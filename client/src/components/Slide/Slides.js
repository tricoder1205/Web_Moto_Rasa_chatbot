import { memo, useEffect, useState } from "react";
import banner1 from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import "./slides.scss";

function Slides() {
  const slides = [banner1, banner2, banner3, banner4, banner5];
  const [slideIndex, setSlideIndex] = useState(0);

  const timeOut = 5000

  const nextSlide = () => {
    // dataLength = 4
    //activeSlide : 0,1,2,3
    const index = slideIndex + 1 === slides.length ? 0 : slideIndex + 1
      setSlideIndex(index)
    };
    useEffect(() => {
          const slideAuto = setInterval(() => {
              nextSlide()
          }, timeOut);

          return () => {
              clearInterval(slideAuto)
          }
    })

    return (
      <div className="slides">
          <img src={slides[slideIndex]} alt="slides"/>

          <div className="slides_control">
              {
                slides.map((slide, index) =>(
                  <div 
                    key={index} 
                    className={`circle ${slideIndex === index ? 'circle_active' : ''}`}
                    onClick={()=>setSlideIndex(index)}
                  />
                ))
              }
          </div>
      </div>
    );
  }
  
  export default memo(Slides);