import "./Sec1.css";
import "swiper/css";
import { useRef, useState } from "react";
import image1 from "../../image/Roseberry-HERO-og_8756f646_thumbnail_4096.avif";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Sec1 = () => {
  const menuItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  const [hov, itemhov] = useState(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <hr />
      <div className="sec-2 w-full flex flex-col items-center mt-10 mb-10 relative">
        <div className="dec-secc flex items-center relative w-full h-32">
          <p className="absolute right-0 ps-5 text-4xl font-[dana-thin]">
            محصولات نمونه
          </p>
          <div className="but-secc flex justify-center items-center absolute left-0 me-10 font-[dana] cursor-pointer">
            <p>بیشتر بدانید</p>
          </div>
        </div>
        <div
          className="carousel rounded-box"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {menuItems.map((item, index) => {
            return (
              <>
                <div
                  className="carousel-item flex flex-col font-[dana-thin] font-bold"
                  onMouseMove={() => {
                    itemhov(index);
                  }}
                  onMouseLeave={() => {
                    itemhov(null);
                  }}
                  key={item.id}
                >
                  <img src={image1} alt="" draggable="false" />
                  <div className="text-caro m-4">
                    <p>تایتل 1</p>
                    <span>قیمت از 100 تومن</span>
                  </div>
                  <div
                    className={`border-item ${
                      hov == index ? "border-hov" : "border-unhov"
                    }`}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sec1;
