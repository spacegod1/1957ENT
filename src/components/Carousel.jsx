import { slides } from "../data/carouselData.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  const prevSlide = () => {
    setCurrentItem(currentItem === 0 ? slides.length - 1 : currentItem - 1);
  };

  const nextSlide = () => {
    setCurrentItem(currentItem === slides.length - 1 ? 0 : currentItem + 1);
  };

  return (
    <>
      <div className="flex relative">
        <FaChevronLeft
          size={25}
          className="arrow arrow_left"
          onClick={prevSlide}
        />
        {slides.map((item, index) => {
          return (
            <img
              className={
                currentItem === index
                  ? "max-w-full h-auto rounded-md"
                  : "hidden"
              }
              key={index}
              src={item.src}
              alt={item.alt}
            />
          );
        })}
        <FaChevronRight
          size={25}
          className="arrow arrow_right"
          onClick={nextSlide}
        />
      </div>
    </>
  );
}

export default Carousel;
