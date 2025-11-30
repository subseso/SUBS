import "./Hero.css";
// import image1 from "../../y-s-9UN-SXYdcOQ-unsplash.webp";
// import image2 from "../../urban-vintage-78A265wPiO4-unsplash.jpg";
import image3 from "../../image/zouhair-majzoub-Co1PdGUlNxk-unsplash.jpg";

const Hero = () => {
  return (
    <>
      <div className="wrapper w-full flex justify-center items-start">
        <img src={image3} alt="" className="absolute top-0" draggable="false" />
        <div
          className="dec h-auto flex flex-col justify-center items-center text-white opacity-70 me-2.5"
          draggable="false"
        >
          <h2 className="text-5xl text-black text-center">خوش آمدید</h2>
          <h1 className="text-8xl text-gray-600 text-center" draggable="false">
            سایت تست
          </h1>
          <div className="button w-32 h-12 mt-10 flex justify-center items-center">
            <p className="text-md me-1">بیشتر بدانید</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
