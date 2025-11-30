import "./Sec6.css";
// import img1 from "../../miguel-lindo-jtQODYphMt4-unsplash.jpg";
import img2 from "../../image/logooo.png";
import img3 from "../../image/alberto-rudolphi-YTc2kHz5L9s-unsplash.jpg";
import { IoStarHalf } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const Sec6 = () => {
  return (
    <>
      <div className="sec6 w-full h-200 mt-10 flex">
        <div className="image flex items-center justify-center">
          <img src={img3} alt="" />
        </div>
        <div className="dec-sec flex flex-col">
          <div className="text-dec mt-50">
            <h5 className="text-4xl font-[yekan] flex mb-8 ms-14">
              {/* <IoStarHalf className="ms-2 me-3" /> */}
              ایده شما اجرا میشود
            </h5>
            <p className="dec-1 text-md font-[yekan] w-150 ms-15">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </p>
          </div>
          <div className="text-bullet mt-10 ps-14 font-[yekan]">
            <div className="bullets flex">
              <CiCircleCheck />
              <h6>خلاقیت زیاد</h6>
            </div>
            <div className="bullets flex">
              <CiCircleCheck />
              <h6>موارد بصری خلاقانه</h6>
            </div>
            <div className="bullets flex">
              <CiCircleCheck />
              <h6>باکیفیت و بهینه شده</h6>
            </div>
          </div>
          <div className="buttton h-10 mt-10 ps-15 flex items-center text-sm">
            <p className="w-30 h-8 flex justify-center items-center rounded-lg cursor-pointer">
              بیشتر بدانید
            </p>
          </div>
          <div className="infinityy flex h-32 mt-12  self-center relative">
            <div className="auto-scroll-1 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-2 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-3 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-4 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-5 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-6 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            {/* <div className="auto-scroll-7 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div>
            <div className="auto-scroll-8 flex justify-center items-center absolute">
              <img src={img2} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec6;
